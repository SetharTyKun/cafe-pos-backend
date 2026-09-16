import { CreateOrderItemDto } from "./create-order-item.dto.js";
export class CreateOrderDto {
    user_id: number;
    total_amount: number;
    items: CreateOrderItemDto;
}
