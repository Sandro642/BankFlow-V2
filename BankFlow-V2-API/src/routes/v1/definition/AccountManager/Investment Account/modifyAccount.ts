import {FastifyReply, FastifyRequest, FastifySchema} from "fastify";
import {RouteProperties} from "../../../../RouteHandler";

/*
Customize the body and response schema
 */
const schema: FastifySchema = {
    description: "Création d'un compte épargne",
    tags: ['Account Manager'],
    body: {
        type: "object",
        properties: {
            owner: {
                type: "string"
            },
            co_owner: {
                type: "string"
            },
            investment: {
                type: "string"
            }
        }
    }
}

const routeProperties: RouteProperties = {
    routeOptions: {
        method: 'POST',
        url: '/api/v1/accountmanager/investmentaccount/create',
        schema,
        handler: àcompléter as (request: FastifyRequest, reply: FastifyReply) => void
    },
    enabled: true
}

export default routeProperties