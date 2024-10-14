import { exec, execSync } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export class ProtocolServer {
    static serverProcess = null;

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
        console.log(command);
        try {
            console.log(command);
            ProtocolServer.serverProcess = exec(command);
            ProtocolServer.serverProcess.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            ProtocolServer.serverProcess.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });
            console.log(`comando ejecutado: ${command}`);
        } catch (error) {
            console.error(`exec error: ${error}`);
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
    }
}