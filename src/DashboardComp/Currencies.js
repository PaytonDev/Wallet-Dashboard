import React from "react";
import {Currency, currencyArray} from "./Currency";
import "./Currencies.css"


const Currencies = () => {
    return (
    <div className="Currencies">
        {currencyArray.map((curr, idx) => 
            <Currency 
                name={curr.name} 
                value={curr.value} 
                icon={curr.icon} 
                percentChange={curr.percentChange}
                key={`${curr.name}${idx}`}
            />)}
    </div>
    )
}

export default Currencies;

