const constantsProtocolsINFO = [
    {
        protocolName: 'TCP',
        description: `El Protocolo de Control de Transmisión (Transmission Control Protocol en inglés o TCP) es el método de 
        comunicación de datos por defecto entre distintos dispositivos, a través de una red. Este establece y mantiene una conexión entre 
        el emisor y el receptor durante el proceso de transferencia.`,
    },
    {
        protocolName: 'UDP',
        description: `El protocolo de datagramas de usuario (en inglés: User Datagram Protocol o UDP) es un protocolo del nivel de 
        transporte (encapsulado entre la capa de red y la capa de aplicación del modelo OSI) basado en la transmisión sin conexión de datagramas y 
        representa una alternativa al protocolo TCP (Transmission Control Protocol). Ese protocolo permite el envío de datagramas de forma rápida 
        en redes IP sin establecer previamente una conexión, dado que el propio datagrama incorpora suficiente información sobre el destinatario en 
        su cabecera.`,
    }
]

const frameOptions = [
    {
        'name': 'Debug',
        'description': `La depuración es el proceso de encontrar y resolver defectos o 
        problemas dentro de un programa de computadora que impiden el correcto 
        funcionamiento del software o de un sistema.`,
    },
    {
        'name': 'Information',
        'description': `La información es la resolución de la incertidumbre; es aquello que responde a la pregunta 
        de "Qué es una entidad" y, por lo tanto, define tanto su esencia como la naturaleza de sus características.`,
    },
    {
        'name': 'Warning',
        'description': `Un mensaje de advertencia es un mensaje que se muestra al usuario cuando ocurre 
        una condición inesperada o cuando se requiere una acción del usuario.`,
    }
]


export {constantsProtocolsINFO, frameOptions};