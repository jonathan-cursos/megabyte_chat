# Megabyte Chat

Un chat creado con Next.js, y usando Web Sockets para la comunicación en tiempo
real. Puedes ver la aplicación [aquí](https://megabyte-chat.vercel.app/ 'aquí')

[![Megabyte Chat](https://dav-dev.com/assets/projects/chat.jpg 'Megabyte Chat')](https://dav-dev.com/assets/projects/chat.jpg 'Megabyte Chat')

## Backend

Para el backend, cree una API REST para el envio de datos al servidor como la
creación y obtención de usuarios. Para los mensajes, cree un servidor de web
socksets que mantenga abierta la comunicación. Puedes verlos aquí:

- [Web Sockets](https://github.com/jonathangg03/megabyte-chat-sockets-server 'Web Sockets').
- [API REST](https://github.com/jonathangg03/megabyte_chat_backend 'API REST').

## Instrucciones de uso

- Al ingresar a la página vemos dos botones; "Ingresar" y "Crear usuario".
- Sí queremos crear un usuario, solamente damos click en el botón, que nos
  dirigirá a un formulario de registro.
- Sí ya creamos usuario, o queremos ingresar con uno ya existente, click en
  "Ingresar".
- Seleccionaremos el usuario deseado, y de ahí tenemos dos opciones.
- Podemos escoger un chat seleccionando el chat del usuario al que queramos
  ingresar.
- Tambien podemos crear un chat sí no tenemos uno con el usuario con el que
  deseamos chatear.
- Ya dentro, solamente escribimos un mensaje y lo enviamos. El otro usuario lo
  recibirá en tiempo real.

## Tecnologías usadas

- JavaScript.
- React.js.
- Next.js.
- Node.js.
- Express.js.
- Web Sockets: Socket.io.
- Heroku.
- Vercel.
- MongoDB.

## Correr aplicación en local

- Debes clonar tanto este repositorio.
- Abrir una terminal e ingresar a la carpeta creada.
- Instalar las dependencias con el comando "npm install".
- Iniciar el proyecto con el comando "npm run dev".
- Debes tener corriendo en local en el puerto 3001 el backend, y en el 3002 el
  servidor de web sockets. Revisa esos repositorios para más información.
