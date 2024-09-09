import "dotenv/config";
import Fastify from 'fastify';

// Create app with logger
const app = Fastify({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
            },
        },
    },
});

// Create default route
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!',
    });
});

app.listen({
    port: process.env.PORT,
    host: '0.0.0.0',
}).catch((err) => {
    app.log.error(err);
});
