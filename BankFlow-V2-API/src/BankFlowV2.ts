// index.ts

import dotenv from 'dotenv';
import fastify, { FastifyInstance } from "fastify";
import { Logger } from "./utils/Logger";
import fastifySetup from "./network/SetupFastify";

dotenv.config();

export const isDevEnv = process.argv.includes('--dev');

const app: FastifyInstance = fastify({
    logger: false,
    ignoreTrailingSlash: true
});

async function startApp() {
    try {

        // Setup du serveur Fastify
        await fastifySetup(app);

        Logger.info("BankFlow V2 démarrée avec succès");
    } catch (e: any) {
        console.error(e);
        Logger.error("Erreur lors du démarrage de BankFlow V2");
        process.exit(1);
    }
}

startApp();

export { app };
