import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBarSearch(){
    const [userInput, setUserInput] = useState("");
    const navigateTo = useNavigate();

    function handleChange(evt){
        setUserInput(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        navigateTo(`/search/${userInput}`);
    }

    return(
        <form className="opacity-75" role="search" onSubmit={handleSubmit}>
            <input className="form-control rounded-pill" type="search" name="userInput" value={userInput} placeholder="Buscar Productos" onChange={handleChange}/>
        </form>
    );
}