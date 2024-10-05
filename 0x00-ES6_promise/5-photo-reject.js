export default function uploadPhoto(fileName){
    return Promise.reject(new Error(`${fileName} can't be processed`))
}