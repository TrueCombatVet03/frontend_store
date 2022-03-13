import "./quanityPicker.css";
import {useState} from "react";

const QuanityPicker = (props) => {
    let [quanity, setQuanity] = useState(1);

    const handleDecrease = () =>{
        let value = quanity;
        if(value>1)
            value = value-1;

        setQuanity(value);
        props.onChange(value);
    }

    const handleIncrease = () =>{
        let value = quanity+1;
        
        setQuanity(value);
        props.onChange(value);
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