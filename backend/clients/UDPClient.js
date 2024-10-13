import {Buffer} from 'buffer';
import dgram from 'dgram'

export function UPDClient(msg){
    let client = dgram.createSocket('udp4')
    var data = Buffer.from('siddheshrane')

    client.on('message', (msg, info)=>{
        console.log('data recibida del server:' + msg.toString());
        console.log('Bytes recibidos %d de %s:%d', msg.length, info.address, info.port);
    })

    client.send(data, 3000, 'localhost', (error)=>{
        if(error){
            client.close();
        }else{
            console.log('data enviada');
        }
    })
}