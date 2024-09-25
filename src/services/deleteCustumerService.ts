import prismaClient from "../prisma";

export interface DeleteCustumerProps{
    id: string
};

class deleteCustumerService{
    async execute({ id }: DeleteCustumerProps){

        if(!id) {
            throw new Error("Solicitação invalida, id não encontrado")
        }

        const findCustumer = await prismaClient.custumer.findFirst({
            where:{
                id: id
            }
        })
        
        if(!findCustumer){
            throw new Error("Cliente não encontrado!!")
        }

        await prismaClient.custumer.delete({
            where:{
                id: findCustumer.id
            }
        })

        return { message: "Cliente deletado com sucesso!"}
    }

    
};

export { deleteCustumerService }