import { useEffect, useState } from "react"
export const Slider=(props)=>{

    // const [toggle,setToggle]=useState(props.toggle)

  

 return(

    <div>
        <span className={!props.toggle ? "label_txt_unchecked" : "label_txt"}>Nein</span>
              <label className="switch">
                <input
                  checked={props.toggle}
                  type={"checkbox"}
                  onChange={() => props.handleToggle(props.toggle)}
                />
                <span className="slider"></span>
              </label>
              <span className={props.toggle ? "label_txt_checked" : "label_txt"}>Ja</span>
    </div>
 );


}