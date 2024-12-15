import axios from "axios"
import { promises } from "dns";
import { json } from "stream/consumers";
// "client-side"
//create function with axios
 async function userDetails(){
   // await new Promise((r)=> setTimeout(r,5000)) this is artifical loader
await new Promise((r)=>setTimeout(r, 5000))
const response = await axios.get("http://localhost:3000/api/user")
return response.data;
   
   }
//main componet

export default async function GetDetails(){
   
   const data = await userDetails();
return (
<div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data.name}
                </div>
                {data.email}
            </div>
        </div>
    </div>
  )
}


