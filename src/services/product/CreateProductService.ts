import prismaClient from "../../prisma";

interface ProductRequerid{
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService{
    async execute({name, banner, category_id, description, price}: ProductRequerid){

        const product = await prismaClient.product.create({
            data: {
                neme: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })
        return product
    }
}

export { CreateProductService}