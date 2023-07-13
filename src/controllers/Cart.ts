import { Request, Response } from "express";
import { prisma } from "../server";


export const addToCart = async (req: Request, res: Response) => {

    const { id, qty } = req.body

    const user = req.user

    const userId = user.id


    const cart = await prisma.shopping_cart.findFirst({
        where: {
            userId
        },
        include: {
            shopping_cart_item: true
        }
    })

    console.log(cart)

    if (cart) {

        const productItem = await prisma.shopping_cart_item.findFirst({
            where: {
                product_item_id: id
            }
        })
        console.log(productItem)


        if (productItem) {

            const updateCart = await prisma.shopping_cart.update({
                where: {
                    id: productItem.cartId
                },
                data: {
                    shopping_cart_item: {
                        update: {
                            where: {
                                id: productItem.id
                            },
                            data: {
                                qty: {
                                    increment: 1
                                }
                            }
                        }
                    }
                },
                include: {
                    shopping_cart_item: true
                }
            })

            res.send(updateCart)
        } else {

            // const cart = await prisma.shopping_cart.findFirst({
            //     where:{
            //         userId
            //     },

            //     include:{
            //         shopping_cart_item:true
            //     }
            // })


            const addNew = await prisma.shopping_cart_item.create({
                data: {
                    cartId: cart?.id,
                    product_item_id: id,
                    qty: 1
                }
            })

            const connect = await prisma.shopping_cart.update({
                where: {
                    id: addNew.cartId
                },
                data: {
                    shopping_cart_item: {
                        connect: {
                            id: addNew.id
                        }
                    }
                },
                include: {
                    shopping_cart_item: true
                }
            })

            res.send(connect)
        }

    }

    const newCart = await prisma.shopping_cart.create({
        data: {
            userId,
            shopping_cart_item: {
                create: [
                    { product_item_id: id, qty: 1 }
                ]
            }
        },
        include: {
            shopping_cart_item: true
        }
    })


}

export const reduceQty = async (req: Request, res: Response) => {

    const { id, qty } = req.body

    const user = req.user

    const userId = user.id


    const cart = await prisma.shopping_cart.findFirst({
        where: {
            userId
        },
        include: {
            shopping_cart_item: true
        }
    })

    console.log(cart)

    if (cart) {

        const productItem = await prisma.shopping_cart_item.findFirst({
            where: {
                product_item_id: id
            }
        })
        console.log(productItem)


        if (productItem) {

            const updateCart = await prisma.shopping_cart.update({
                where: {
                    id: productItem.cartId
                },
                data: {
                    shopping_cart_item: {
                        update: {
                            where: {
                                id: productItem.id
                            },
                            data: {
                                qty: {
                                    decrement: 1
                                }
                            }
                        }
                    }
                },
                include: {
                    shopping_cart_item: true
                }
            })

            res.send(updateCart)
        }
    }
}

export const removeFromCart = async (req: Request, res: Response) => {

    const { id } = req.body
    const userId = req.user.id

    // const productItem = await prisma.shopping_cart_item.findFirst({
    //     where: {
    //         product_item_id: id
    //     }
    // })


    const deletedCartItem = await prisma.shopping_cart_item.delete({
        where: {
            id
        }
    })

    console.log(deletedCartItem)

    res.send(deletedCartItem)

}

export const increaseQty = async (req: Request, res: Response) => {

    const { id, qty } = req.body

    const user = req.user

    const userId = user.id


    const cart = await prisma.shopping_cart.findFirst({
        where: {
            userId
        },
        include: {
            shopping_cart_item: true
        }
    })

    console.log(cart)

    if (cart) {

        const productItem = await prisma.shopping_cart_item.findFirst({
            where: {
                product_item_id: id
            }
        })
        console.log(productItem)


        if (productItem) {

            const updateCart = await prisma.shopping_cart.update({
                where: {
                    id: productItem.cartId
                },
                data: {
                    shopping_cart_item: {
                        update: {
                            where: {
                                id: productItem.id
                            },
                            data: {
                                qty: {
                                    increment: 1
                                }
                            }
                        }
                    }
                },
                include: {
                    shopping_cart_item: true
                }
            })

            res.send(updateCart)
        }
    }

}

export const deleteCart = async (req: Request, res: Response) => {

    const userId = req.user

    const deletedCart = await prisma.shopping_cart.deleteMany({
        where: userId
    })

    res.send(deletedCart)
}