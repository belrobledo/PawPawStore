import { useState } from "react";

export default function NavBarSearch(){
    const [userInput, setUserInput] = useState("f");

    function handleChange(evt){
        setUserInput(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        console.log(userInput);
    }

    return(
        <form className="opacity-75" role="search" onSubmit={handleSubmit}>
            <input className="form-control rounded-pill" type="search" name="userInput" value={userInput} placeholder="Buscar Productos" onChange={handleChange}/>
        </form>
    );
}