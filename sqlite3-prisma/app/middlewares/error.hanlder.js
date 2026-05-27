export const errorHandler = (err, req, res, next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error inesperado ';
    const fecha = new Date();

    const stackError = err.stack ? ` | stack: ${err.stack}` : '';// stack nos permite produntizar en toda la información del error

    console.error(`${fecha.toISOString()} Error: ${message}| código ${statusCode}  ${stackError}`)

    res.status(statusCode).json({
        status: 'Error', 
        statusCode,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) // oculta en producción el stack
    })
}