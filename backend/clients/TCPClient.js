import net from "net"


export function TCPClient(msg){
    const client = net.Socket({
        writeable:true
    })
    client.on("close", function(){
        console.log("Connection closed");
    });
    client.on("error", function(err){
        console.error("connection error: " + err);
        console.error(new Error().stack);
    });
    client.connect(6969, "127.0.0.1", function(){
        console.log("connected");
        client.write(msg);
    });
    client.on("data", function(dat){
        console.log("Mensaje recicbido" + dat);
        client.destroy();
    });
}