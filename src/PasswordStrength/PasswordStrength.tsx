import { useState } from "react";


export default function PasswordStrength(){

    const [password,setPassword] = useState("");

    const hasMinlength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);

    const score = Number (hasMinlength) + Number(hasUppercase) + Number(hasNumber) + Number(hasSymbol) ;

    let strength;
    if(score < 2){
        strength = "Weak";
    } else if(score <= 3){
        strength = "Medium";
    }else{
        strength = "Strong";
    }

    return (
        <div>
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />   
        <p>Password is {strength}</p>
        </div>
    )
    






}