// src/database/SetupDatabase.ts

import { FastifyInstance } from "fastify";
import fastifyMikroOrm from "fastify-mikro-orm";
import { Logger } from "../utils/Logger";
import {CurrentAccount} from "./entities/CurrentAccount";
import {InvestmentAccount} from "./entities/InvestmentAccount";

export default async function setupDatabase(app: FastifyInstance) {
    try {
        if (!app.hasDecorator('mikroORM')) {
            await app.register(fastifyMikroOrm, {
                entities: [CurrentAccount, InvestmentAccount], // Add your entity paths here
                dbName: 'sandro642_secureedumail',
                type: 'mongo', // Specify the database type as 'mongo'
                clientUrl: 'mongodb+srv://sandro642:<password>@cluster0.mongodb.net/sandro642_secureedumail?retryWrites=true&w=majority',
                debug: false,
            });
        }

        Logger.info("Base de données MongoDB initialisée");
    } catch (error) {
        Logger.error("Erreur lors de l'initialisation de la base de données MongoDB :" + error);
    }
}
