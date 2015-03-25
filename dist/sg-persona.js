/**
 * Restful factories for iso3166
 * @version v1.0.2 - 2015-03-25 * @link https://github.com/SistCoop/sg-persona
 * @author Carlos feria <carlosthe19916@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */(function(){

    var module = angular.module('sg-persona', ['restangular']);

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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
        });

        return modelMethos;

    }]);

    module.factory('SGTipoDocumento', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'tiposDocumentos';
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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
        });

        return modelMethos;

    }]);

    module.factory('SGPersonaNatural', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'personas/naturales';
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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
        });

        return modelMethos;

    }]);

    module.factory('SGPersonaJuridica', ['PersonaRestangular',  function(PersonaRestangular) {

        var url = 'personas/juridicas';
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
                return PersonaRestangular.one(id, this.id).customPUT(PersonaRestangular.copy(this),'',{},{});
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
            return angular.extend(obj, modelMethos);
        });

        return modelMethos;

    }]);

})();