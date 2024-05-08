import { useContext, useEffect, useState } from "react";
import globalStates from "../../utils/global";
import "./UniversalNavbarBlur.css";

const UniversalNavbarBlur = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const [scrolled, setScrolled] = useState(false);
    // console.log(scrolled);



    useEffect(()=>{
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);  
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            <div className={`${windowWidthClass}-universal-navbar-blur-backdrop ${scrolled ? 'app-navbar-fixed' : ''}`}>
   
            </div>
            <div className={`${windowWidthClass}-universal-navbar-blur app-navbar-fixed`}>
                <div className={"bar-1" + ` ${scrolled ? 'opacity-show' : 'opacity-hide'}`} >
                    <h1>Allison Wears</h1>
                </div>
                <div className="bar-2">
                    
                </div>
                <div className="bar-3">
                    <p>home </p>
                    <p>shops </p>
                    <p>about </p>
                    <p>contacts </p>
                </div>
            </div>
        </>
    )
};

export default UniversalNavbarBlur;