import { exec } from "child_process";
import { promisify } from "util";
import { startTCPServer, stopTCPServer } from "../servers/TCPServer.js";
import { startUDPServer, stopUDPServer } from "../servers/UDPServer.js";

const execAsync = promisify(exec);

export class ProtocolServer {
    static serverProcess = null;

    constructor({ serverType }) {
        this.serverType = serverType;
    }

    static async start({ serverType }) {
        switch (serverType) {
            case 'UDP':
                startUDPServer();
                break;
            case 'TCP':
                startTCPServer();
                break;
            default:
                console.log('Invalid server type');
                return;
        }
    }

    static async kill() {
        if (ProtocolServer.serverProcess) {
            ProtocolServer.serverProcess.kill();
            ProtocolServer.serverProcess = null;
            console.log('Server process killed');
        } else {
            console.log('No server process to kill');
        }

        stopTCPServer();
        stopUDPServer();
    }
}