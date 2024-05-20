# Facturacion

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) en la version 17.

El proposito de este proyecto es desarrollar el CRUD para la gestión de facturación.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


# Diseño y Desarrollo:

## Modelo de Clases:

* Factura
* Cliente
* Ciudad
* DetalleFactura
* Articulo

## Casos de Uso:

### Crear una nueva factura.
### Leer una factura existente.
### Actualizar una factura existente.
### Eliminar una factura existente.
### Mostrar un resumen de valor vendido por ciudad.

## Arquitectura:

* Frontend: Angular 17.
* Backend: .NET 8 con Entity Framework Code First.
* Base de Datos: SQL Server.

## Diagrama de clases de la solución

Se agrega diagrama de clases en el archivo UMLFacturacion.png

## Informacion adcional
El proyecto se encuentra alojado en el repositorio de GitHub de [Cristian Ramirez](https://github.com/CristianRamirez11?tab=repositories), tanto el proyecto Front como el de Back se encuentran en proyectos separados, con los nombres de **FrontFacturas** y **BackFacturas**, respectivamente. 

Para descargar el proyecto Front ubicarse en la rama **feature/.factura_angular**

Para decargar el proyecto Back ubicarse en la rama **master**.