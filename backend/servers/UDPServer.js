import { logInterceptor } from "../utils/loggerModule.js";
import dgram from 'dgram';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.resolve(__dirname, "../../log.txt");

const server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);

  fs.appendFile(logFilePath, msg.toString() + '\n', (err) => {
    if (err) {
        console.error("Error writing to log.txt:", err);
    } else {
        console.log(logFilePath)
        console.log("Data written to log.txt");
    }
    });
  
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