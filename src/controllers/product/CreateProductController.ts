import { Response, Request } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const { name, price, description, category_id} = req.body;

        const createProductService = new CreateProductService();
        
        if(!req.file){
            throw new Error("Erro ao carregar arquivo");
        }else {
            const { filename: banner, originalname} = req.file;
        
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id,
            })
            
            return res.json(product);
        }     
    }
}

export { CreateProductController};