import { logInterceptor } from "../utils/loggerModule.js";
import dgram from 'dgram';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.resolve(__dirname, "../../log.txt");

let udpServer;

export function startUDPServer() {
    udpServer = dgram.createSocket('udp4');

    udpServer.on('message', (msg, rinfo) => {
        console.log(`udpServer got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);

        fs.appendFile(logFilePath, msg.toString() + '\n', (err) => {
            if (err) {
                console.error("Error writing to log.txt:", err);
            } else {
                console.log(logFilePath);
                console.log("Data written to log.txt");
            }
        });

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