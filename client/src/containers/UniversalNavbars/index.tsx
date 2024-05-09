import { useContext, useEffect, useState } from "react";
import globalStates from "../../utils/global";
import "./UniversalNavbars.css";

const UniversalNavbars = ({data}:any) =>{
    const navbarTitle = (data && data.title) || "bikinin";
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);  
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`${windowWidthClass}-universal-navbars  ${scrolled ? "navbar-scrolled-true" : ""}`}>
                <div className="navbars-group navbar-col-1">

                </div>
                <div className="navbars-group navbar-col-2">
                    <h1>{navbarTitle}</h1>
                </div>
                <div className="navbars-group navbar-col-3">
                    <p>home</p>
                    <p>menu</p>
                    <p>specials</p>
                </div>
            </div>
        </>
    )
};

export default UniversalNavbars