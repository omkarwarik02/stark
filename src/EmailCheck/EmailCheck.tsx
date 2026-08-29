import { useState } from "react";



export default function EmailCheck() {

const [Email, setEmail] = useState("");

const validate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);

const showMessage = () => {


    if(validate){
        return'Correct Email'
    } else {
        return 'Enter Valid Email'
    }


}
 const message = showMessage()


return (
<div className="w-full max-w-sm">
    <input
     type="email"
     value={Email}
     onChange={(e) => setEmail(e.target.value)}

     className="w-full border border-black px-3 py-2 rounded"
    />
     <small>{message}</small>
    

</div>









)












}