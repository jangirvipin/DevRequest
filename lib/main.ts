import axios from "axios";

async function getUrl(url:string){
    try{
        return await axios.get(url);
    }catch (e){
        console.error(e)
        return null
    }
}
export default getUrl