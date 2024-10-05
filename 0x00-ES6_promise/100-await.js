import createUser  from "./utils";
import uploadPhoto from "./utils";

export default async function asynUploadUser(){
    try{
        const photo = await uploadPhoto()
        const user = await createUser()

        return {
            photo:photo,
            user:user
        }
    } catch(error) {
        return {
            photo:null,
            user:null
        }
    }
}