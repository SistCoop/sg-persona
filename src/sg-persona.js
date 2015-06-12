'use strict';

(function(){

    var module = angular.module('sg-persona', ['restangular', 'ngFileUpload']);

    module.provider('sgPersona', function() {

        this.restUrl = 'http://localhost';

        this.$get = function() {
            var restUrl = this.restUrl;
            return {
                getRestUrl: function() {
                    return restUrl;
                }
            }
        };

        this.setRestUrl = function(restUrl) {
            this.restUrl = restUrl;
        };
    });

    module.factory('PersonaRestangular', ['Restangular', 'sgPersona', function(Restangular, sgPersona) {
        return Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(sgPersona.getRestUrl());
        });
    }]);

    module.factory('PersonaAbstractModel', ['PersonaRestangular', function(PersonaRestangular){
        var url = '';
        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        }
    }]);

    module.factory('SGEstadoCivil', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'estadosCiviles';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },

            $disable: function(){
                return PersonaRestangular.all(url+'/'+this.id+'/disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGSexo', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'sexos';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },

            $disable: function(){
                return PersonaRestangular.all(url+'/'+this.id+'/disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGTipoDocumento', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'tipoDocumentos';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.abreviatura).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $searchByPersonaNatural: function(){
                return PersonaRestangular.all(url).getList({tipoPersona: 'natural'});
            },
            $searchByPersonaJuridica: function(){
                return PersonaRestangular.all(url).getList({tipoPersona: 'juridica'});
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },


            $disable: function(){
                return PersonaRestangular.all(url+'/'+this.id+'/disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGTipoEmpresa', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'tiposEmpresa';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },

            $disable: function(){
                return PersonaRestangular.all(url+'/'+this.id+'/disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGTipoPersona', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'tiposPersona';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },

            $disable: function(){
                return PersonaRestangular.all(url+'/'+this.id+'/disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGPersonaNatural', ['PersonaRestangular', 'Upload',  function(PersonaRestangular, Upload) {

        var url = 'personas/naturales';
        var urlBuscar = url +'/buscar';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $findByTipoNumeroDocumento: function(tipoDocumento, numeroDocumento){
                var params = {
                    tipoDocumento: tipoDocumento,
                    numeroDocumento: numeroDocumento
                };
                return PersonaRestangular.one(urlBuscar).get(params);
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },

            $disable: function(){
                return PersonaRestangular.one(url, this.id).all('disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            },

            $setFoto: function(file){
                var urlFile = PersonaRestangular.one(url, this.id).all('foto').getRestangularUrl();
                return Upload.upload({
                    url: urlFile,
                    file: file
                });
            },
            $setFirma: function(file){
                var urlFile = PersonaRestangular.one(url, this.id).all('firma').getRestangularUrl();
                return Upload.upload({
                    url: urlFile,
                    file: file
                });
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });
        PersonaRestangular.extendModel(urlBuscar, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGPersonaJuridica', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'personas/juridicas';
        var urlBuscar = url +'/buscar';
        var urlCount = url + '/count';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $findByTipoNumeroDocumento: function(tipoDocumento, numeroDocumento){
                var params = {
                    tipoDocumento: tipoDocumento,
                    numeroDocumento: numeroDocumento
                };
                return PersonaRestangular.one(urlBuscar).get(params);
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $count: function(){
                return PersonaRestangular.one(urlCount).get();
            },

            $disable: function(){
                return PersonaRestangular.one(url, this.id).all('disable').post();
            },
            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            },

            $getAccionistas: function(queryParams){
                return PersonaRestangular.one(url, this.id).all('accionistas').getList(queryParams);
            },
            $addAccionista: function(obj){
                return PersonaRestangular.one(url, this.id).all('accionistas').post(obj);
            },
            $updateAccionista: function (id, obj) {
                return PersonaRestangular.one(url, this.id).one('accionistas', id).customPUT(PersonaRestangular.copy(obj), '', {}, {});
            },
            $removeAccionista: function (id) {
                return PersonaRestangular.one(url, this.id).one('accionistas', id).remove();
            }

        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });
        PersonaRestangular.extendModel(urlBuscar, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

    module.factory('SGAccionista', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'accionistas';

        var modelMethos = {
            $new: function(id){
                return angular.extend({id: id}, modelMethos);
            },
            $build: function(){
                return angular.extend({id: undefined}, modelMethos, {$save: function(){
                    return PersonaRestangular.all(url).post(this);
                }});
            },
            $save: function() {
                return PersonaRestangular.one(url, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
            },

            $find: function(id){
                return PersonaRestangular.one(url, id).get();
            },
            $search: function(queryParams){
                return PersonaRestangular.all(url).getList(queryParams);
            },

            $remove: function(id){
                return PersonaRestangular.one(url, id).remove();
            }
        };

        PersonaRestangular.extendModel(url, function(obj) {
            if(angular.isObject(obj)) {
                return angular.extend(obj, modelMethos);
            } else {
                return angular.extend({id: obj}, modelMethos)
            }
        });

        return modelMethos;

    }]);

})();
