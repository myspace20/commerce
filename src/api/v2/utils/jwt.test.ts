import { signJWT } from "./jwt.utils";

it('should sign a JWT token with valid payload and keyName', () => {
    const payload = { id: 1, name: 'John Doe' };
    const keyName = 'secretKey';
    const token = signJWT(payload, keyName);
    expect(token).toBeDefined();
});

