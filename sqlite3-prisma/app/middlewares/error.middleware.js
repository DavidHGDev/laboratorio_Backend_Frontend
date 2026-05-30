export const logsData = (req, res, next) => {
    const timestamp = Date.now().toLocaleString()
    const ruta = req.originalUrl;
    const metodo = req.method;
    console.log(`hora ${timestamp} ruta ${ruta} y método ${metodo}`)
    next()
}

export const errorLogger = (err, req, res, next) => {
    console.error(`[ERROR] ruta: ${req.method} ${req.originalUrl}`);
    console.error(`TIPO: ${err.name}`);
    console.err(err.stack || err.message);

    next(err)
}