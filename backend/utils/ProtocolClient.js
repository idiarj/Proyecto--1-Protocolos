import { exec } from "child_process";
import { promisify } from "util";
import { TCPClient } from "../clients/TCPClient.js";
import { UPDClient } from "../clients/UDPClient.js";

const execAsync = promisify(exec);

export class ProtocolClient {
    constructor({ clientType }) {
        this.clientType = clientType;
    }

    static async start({ clientType, msg, msgType }) {
        switch (clientType) {
            case 'UDP':
                UPDClient({msg, msgType});
                break;
            case 'TCP':
                TCPClient({msg, msgType});
                break;
            default:
                console.log('Invalid client type');
                return;
        }
    }

    // static async kill() {
    //     try {
    //         const { stdout, stderr } = await execAsync('killall node');
    //         console.log(`stdout: ${stdout}`);
    //         console.error(`stderr: ${stderr}`);
    //     } catch (error) {
    //         console.error(`exec error: ${error}`);
    //     }
    // }
}