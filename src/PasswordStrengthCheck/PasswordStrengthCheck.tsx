import { useState } from "react";


export default function PasswordStrengthCheck(){

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
        <div className="w-full max-w-sm ">
        <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="w-full border border-black px-3 py-2 rounded"
        />   
        <small>Password is {strength}</small>
        </div>
    )
    






}