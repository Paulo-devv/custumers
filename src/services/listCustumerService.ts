import prismaClient from "../prisma";

class listCustumerService{
    async execute(){
    
        const custumers = await prismaClient.custumer.findMany()

        return custumers;

    }
}


export { listCustumerService }