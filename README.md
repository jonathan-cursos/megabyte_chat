# Megabyte Chat

Un chat creado con Next.js, y usando Web Sockets para la comunicación en tiempo
real.

## Backend

Para el backend, cree un servidor de Web Sockets, y aparte, una API REST para lo
que no requiera comunicación en tiempo real, los repositorios de estos puedes
verlos aquí:

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
