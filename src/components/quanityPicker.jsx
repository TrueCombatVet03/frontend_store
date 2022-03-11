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
            <button className="btn btn-success btn-sm" onClick={handleDecrease}>-</button>
            <label>{quanity}</label>
            <button className="btn btn-success btn-sm" onClick={handleIncrease} >+</button>
        </div>
    );
}

export default QuanityPicker;