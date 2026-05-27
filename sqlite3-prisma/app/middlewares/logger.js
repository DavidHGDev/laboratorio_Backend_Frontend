export const logger = (req, res, next) => {
    const date = new Date()
    const hora = date.toLocaleTimeString();
    const fecha = date.toLocaleDateString()
    console.log(`${fecha} ${hora}`)

    console.log(`url: ${req.originalUrl} method: ${req.method}`)

    next()
} 