import { FastifyRequest, FastifyReply } from "fastify";
import { listCustumerService } from "../services/listCustumerService";


class listCustumerController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const ListCustumerService = new listCustumerService();

        const custumers = await ListCustumerService.execute()

        reply.send(custumers);
    };
}

export { listCustumerController };
