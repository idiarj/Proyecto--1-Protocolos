import { logInterceptor } from "../utils/loggerModule.js";
import path from "path";
import { appendToFile } from "../utils/fsModule.js";
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
            const dataStr = data.toString();
            const dataJson = JSON.parse(dataStr);
            console.log("data recibida desde", sock.remoteAddress, '=', dataStr);
            console.log(dataJson)

            const dataToLog = {
                address: sock.remoteAddress,
                port: sock.remotePort,
                protocol: 'TCP',
                ...dataJson
            };

            console.log(dataToLog);


            appendToFile(logFilePath, dataToLog);
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