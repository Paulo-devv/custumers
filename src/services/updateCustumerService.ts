import prismaClient from "../prisma";
import { UpdateCustumerProps } from "../controllers/updateCustumerController";

class updateCustumerService{
    async update({ id, updateData }: UpdateCustumerProps ){
        if(!id){
            throw new Error("Solicitação invalida, id não encontrado!")
        }
        const UpdateCustumer = await prismaClient.custumer.findFirst({
            where: {
                id: id
            }
        })
        if(!UpdateCustumer){
            throw new Error("Cliente não encontrado!!")
        }

        await prismaClient.custumer.update({
            where:{
                id: UpdateCustumer.id},
                data: updateData
            
        });

        return UpdateCustumer;
    }
};

export { updateCustumerService };
