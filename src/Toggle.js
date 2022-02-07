import check from "./icons/check.svg";
import cross from "./icons/cross.svg";
import question from "./icons/question.svg";
import { useState } from "react";


const Toggle = () => {
    // Array of icons
    const arrOfImages = [check, cross, question];

    // The state which holds the index of the icons array
    const [item, setItem] = useState(0);
    

    // Function for setting the state
    const settingTheIcons = () => {
        // Starting at the index zero if the user clicked on the icon and the index is the last one
        if((item + 1) === arrOfImages.length){
            setItem(0);    
        } else {
            setItem(item + 1);
        }
    }

    // returning the elements
    return (
        <div onClick={settingTheIcons}>
            <img src={arrOfImages[item]}/>
        </div>
    )


};

export default Toggle;