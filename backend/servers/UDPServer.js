import { logInterceptor } from "../utils/loggerModule.js";
import dgram from 'dgram';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { appendToFile } from "../utils/fsModule.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.resolve(__dirname, "../../log.txt");

let udpServer;

export function startUDPServer() {
    udpServer = dgram.createSocket('udp4');

    udpServer.on('message', (msg, rinfo) => {
        console.log(`udpServer got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);

      // appendToFile(logFilePath, `udpServer got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`)

        udpServer.send('mensaje ok', rinfo.port, rinfo.address, (err) => {
            if (err) {
                console.log('error al enviar mensaje:', err);
            } else {
                console.log('mensaje enviado');
            }
        });
    });

    udpServer.on('listening', () => {
        const address = udpServer.address();
        console.log(`udpServer listening ${address.address}:${address.port}`);
    });

    udpServer.on('error', (err) => {
        console.log(`udpServer error:\n${err.stack}`);
        udpServer.close();
    });

    udpServer.bind(3000);
}

export function stopUDPServer() {
    if (udpServer) {
        udpServer.close(() => {
            console.log('UDP server closed');
        });
    }
}