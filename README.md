# Web API | Spotify
<p><b>
TECNOLÓGICO NACIONAL DE MÉXICO
<b>
INSTITUTO TECNOLÓGICO DE TIJUANA
</p><b>
SUBDIRECCIÓN ACADÉMICA
<p><b>
DEPARTAMENTO DE SISTEMAS Y COMPUTACIÓN
</p><b>
INGENIERÍA EN SISTEMAS COMPUTACIONALES
<p><b>
Materia: Programación Web
</p>
Docente Facilitador: Dra. Daniela Adriana Sánchez Vizcarra

Investigacion API: Spotify Web API

<p> Integrantes del equipo 5: </p>
Figueroa Parra Francisco Manuel  #19211639

Bañuelos Hernández María Guadalupe  #19211600

Grupo: SC8A

**Introducción**
---
Se le conoce como API a los mecanismos que permiten a dos componentes de software comunicarse entre si mediante un conjunto de definiciones y prologos. Siendo la API como el servidor y el usuario el cliente quien pide una informacion dependiendo de la orden que llegue a mandar, asi que con el objetivo de esta practica, se usara la API de spotify para poder tomar los datos de esta.

**Spotify Web Api**
---
<br>
Basados en principios REST simples, los puntos finales de la API web de Spotify devuelven metadatos JSON sobre artistas musicales, álbumes y pistas, directamente desde el catálogo de datos de Spotify.

La API web también brinda acceso a datos relacionados con el usuario, como listas de reproducción y música que el usuario guarda en la biblioteca Your Music . Dicho acceso se habilita mediante autorización selectiva, por parte del usuario.
<br> 
![7](https://user-images.githubusercontent.com/99300053/219610998-290c1235-5f24-4d37-92cb-98b88e4c6ee6.png)
<br> 

La dirección base de la API web es https://api.spotify.com . La API proporciona un conjunto de puntos finales , cada uno con su propia ruta única. Para acceder a datos privados a través de la API web, como perfiles de usuario y listas de reproducción, una aplicación debe obtener el permiso del usuario para acceder a los datos. La autorización se realiza a través del servicio de cuentas de Spotify.

*Peticiones*
La API web de Spotify se basa en los principios REST . Se accede a los recursos de datos a través de solicitudes HTTPS estándar en formato UTF-8 a un punto final de API. Siempre que sea posible, Web API utiliza verbos HTTP apropiados para cada acción:
    
MÉTODO	     |      ACCIÓN
    
GET	         |   Recupera recursos
    
POST         |   Crea recursos
    
PUT          |   Cambia y/o reemplaza recursos o colecciones
    
DELETE       |   Elimina recursos
    



Explicación de la practica
---
El programa se corre desde la terminal, al necesitar $Node.js, primero se debe de verificar que se encuentre en la carpeta indicada, en este caso la carpeta con el nombre: “código de verificación” dentro de esta carpeta se instala la extensión npm con el siguiente comando:

$npm install

Lo que hará esta carpeta es instalarnos los módulos correspondientes para correr el programa y una vez que este hecho, bastará con ingresar el siguiente comando:

$node app.js

Este comando tendrá listo el programa para finalmente abrirlo con el siguiente url:

localhost: 8888

esto gracias al archivo js llamado servidor en el cual como su nombre se dice, crea un servidor HTTP para manejar las respuestas.

Sabremos que está listo para correrse cuando en la terminal nos quede lo siguiente:
![1](https://user-images.githubusercontent.com/99300053/219609441-1c5717cf-d38a-4882-a3aa-e020c36753dd.png)
 <br>
 Y al ingresar nuestro url nos quedará la siguiente ventana:
<br>
![2](https://user-images.githubusercontent.com/99300053/219609696-144f6dbb-1263-4a1d-85b6-0b56c425f44c.png)
<br>
Le damos en logg in, este nos mandara a una ventana en la cual nos pedirá entrar a nuestro facebook o la cuenta que tengamos enlazada con spotify.
<br>
![3](https://user-images.githubusercontent.com/99300053/219609957-84aaab88-06ab-49e6-a410-d8a9081f2643.png)
<br>
y una vez que iniciemos sesión nos arrojará la información de nuestro perfil. La primera vez que iniciemos sesión nos pedirá si aceptamos que la API de spotify vea nuestros datos.
<br>
![4](https://user-images.githubusercontent.com/99300053/219610181-6d781453-65d9-44a5-8c33-692c4b32f2d0.png)
<br>
 Y tras aceptar, nos arroja nuestro perfil.
<br>
![5](https://user-images.githubusercontent.com/99300053/219610715-f6049301-387e-4071-afe6-be15bd54885b.png)
<br>

![6](https://user-images.githubusercontent.com/99300053/219610764-fbd4cd9e-f6a0-413f-a4dd-39015cd4ef52.png)



Conclusión
---
La integración de API permite maximizar sus operaciones al tiempo que brinda un servicio al cliente de forma eficiente dejando que el usuario pueda encontrar la informacion que deseaba. Debido a ello el uso de las API es importante incluso en una empresa o en el momento de desear crear una aplicacion apoyandose de estas mismas API.
