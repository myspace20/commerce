import bcrypt from 'bcrypt'


export const createHash = async (password: string) => {

    try {
        const salt = await bcrypt.genSalt(10)

        const hash = await bcrypt.hash(password, salt)

        return hash

    } catch (e) {
        return 'invalid hashing'
    }
}


export const compareHash = async (
    password: string,
    hash: string
    ) => {

    try {
        const match = await bcrypt.compare(password, hash)
        return match
    } catch (e) {
        return false
    }

}