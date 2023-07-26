import bcrypt from 'bcrypt'

async function comparehash(password: string, hash: string) {

    try {
        const match = await bcrypt.compare(password, hash)

        if(!match) throw Error("Incorrect password")

        return match

    } catch (error) {

        return error
    }

}


export default comparehash