import { logInterceptor } from "../utils/loggerModule.js";
import net from "net";
const host ='127.0.0.1'
const port = 6969;

net.createServer((sock)=>{
    console.log("conectado IP:",sock.remoteAddress,"port:", sock.remotePort)
    sock.on("data",(data)=>{
        console.log("data recibida desde",sock.remoteAddress,'=', data.toString())
        sock.write("data ok...")
        sock.pipe(sock)

    })
    
    sock.on("close",(data)=>{
        console.log("cerrado ip:",sock.remoteAddress,"port:", sock.remotePort)
    })
}).listen(port,host)

console.log("esperando solicitudes")
    

