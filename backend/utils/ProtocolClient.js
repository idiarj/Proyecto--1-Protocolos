import { exec } from "child_process";
import { promisify } from "util";
import { TCPClient } from "../clients/TCPClient.js";
import { UDPClient } from "../clients/UDPClient.js";

const execAsync = promisify(exec);

export class ProtocolClient {
    constructor({ clientType }) {
        this.clientType = clientType;
    }

    static async start({ clientType }) {
        let command = '';
        switch (clientType) {
            case 'UDP':
                
                break;
            case 'TCP':
                command = 'node clients/TCPClient.js';
                break;
            default:
                console.log('Invalid client type');
                return;
        }
        try {
            const { stdout, stderr } = await execAsync(command);
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            console.log(`comando ejecutado: ${command}`);
        } catch (error) {
            console.error(`exec error: ${error}`);
        }
    }

    static async kill() {
        try {
            const { stdout, stderr } = await execAsync('killall node');
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        } catch (error) {
            console.error(`exec error: ${error}`);
        }
    }
}