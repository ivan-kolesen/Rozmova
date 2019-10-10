// import { login, addMessage } from "../actions";
// import { connect } from 'react-redux';
//
// const connectWSS = (name) => {
//   //this.socket = new WebSocket("wss://rozmova.appspot.com");
//   const socket = new WebSocket("ws://localhost:8080");
//
//   socket.onopen = () => console.log("Соединение установлено.");
//
//   socket.onclose = event => {
//     console.log( event.wasClean ? "Соединение закрыто чисто" : "Обрыв соединения");
//     console.log(`Код: ${event.code}, причина: ${event.reason}`);
//   };
//
//   socket.onerror = error => console.log("Ошибка " + error.message, error);
//
//   socket.onmessage = event => {
//     const message = JSON.parse(event.data);
//
//     switch(message.type){
//       case "auth":
//         dispatch(login(message.value.id, name));
//         break;
//       case "message":
//         console.log(message);
//         dispatch(addMessage(message.value));
//         break;
//       default:
//         break;
//     }
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   login: name => dispatch(login(name))
// });
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(connectWSS);