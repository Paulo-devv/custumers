import { FastifyRequest, FastifyReply } from "fastify";
import { createCustumerService } from "../services/createCustumerService";

class createCustumerController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {name, email, password, gender, age} = request.body as { name: string, email: string, password: string, gender: string, age: string }

        if(!name || !email || !password || !gender || !age) {
            return reply.status(400).send({ error: "Preencha todos os campos"})
        }

        const custumerService = new createCustumerService();
        try {
            const custumer = await custumerService.execute({ name, email, password, gender, age });
            reply.status(201).send(custumer);
        } catch (Error) {
            reply.status(500).send({ error: "Erro ao criar cliente." });
        }
        
    };
};

export { createCustumerController };  