import { TOKEN_SECRET } from "../Config.js" ;

export function createAccesToken (payload) {
   return new Promise ( (resolve , reject) =>{
    jwt.sign(
        payload , 
        TOKEN_SECRET,
       {
        expiresIn: "1d"
       },
       (err , token) => {
        if(err) reject(err)
        resolve(token)       
       })
   })
}
