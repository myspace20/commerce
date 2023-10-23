import { addToCart } from "../cart.service";

    // User adds a new item to an empty cart
    it('should add a new item to an empty cart', async () => {
        // Mock getProductItem function
        const getProductItemMock = jest.spyOn(productItemService, 'getProductItem');
        getProductItemMock.mockResolvedValue({ qty_in_stock: 1 });

        // Mock getUserCart function
        const getUserCartMock = jest.spyOn(cartService, 'getUserCart');
        getUserCartMock.mockResolvedValue(null);

        // Mock createCart function
        const createCartMock = jest.spyOn(cartService, 'createCart');
        createCartMock.mockResolvedValue({ id: 'cartId', shopping_cart_item: [] });

        // Mock createCartItem function
        const createCartItemMock = jest.spyOn(cartItemService, 'createCartItem');
        createCartItemMock.mockResolvedValue({ id: 'itemId', cartId: 'cartId' });

        const userId = '123';
        const itemId = '456';

        const result = await addToCart(userId, itemId);

        expect(result).toEqual({ id: 'cartId', shopping_cart_item: [{ id: 'itemId', cartId: 'cartId' }] });
        expect(getProductItemMock).toHaveBeenCalledWith(itemId);
        expect(getUserCartMock).toHaveBeenCalledWith(userId);
        expect(createCartMock).toHaveBeenCalledWith(userId, itemId);
        expect(createCartItemMock).toHaveBeenCalledWith('cartId', itemId);
    });