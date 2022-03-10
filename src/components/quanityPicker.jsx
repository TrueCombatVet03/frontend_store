import "./quanityPicker.css";
import {useState} from "react";

const QuanityPicker = () => {
    let [quanity, setQuanity] = useState(1);

    const handleDecrease = () =>{
        if(quanity>1)
        setQuanity(quanity-1);
    }

    const handleIncrease = () =>{
        setQuanity(quanity+1);
    }

    return (
        <div className="quanityPicker">
            <button onClick={handleDecrease}>-</button>
            <label>{quanity}</label>
            <button onClick={handleIncrease} >+</button>
            </div>
    );
}

export default QuanityPicker;