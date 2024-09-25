import prismaClient from "../prisma";

interface createCustumerProps{
    name: string;
    email: string;
    password: string,
    gender: string;
    age: string;
};

class createCustumerService {
    async execute({ name, email, password, gender, age }: createCustumerProps){
        
        if(!name || !email || !gender || !age){
            throw new Error("Preecha todos os dados")
        };

        const custumer = await prismaClient.custumer.create({
            data:{
                name,
                email,
                gender,
                age
            }
        });

        return custumer;
    };
};

export { createCustumerService };