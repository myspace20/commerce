import bcrypt from 'bcrypt'


async function createhash(password:string) {

    try {
        const hashedPasword = await bcrypt.hash(password, 10)

        return hashedPasword
        
    } catch (error:any) {

        return error
    }
   
}

export default createhash