import {FastifyReply, FastifyRequest, FastifySchema} from "fastify";
import {RouteProperties} from "../../../../RouteHandler";

/*
Customize the body and response schema
 */
const schema: FastifySchema = {
    description: "Création d'un compte courant.",
    tags: ['Account Manager'],
    body: {
        type: "object",
        properties: {
            username: {
                type: "string"
            },
            firstname: {
                type: "string"
            },
            surname: {
                type: "string"
            },
            email: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }
    }
}

const routeProperties: RouteProperties = {
    routeOptions: {
        method: 'POST',
        url: '/api/v1/accountmanager/currentaccount/create',
        schema,
        handler: àcompléter as (request: FastifyRequest, reply: FastifyReply) => void
    },
    enabled: true
}

export default routeProperties