import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export class ProtocolServer {
    constructor({ serverType }) {
        this.serverType = serverType;
    }

    static async start({ serverType }) {
        let command = '';
        switch (serverType) {
            case 'UDP':
                command = 'node servers/UDPServer.js';
                break;
            case 'TCP':
                command = 'node servers/TCPServer.js';
                break;
            default:
                console.log('Invalid server type');
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

    async kill() {
        try {
            const { stdout, stderr } = await execAsync('killall node');
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        } catch (error) {
            console.error(`exec error: ${error}`);
        }
    }
}