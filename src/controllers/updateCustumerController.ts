import { FastifyRequest, FastifyReply } from "fastify";
import { updateCustumerService } from "../services/updateCustumerService";

export interface UpdateCustumerProps{
    id: string,
    updateData: any
}

class updateCustumerController {
    async update(request: FastifyRequest, reply: FastifyReply){

        
        const { id, updateData } = request.body as UpdateCustumerProps;

        if (!updateData) {
            return reply.status(400).send({ error: "Dados de atualização não fornecidos." });
        }

        const UpdateCustumerService = new updateCustumerService()

        try {
            const custumer = await UpdateCustumerService.update({id, updateData})
            reply.send(custumer);
        } catch (error) {
            console.error(error);
            reply.status(500).send({ message: "Erro interno do servidor" })
        };

        
        
    };
};
export { updateCustumerController }