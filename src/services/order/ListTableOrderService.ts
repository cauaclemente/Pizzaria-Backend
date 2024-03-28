import prismaClient from "../../prisma";

class ListTableOrderService{
  async execute(){
    const orders = await prismaClient.order.findMany()

    return(orders)
  }
}

export { ListTableOrderService }