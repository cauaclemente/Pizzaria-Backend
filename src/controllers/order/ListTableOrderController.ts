import { Response, Request } from "express";
import { ListTableOrderService } from "../../services/order/ListTableOrderService";

class listTableOrderController{
  async handle(req: Request, res: Response){
    
    const listOrders = new ListTableOrderService();

    const orders = await listOrders.execute()

    return res.json(orders)

  }
}

export { listTableOrderController}