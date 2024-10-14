import {Buffer} from 'buffer';
import dgram from 'dgram'

export function UPDClient({msg, msgType}) {
    const client = dgram.createSocket('udp4');
    const message = JSON.stringify({
        msg,
        msgType
    });

    client.send(message, 0, message.length, 3000, 'localhost', (err) => {
        if (err) {
            console.error('Error sending message:', err);
        } else {
            console.log('Message sent');
        }
        client.close();
    });
}
