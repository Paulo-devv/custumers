import { FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply} 
    from 'fastify';
import { createCustumerController } from '../controllers/createCustumerController';
import { listCustumerController } from '../controllers/listCustumerController';
import { deleteCustumerController } from '../controllers/deleteCustumerController';
import { updateCustumerController } from '../controllers/updateCustumerController';


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/custumer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new createCustumerController().handle(request, reply)
        
    });

    fastify.get("/custumers", async (request: FastifyRequest, reply: FastifyReply) => {

        return new listCustumerController().handle(request, reply)
        
    });

    fastify.put("/custumer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new updateCustumerController().update(request, reply)
        
    });

    fastify.delete("/custumer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new deleteCustumerController().handle(request, reply)
        
    });


}