import { Response, Request } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController{
    async handle(req: Request, res: Response){

        const listOrders = new ListOrdersService()
        
        const orders = await listOrders.execute()

        return res.json(orders)
    }   
}

export { ListOrdersController }