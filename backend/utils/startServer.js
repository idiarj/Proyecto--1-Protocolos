import { exec } from "child_process"
export function startServer({serverType}){
    let command = ''
    switch(serverType){
        case 'UDP':
            command = 'node servers/UDPServer.js'
            break;
        case 'TCP':
            command = 'node servers/TCPServer.js'
            break;
        default:
            console.log('Invalid server type')
            return;
    }
    const child = exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        console.log(`comando ejecutado: ${command}`)
    })

}