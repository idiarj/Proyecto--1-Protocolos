import net from "net";

export function TCPClient(msg) {
    const client = new net.Socket({
        writable: true
    });

    client.on("close", () => {
        console.log("Connection closed");
    });

    client.on("error", (err) => {
        console.error("connection error: " + err);
        console.error(new Error().stack);
    });

    client.connect(6969, "127.0.0.1", () => {
        console.log("connected");
        // Convert msg to string if it is an object
        if (typeof msg === 'object') {
            msg = JSON.stringify(msg);
        }
        client.write(msg);
    });

    client.on("data", async (dat) => {
        console.log("Mensaje recibido " + dat);
        console.log(dat.toString());
        client.destroy();
    });
}