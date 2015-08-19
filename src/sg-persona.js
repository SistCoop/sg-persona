'use strict';

(function () {

    var module = angular.module('sg-persona', ['restangular', 'ngFileUpload']);

    module.provider('sgPersona', function () {

        this.restUrl = 'http://localhost';

        this.$get = function () {
            var restUrl = this.restUrl;
            return {
                getRestUrl: function () {
                    return restUrl;
                }
            }
        };

        this.setRestUrl = function (restUrl) {
            this.restUrl = restUrl;
        };
    });

    module.factory('PersonaRestangular', ['Restangular', 'sgPersona', function (Restangular, sgPersona) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(sgPersona.getRestUrl());
        });
    }]);

    var RestObject = function (path, restangular, extendMethods) {
        var modelMethods = {

            /**
             * Retorna url*/
            $getModelMethods: function () {
                return modelMethods;
            },

            /**
             * Retorna url*/
            $getBasePath: function () {
                return path;
            },
            /**
             * Retorna la url completa del objeto*/
            $getAbsoluteUrl: function () {
                return restangular.one(path, this.id).getRestangularUrl();
            },
            /**
             * Concatena la url de subresource con la url base y la retorna*/
            $concatSubResourcePath: function (subResourcePath) {
                return this.$getBasePath() + '/' + this.id + '/' + subResourcePath;
            },


            $new: function (id) {
                return angular.extend({id: id}, modelMethods);
            },
            $build: function () {
                return angular.extend({id: undefined}, modelMethods, {
                    $save: function () {
                        return restangular.all(path).post(this);
                    }
                });
            },

            $search: function (queryParams) {
                return restangular.all(path).customGET('', queryParams);
            },

            $find: function (id) {
                return restangular.one(path, id).get();
            },
            $save: function () {
                return restangular.one(path, this.id).customPUT(restangular.copy(this), '', {}, {});
            },
            $saveSent: function (obj) {
                return restangular.all(path).post(obj);
            },

            $enable: function () {
                return restangular.one(path, this.id).all('enable').post();
            },
            $disable: function () {
                return restangular.one(path, this.id).all('disable').post();
            },
            $remove: function () {
                return restangular.one(path, this.id).remove();
            }
        };

        modelMethods = angular.extend(modelMethods, extendMethods);

        restangular.extendModel(path, function (obj) {
            if (angular.isObject(obj)) {
                return angular.extend(obj, modelMethods);
            } else {
                return angular.extend({id: obj}, modelMethods)
            }
        });

        restangular.extendCollection(path, function (collection) {
            angular.forEach(collection, function (row) {
                angular.extend(row, modelMethods);
            });
            return collection;
        });

        return modelMethods;
    };

    module.factory('SGEstadoCivil', ['PersonaRestangular', function (PersonaRestangular) {
        var estadosCivilesResource = RestObject('estadosCiviles', PersonaRestangular);
        return estadosCivilesResource;
    }]);

    module.factory('SGSexo', ['PersonaRestangular', function (PersonaRestangular) {
        var sexosResource = RestObject('sexos', PersonaRestangular);
        return sexosResource;
    }]);

    module.factory('SGTipoEmpresa', ['PersonaRestangular', function (PersonaRestangular) {
        var sexosResource = RestObject('tiposEmpresa', PersonaRestangular);
        return sexosResource;
    }]);

    module.factory('SGTipoPersona', ['PersonaRestangular', function (PersonaRestangular) {
        var tiposPersonaResource = RestObject('tiposPersona', PersonaRestangular);
        return tiposPersonaResource;
    }]);

    module.factory('SGTipoDocumento', ['PersonaRestangular', function (PersonaRestangular) {
        var extendMethod = {
            $new: function (abreviatura) {
                return angular.extend({abreviatura: abreviatura}, this.$getModelMethods());
            },
            $build: function () {
                return angular.extend({abreviatura: undefined}, this.$getModelMethods(), {
                    $save: function () {
                        return PersonaRestangular.all(this.$getBasePath()).post(this);
                    }
                });
            },
            $save: function () {
                return PersonaRestangular.one(this.$getBasePath(), this.abreviatura).customPUT(PersonaRestangular.copy(this), '', {}, {});
            },
            $enable: function () {
                return PersonaRestangular.one(this.$getBasePath(), this.abreviatura).all('enable').post();
            },
            $disable: function () {
                return PersonaRestangular.one(this.$getBasePath(), this.abreviatura).all('disable').post();
            },
            $remove: function () {
                return PersonaRestangular.one(this.$getBasePath(), this.abreviatura).remove();
            }
        };

        var tiposDocumentoResource = RestObject('tipoDocumentos', PersonaRestangular, extendMethod);
        return tiposDocumentoResource;
    }]);

    module.factory('SGPersonaNatural', ['PersonaRestangular', 'Upload', function (PersonaRestangular, Upload) {

        var extendMethod = {
            $setFoto: function (file) {
                var urlFile = PersonaRestangular.one(this.$getBasePath(), this.id).all('foto').getRestangularUrl();
                return Upload.upload({
                    url: urlFile,
                    file: file
                });
            },
            $setFirma: function (file) {
                var urlFile = PersonaRestangular.one(this.$getBasePath(), this.id).all('firma').getRestangularUrl();
                return Upload.upload({
                    url: urlFile,
                    file: file
                });
            }
        };

        var personaNaturalResource = RestObject('personas/naturales', PersonaRestangular, extendMethod);

        return personaNaturalResource;
    }]);

    module.factory('SGPersonaJuridica', ['PersonaRestangular', 'Upload', function (PersonaRestangular) {

        var extendMethod = {};

        var personaJuridicaResource = RestObject('personas/juridicas', PersonaRestangular, extendMethod);

        /**
         * Accionistas*
         * */
        personaJuridicaResource.SGAccionista = function () {
            var extendMethod = {};

            var accionistaSubResource = RestObject(this.$concatSubResourcePath('accionistas'), PersonaRestangular, extendMethod);

            return accionistaSubResource;
        };

        return personaJuridicaResource;
    }]);


})();
