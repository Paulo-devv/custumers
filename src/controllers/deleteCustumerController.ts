import { FastifyRequest, FastifyReply } from "fastify";
import { deleteCustumerService } from "../services/deleteCustumerService";
import { DeleteCustumerProps } from "../services/deleteCustumerService";


class deleteCustumerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const { id } = request.query as DeleteCustumerProps

        const DeleteCustumerService = new deleteCustumerService();
        
        try {
            const custumer = await DeleteCustumerService.execute({ id })
            if(!custumer){
                return reply.status(404).send({ message: "Cliente nao encontrado"})
                
            }
            reply.send(custumer);
        } catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Server error"})
        }

        
    }
}


export { deleteCustumerController };