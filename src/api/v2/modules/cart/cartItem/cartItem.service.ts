import { prisma } from "../../../../v1/server";
import { getProductItem } from "../../productItem/productItem.service";
import { getUserCart } from "../cart.service";



/**
     * Creates a new item in a shopping cart.
     * 
     * @param {string} cartId - The ID of the shopping cart.
     * @param {string} itemId - The ID of the product item to be added to the cart.
     * @returns {Promise<object>} The newly created cart item, including its ID, cart ID, product item ID, quantity, and the associated shopping cart record.
 */
export async function createCartItem(cartId: string, itemId: string) {
    try {
        const cartItem = await prisma
            .shopping_cart_item.create({
                data: {
                    cartId,
                    product_item_id: itemId,
                    qty: 1
                },
                include: { shopping_cart: true }
            })
        return cartItem
    } catch (e) {

    }
}


/**
 * Finds a specific item in the shopping cart based on its ID.
 * 
 * @param itemId - The ID of the product item to search for in the shopping cart.
 * @returns The cart item that matches the given `itemId`, or `null` if no item is found.
 */
export async function findCartItem(itemId: string) {
    try {
        const cartItem = await prisma
            .shopping_cart_item.findFirst({
                where: {
                    product_item_id: itemId
                }
            })
        return cartItem
    } catch (e) {

    }
}

/**
 * Deletes a cart item from the shopping cart.
 * 
 * @param itemId - The ID of the cart item to be deleted.
 * @returns The deleted cart item object, including the associated shopping cart.
 * @example
 * const deletedItem = await deleteCartItem(itemId);
 * console.log(deletedItem);
 * // Output: The deleted cart item object
 */
export async function deleteCartItem(itemId: string) {
    try {
        const cartItem = await prisma
            .shopping_cart_item.delete({
                where: { id: itemId },
                include: { shopping_cart: true }
            })
        return cartItem
    } catch (e) {
        // Handle any errors that occur during the deletion process
    }
}


/**
 * Increases the quantity of a specific item in a shopping cart.
 * @param {string} cartId - The ID of the shopping cart.
 * @param {string} itemId - The ID of the item to be incremented in the shopping cart.
 * @returns {Promise<object>} The updated shopping cart with the quantity of the item incremented by 1.
 * @throws {Error} If the item is out of stock (qty_in_stock = 0).
 *
 * @example
 * const cartId = "123";
 * const itemId = "456";
 * const updatedCart = await increaseCartItemQty(cartId, itemId);
 * console.log(updatedCart);
 * // Output: The updated shopping cart with the quantity of the item incremented by 1
 */
export async function increaseCartItemQty(cartId: string, itemId: string) {
    try {
        const prodItem = await getProductItem(itemId)

        if (prodItem?.qty_in_stock === 0) {
            throw Error()
        }
        const cart = await prisma
            .shopping_cart.update({
                where: { id: cartId },
                data: {
                    shopping_cart_item:
                    {
                        update: {
                            where: { id: itemId },
                            data: { qty: { increment: 1 } }
                        }
                    }
                },
                include: { shopping_cart_item: true }
            })

        return cart
    } catch (e) {
        // Handle error here
    }
}



/**
 * Decreases the quantity of a specific item in a shopping cart.
 * If the quantity of the item is already 1, the item is removed from the cart.
 * Otherwise, the quantity of the item is decremented by 1.
 * 
 * @param itemId - The ID of the item to decrease the quantity of.
 * @param cartId - The ID of the shopping cart that contains the item.
 * @returns The deleted cart item if the quantity was 1, or the updated shopping cart object.
 * 
 * @example
 * const itemId = "123";
 * const cartId = "456";
 * const updatedCart = await decreaseCartItemQty(itemId, cartId);
 * console.log(updatedCart);
 */
export async function decreaseCartItemQty(itemId: string, cartId: string) {
    try {
        const item = await findCartItem(itemId)
        if (item?.qty === 1) {
            const item = await deleteCartItem(itemId)
            return item
        }
        const cart = await prisma
            .shopping_cart.update({
                where: {
                    id: cartId
                },
                data: {
                    shopping_cart_item:
                    {
                        update: {
                            where: { id: itemId },
                            data: { qty: { decrement: 1 } }
                        }
                    }
                },
                include: { shopping_cart_item: true }
            })


        return cart
    } catch (e) {

    }
}

