import React, {useEffect} from "react";
import "./themeSwitch.css";

export const ThemeSwitch = (props) => {

    useEffect(() => {
        document.getElementById('root').setAttribute("data-theme", "fractal-theme")
    },[])

    const handleThemeChange = (e) => {
        if (e.target.checked) {
            document.getElementById('root').setAttribute("data-theme", "flower-theme")
        } else {
            document.getElementById('root').setAttribute("data-theme", "fractal-theme") 
        }
    }


    return(
        <>
            <div className="picktheme">Pick Your Theme</div>
            <div className="outertheme">
                <div className="themes">Fractal </div>
                
                    <label htmlFor="themeToggle" className="toggle"> 
                        <input type="checkbox" id="themeToggle" onChange={handleThemeChange} />
                        <span className="roundbutton"></span>
                    </label>    
                
                <div className="themes">Flower </div>
            </div>      
        </>
    )
}