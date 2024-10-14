import { logInterceptor } from "../utils/loggerModule.js";
import path from "path";
import fs from "fs";    
import net from "net";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.resolve(__dirname, "../../log.txt");

const host = '127.0.0.1';
const port = 6969;

let tcpServer;

export function startTCPServer() {
    tcpServer = net.createServer((sock) => {
        console.log("conectado IP:", sock.remoteAddress, "port:", sock.remotePort);
        sock.on("data", (data) => {
            console.log("data recibida desde", sock.remoteAddress, '=', data.toString());
            fs.appendFile(logFilePath, data.toString() + '\n', (err) => {
                if (err) {
                    console.error("Error writing to log.txt:", err);
                } else {
                    console.log(logFilePath);
                    console.log("Data written to log.txt");
                }
            });
            sock.write("data ok...");
            sock.pipe(sock);
        });

        sock.on("close", (data) => {
            console.log("cerrado ip:", sock.remoteAddress, "port:", sock.remotePort);
        });
    }).listen(port, host);

    console.log("esperando solicitudes");
}

export function stopTCPServer() {
    if (tcpServer) {
        tcpServer.close(() => {
            console.log('TCP server closed');
        });
    }
}