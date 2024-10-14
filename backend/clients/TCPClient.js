import net from "net"


export function TCPClient(msg){
    const client = net.Socket({
        writeable:true
    })
    client.on("close", ()=>{
        console.log("Connection closed");
    });
    client.on("error", (err)=>{
        console.error("connection error: " + err);
        console.error(new Error().stack);
    });
    client.connect(6969, "127.0.0.1", ()=>{
        console.log("connected");
        client.write(msg);
    });
    client.on("data", async (dat)=>{
        
        console.log("Mensaje recicbido " + dat);
        console.log(dat.toString());
        client.destroy();
        console.log(dat.toString());
    });
}

TCPClient("Hola mundo con TCP");