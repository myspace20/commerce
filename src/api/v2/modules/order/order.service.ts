import { prisma } from "../../../v1/server";
import { deleteCart, getUserCart } from "../cart/cart.service";
import { TorderPayload } from "./order.types";
import { createOrderLines } from "./orderLine/orderLine.service";
import { calcSubTotal } from "./util";


/**
    * Creates an order for a user.
    * Retrieves the user's cart, calculates the subtotal of the items in the cart,
    * and creates a new order in the database.
    * Also creates order lines for each item in the cart and retrieves the created order from the database.
    * @param userId - The ID of the user for whom the order is being created.
    * @param payload - An object containing the payment method ID, shipping method ID,
    * order status ID, and shipping address ID for the order.
    * @returns The created order object.
    * @throws If the cart does not exist or has no items.
*/
export async function createOrder(
    userId: string,
    payload: TorderPayload
) {


    try {
        const cart = await getUserCart(userId);

        if (!(cart && cart.shopping_cart_item.length === 0)) {
            throw new Error();
        }

        const items = cart.shopping_cart_item;

        const subTotal = await calcSubTotal(items);

        const order = await prisma.shop_order.create({
            data: {
                userId,
                payment_method_id: payload.payment_method_id,
                shipping_method_id: payload.shipping_method_id,
                order_status_id: payload.order_status_id,
                order_total: subTotal,
                shiping_address_id: payload.shipping_address_id
            }
        });

        const orderLine = await createOrderLines(items, order.id);
        const orderId = orderLine.at(0)?.order_id as string;
        await deleteCart(cart.id)
        const shopOrder = await getOrderById(orderId);

        return shopOrder;
    } catch (e) {
        // Handle error
    }
}

export async function getOrderById(id: string) {
    try {
        const order = await prisma.shop_order.findUnique({
            where: { id },
            include: {
                order_status: true,
                shipping_method: true,
                payment_type: true,
                user_address: true,
                order_line: true,
            }
        })
        return order
    } catch (e) {

    }
}

export async function getAllOrders() {
    try {
        const orders = await prisma.shop_order.findMany({
            include: {
                order_status: true,
                shipping_method: true,
                payment_type: true,
                user_address: true,
                order_line: true,
            }
        })
        return orders
    } catch (e) {

    }
}

export async function getUserOrder(userId: string) {
    try {
        const order = await prisma.shop_order.findFirst({
            where: { userId }
        })
        return order
    } catch (e) {

    }
}

export async function getOrderByAddress(address: string) {
    try {
        const order = await prisma.shop_order.findFirst({
            where: { user_address: { street_address: address } }
        })
        return order
    } catch (e) {

    }
}


/**
     * Updates the street address of a specific order in the database using Prisma.
     * 
     * @param id - The ID of the order to be updated.
     * @param address - The new street address to be set for the order.
     * @returns The updated order object with the new street address.
*/
export async function updateOrderAddress(id: string, address: string) {

    try {
        const order = await prisma.shop_order.update({
            where: { id },
            data: {
                user_address: {
                    update: {
                        street_address: address
                    }
                }
            }
        });
        return order;
    } catch (e) {
        // Handle error
    }
}

export async function deleteOrder(id: string) {
    try {
        const order = await prisma.shop_order.delete({
            where: { id }
        })
        return order
    } catch (e) {

    }
}