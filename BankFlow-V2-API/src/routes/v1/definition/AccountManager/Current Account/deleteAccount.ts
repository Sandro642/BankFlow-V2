import {FastifyReply, FastifyRequest, FastifySchema} from "fastify";
import {RouteProperties} from "../../../../RouteHandler";

/*
Customize the body and response schema
 */
const schema: FastifySchema = {
    description: "Suppression d'un compte courant.",
    tags: ['Account Manager'],
}

const routeProperties: RouteProperties = {
    routeOptions: {
        method: 'POST',
        url: '/api/v1/accountmanager/currentaccount/delete',
        schema,
        handler: àcompléter as (request: FastifyRequest, reply: FastifyReply) => void
    },
    enabled: true
}

export default routeProperties