import { logInterceptor } from "../utils/loggerModule.js";
import dgram from 'dgram';
const server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);
  server.send('mensaje ok', rinfo.port, rinfo.address, (err)=>{
    if(err){
      console.log('error al enviar mensaje:', err);
    }else{
      console.log('mensaje enviado');
    }
  });
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.bind(3000); 