# Week 3 - Challenge 4

## Series

Aquí tienes una aplicación maquetada con HTML y CSS. Se trata de una aplicación que gestiona un listado de series, separándolas entre vistas y no vistas.

Esta aplicación se alimentará de una API que tienes [aquí](https://github.com/SkylabCoders/skylab-bootcamp-202109-bcn/tree/main/week3/series-api/).

Tienes que mostrar un listado de series, separándolas entre vistas y no vistas. Cada serie tiene que mostrar toda la información que ves en la maqueta. Si la serie es no vista, sus estrellas tienen que estar a 0 y el usuario debería poder clicar para valorar la serie con las estrellas que crea necesario. Al clicar en una estrella, la aplicación debe modificar la valoración y la serie debe pasar de no vista a vista (no hay ninguna manera de pasar una serie de vista a no vista).

El formulario no debe existir al principio, se debe crear cuando el usuario haga clic en el icono + . Desde el formulario se pueden crear nuevas series. Cuando se crea una nueva serie desde el formulario, éste desaparece.

Si el usuario hace click en el icono de la x, la serie se debe eliminar.

Además, debe mostrar un ranking con la serie más valorada, la más nueva y la que más Emmy ha recibido (orden alfabético como segundo criterio).

Endpoints de la API:

GET /series/ <-- devuelve el array de series

GET /series/id <-- devuelve una serie

POST /series <-- se crea una serie (hay que enviarla en el body)

PUT /series/id <-- se modifica una serie (hay que enviarla en el body)

DELETE /series/id <-- se modifica una serie
