const logInterceptor = (data) => {
    const ip = data.ip;
    const protocol = data.protocol;
    const date = new Date().toISOString();
    const time = date.split('T')[1].split('.')[0];
    console.log(`[${date}] ${ip} connected to ${protocol} service`);
    
}