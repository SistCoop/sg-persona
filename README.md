# persona - restangular library

Es un api que permite usar restangular models para persona.

> Revisar sistcoop/persona para mayor informacion.

### Url rest
Puede cambiar el url de los servicios restfull con 

````javascript
// Change url restful services
app.config(function(sgPersonaProvider){
    sgPersonaProvider.restUrl = 'https://someweb/rest';
});
````

### Factories
* SGTipoDocumento

| Method        URL                     | Descripcion                   |
| :-------------------------------------|:------------------------------|
| SGTipoDocumento.$new(id)              | Crea objeto con id            |
| SGTipoDocumento.$build()              | Crea objeto vacio             |
| SGTipoDocumento.$save()               | Guarda o actualiza            |
| SGTipoDocumento.$find(id)             | Buscar uno segun id           |
| SGTipoDocumento.$search(params)       | Buscar segun parametros       |
| SGTipoDocumento.$count()              | Contar size()                 |
| SGTipoDocumento.$disable()            | Deshabilitar                  |


* SGPersonaNatural

| Method        URL                     | Descripcion                   |
| :-------------------------------------|:------------------------------|
| SGPersonaNatural.$new(id)             | Crea objeto con id            |
| SGPersonaNatural.$build()             | Crea objeto vacio             |
| SGPersonaNatural.$save()              | Guarda o actualiza            |
| SGPersonaNatural.$find(id)            | Buscar uno segun id           |
| SGPersonaNatural.$search(params)      | Buscar segun parametros       |
| SGPersonaNatural.$count()             | Contar size()                 |
| SGPersonaNatural.$disable()           | Deshabilitar                  |


* SGPersonaJuridica

| Method        URL                      | Descripcion                   |
| :--------------------------------------|:------------------------------|
| SGPersonaJuridica.$new(id)             | Crea objeto con id            |
| SGPersonaJuridica.$build()             | Crea objeto vacio             |
| SGPersonaJuridica.$save()              | Guarda o actualiza            |
| SGPersonaJuridica.$find(id)            | Buscar uno segun id           |
| SGPersonaJuridica.$search(params)      | Buscar segun parametros       |
| SGPersonaJuridica.$count()             | Contar size()                 |
| SGPersonaJuridica.$disable()           | Deshabilitar                  |


* SGTipoDocumento

| Method        URL                     | Descripcion                   |
| :-------------------------------------|:------------------------------|
| SGTipoDocumento.$search(params)       | Buscar segun parametros       |


* SGEstadoCivil

| Method        URL                     | Descripcion                   |
| :-------------------------------------|:------------------------------|
| SGEstadoCivil.$search(params)         | Buscar segun parametros       |


* SGTipoEmpresa

| Method        URL                     | Descripcion                   |
| :-------------------------------------|:------------------------------|
| SGEstadoCivil.$search(params)         | Buscar segun parametros       |


* SGTipoPersona

| Method        URL                     | Descripcion                   |
| :-------------------------------------|:------------------------------|
| SGTipoPersona.$search(params)         | Buscar segun parametros       |


Los objetos tienen la siguiente estructura:
	
```json
"personaNatural": {
   "id": "Number",
   "codigoPais": "String",
   "tipoDocumento": "String",
   "numeroDocumento": "String",
   "apellidoPaterno": "String",
   "apellidoMaterno": "String",
   "nombres": "String",
   "sexo": "String",
   "estadoCivil": "String",
   "ocupacion": "String",
   "urlFoto": "String",
   "urlFirma": "String",
   "ubigeo": "String",
   "direccion": "String",
   "referencia": "String",
   "telefono": "String",
   "celular": "String",
   "email": "String"
}
```

```json
"personaJuridica": {
   "id": "Number",
   "codigoPais": "String",
   "tipoDocumento": "String",
   "numeroDocumento": "String",
   "razonSocial": "String",
   "nombreComercial": "String",
   "fechaConstitucion": "String",   
   "actividadPrincipal": "String",   
   "tipoEmpresa": "String",
   "finLucro": "Boolean",   
   "ubigeo": "String",
   "direccion": "String",
   "referencia": "String",
   "telefono": "String",
   "celular": "String",
   "email": "String",
   "representanteLegal": "{
      tipoDocumento: String,
      numeroDocumento: String
   }"
}
```

```json
"tipoDocumento": {
   "abreviatura": "String",
   "denominacion": "String",
   "cantidadCaracteres": "Number",
   "tipoPersona": "String",
   "estado": "Boolean"   
}
```

```json
"estadoCivil": {
   "denominacion": "String"  
}
```

```json
"tipoPersona": {
   "denominacion": "String"  
}
```

```json
"tipoEmpresa": {
   "denominacion": "String"  
}
```

	
### Version
1.0.0

### Tecnologías

Dependences:

* [JavaEE] - javaEE

Este proyecto es mantenido por SistCoop S.A.C.

License
----

MIT