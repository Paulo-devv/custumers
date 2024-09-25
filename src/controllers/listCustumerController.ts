import { FastifyRequest, FastifyReply } from "fastify";
import { listCustumerService } from "../services/listCustumerService";


class listCustumerController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const ListCustumerService = new listCustumerService();

        try {
            const custumers = await ListCustumerService.execute()
            reply.send(custumers);
        } catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Erro ao listar clientes"})
        };

        
    };
}

export { listCustumerController };
