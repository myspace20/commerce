import { Prisma } from "@prisma/client";
import { prisma } from "../../../v1/server";
import { createCartItem, findCartItem, increaseCartItemQty } from "./cartItem/cartItem.service";
import { getProductItem } from "../productItem/productItem.service";




export async function addToCart(userId: string, itemId: string) {
    /**
     * Adds an item to a user's cart.
     * 
     * @param userId - The ID of the user adding the item to the cart.
     * @param itemId - The ID of the item being added to the cart.
     * @returns The updated cart with the added item.
     * @throws Error if the item is out of stock.
     */
    try {
        const prodItem = await getProductItem(itemId)

        if (prodItem?.qty_in_stock === 0) {
            throw Error()
        }
        const userCart = await getUserCart(userId)
        const cartItem = await findCartItem(itemId)

        if (userCart && cartItem) {
            const increaseItemQty = await increaseCartItemQty(
                userCart?.id as string,
                cartItem?.id as string
            )
            return increaseItemQty
        }

        if (userCart && !cartItem) {
            const item = await createCartItem(userCart.id, itemId)
            const addItem = await updateCartWithItem(
                item?.id as string,
                 item?.cartId as string
                )
            return addItem
        }

        const cart = await createCart(userId, itemId)

        return cart
    } catch (e) {

    }

}

/**
 * Creates a new cart for a user and adds an item to the cart.
 * 
 * @param userId - The ID of the user for whom the cart is being created.
 * @param itemId - The ID of the item to be added to the cart.
 * @returns The newly created cart object with the assigned `userId` and the added item.
 */
export async function createCart(userId: string, itemId: string) {
    try {
        const prodItem = await getProductItem(itemId)
        const userCart = await getUserCart(userId)
        if (prodItem?.qty_in_stock === 0) {
            throw Error()
        }
        if (userCart) {
            return userCart
        }
        const cart = await prisma
            .shopping_cart.create({
                data: {
                    userId,
                    shopping_cart_item: {
                        create: [
                            { product_item_id: itemId, qty: 1 }
                        ]
                    }
                },
                include: {
                    shopping_cart_item: true
                }
            })
        return cart
    } catch (e) {

    }
}

export async function getCart(id: string) {
    try {
        const cart = await prisma
            .shopping_cart.findUnique({
                where: {
                    id
                }
            })
        return cart
    } catch (e) {

    }
}


/**
 * Retrieves the user's cart from the database.
 * 
 * @param userId - The ID of the user.
 * @returns The user's cart object from the database, including the associated shopping cart items.
 */
export async function getUserCart(userId: string) {
    try {
        const cart = await prisma
            .shopping_cart.findFirst({
                where: { userId },
                include: { shopping_cart_item: true }
            })
        return cart
    } catch (e) {

    }
}
/**
     * Retrieves all shopping carts from the database.
     * 
     * @returns {Promise<Array<Object>>} An array of shopping carts retrieved from the database.
     * Each cart object contains properties such as `id`, `createdAt`, `updatedAt`, etc.
     */
export async function getAllCarts() {
    try {
        const carts = await prisma.shopping_cart.findMany({});
        return carts;
    } catch (e) {

    }
}


/**
       * Updates a user's cart by connecting a new item to the cart.
       * 
       * @param {string} itemId - The ID of the item to be added to the cart.
       * @param {string} cartId - The ID of the cart to be updated.
       * @returns {object} The updated cart object, including the connected item.
       */
export async function updateCartWithItem(itemId: string, cartId: string) {
    try {
        const exists = await getCart(cartId)
        if (!exists) {
            throw Error()
        }
        const cart = await prisma.shopping_cart.update({
            where: {
                id: cartId
            },
            data: {
                shopping_cart_item: {
                    connect: {
                        id: itemId
                    }
                }
            },
            include: {
                shopping_cart_item: true
            }
        })
        return cart
    } catch (e) {

    }
}

/**
 * Deletes a shopping cart from the database using Prisma ORM.
 * 
 * @param id - The ID of the shopping cart to be deleted.
 * @returns The deleted shopping cart object, including its associated shopping cart items.
 */
export async function deleteCart(id: string) {
    try {
        const exists = await getCart(id)
        if (!exists) {
            throw Error()
        }
        const cart = await prisma.shopping_cart.delete({
            where: {
                id
            },
            include: { shopping_cart_item: true }
        });
        return cart;
    } catch (e) {

    }
}

export async function deleteAllCarts() {
    /**
     * Deletes all records from the shopping_cart table.
     * 
     * @returns {Promise<any>} The deleted records from the shopping_cart table.
     */
    try {
        const cart = await prisma.shopping_cart.deleteMany({});
        return cart;
    } catch (e) {

    }
}





