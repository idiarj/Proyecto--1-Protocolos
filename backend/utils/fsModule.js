import fs from 'fs';


export async function appendToFile(filePath, data) {
    try {
        let bastaPorFavor = `Mensaje recibido desde la ip: ${data.address}
        y el puerto: ${data.port},
        utilizando el protocolo: ${data.protocol}
        Contenido del mensaje: ${data.msg}
        Tipo de mensaje: ${data.msgType}
        Fecha y hora de recepción: ${new Date().toLocaleString()}
        `;
        await fs.appendFileSync(filePath, bastaPorFavor + '\n');
        return true;
    } catch (error) {
        return {success: false, error: error.message};
    }
}