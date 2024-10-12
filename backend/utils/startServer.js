import { ChildProcess } from "child_process"
const exec = new ChildProcess()
export function startServer({serverType}){
    let command = ''
    switch(serverType){
        case UDP:
            command = 'node udpServer.js'
            break;
        case TCP:
            command = 'node tcpServer.js'
            break;
        default:
            console.log('Invalid server type')
            return;
    }
    exec.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        console.log(`comando ejecutado: ${command}`)
    })

}