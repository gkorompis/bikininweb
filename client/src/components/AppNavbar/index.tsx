import { useContext, useEffect, useState } from "react";
import globalContext from "../../utils/global";
import "./app-navbar.css";
import globalStates from "../../utils/global";

const AppNavbar = ({styles}:any) =>{

    const {
        styleAppNavbar, 
        styleAppNavbarFixed, 
        styleAppNavbarInput, 
        styleAppNavbarInputCentered, 
        styleAppNavbarInputPlaceholder,
        styleAppNavbarTitle,
        styleAppNavbarAnchors,
        styleAppNavbarInputButton,
        styleAppNavbarInputButtonHover,
        styleAppNavbarBurger

    } = styles || {};

    const [scrolled, setScrolled] = useState(false);
    const [hoverButton, setHoverButton] = useState(false);
    const [dynamicStyleAppNavbarInput, setDynamicStyleAppNavbarInput] = useState(styleAppNavbarInputCentered);
    const [dynamicStyleAppNavbarFixed, setDynamicStyleAppNavbarFixed] = useState(styleAppNavbar);

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass


    // console.log("app-navbar", {globalContext, windowWidthClass});



    // put size state in the root !!!!;

    

    

    useEffect(()=>{
        console.log(">>>ue-appnavbar", {dynamicStyleAppNavbarInput, windowWidthClass})
        setDynamicStyleAppNavbarInput(styleAppNavbarInputCentered);
        setDynamicStyleAppNavbarFixed(styleAppNavbar);
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);
            // console.log("isScrolled",scrolled)
            if(scrolled){
                setDynamicStyleAppNavbarInput(styleAppNavbarInput);
                setDynamicStyleAppNavbarFixed(styleAppNavbarFixed);
            } else {
                (setDynamicStyleAppNavbarInput(styleAppNavbarInputCentered));
                setDynamicStyleAppNavbarFixed(styleAppNavbar);
            }
            // scrolled ? 
            // (setDynamicStyleAppNavbarInput(styleAppNavbarInput)) 
            // : (setDynamicStyleAppNavbarInput(styleAppNavbarInputCentered))
            // scrolled ? 
            // (setDynamicStyleAppNavbarInput(styleAppNavbarInput)) 
            // : (setDynamicStyleAppNavbarInput(styleAppNavbarInputCentered))
        };

        window.addEventListener('scroll', handleScroll);

        return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    }, [styleAppNavbarInputCentered, windowWidthClass, styleAppNavbar, styleAppNavbarFixed])

    return(
        <>
            <nav className={`${windowWidthClass}-app-navbar ` + (scrolled ? "navbar-fixed" : "")} style={dynamicStyleAppNavbarFixed}>
                <div>
                    <h1 style={styleAppNavbarTitle}>bikinin</h1>
                </div>
                <div>
                    <div className={scrolled ? "" : `${windowWidthClass}-searchbar-centered`}>
                        <input className={`navbar-searchbar `} placeholder="mau bikin website apa?" style={dynamicStyleAppNavbarInput}/>
                        <style> 
                            {`::placeholder${styleAppNavbarInputPlaceholder}` 
                            } 
                        </style> 
                        <button 
                            className="" style={hoverButton ? styleAppNavbarInputButtonHover : styleAppNavbarInputButton} 
                            onMouseOver={(e)=>{e.preventDefault(); setHoverButton(true)}}
                            onMouseLeave={(e)=>{e.preventDefault(); setHoverButton(false)}}
                        >cari design</button>
                    </div>
                </div>{}
                <div>
                            {
                                windowWidthClass === "w-mob" ?
                                <p className="mobile-burger" style={styleAppNavbarBurger}>=</p> :
                                <ul className={`${windowWidthClass}-app-navbar-ul`}>
                                    <li><a href="/" style={styleAppNavbarAnchors}>koleksi design</a></li>
                                    <li><a href="/" style={styleAppNavbarAnchors}>layanan bikinin</a></li>
                                    <li><a href="/" style={styleAppNavbarAnchors}>login</a></li>
                                </ul>
                                
                            }
                    
                </div>
            </nav>
        </>
    )
};

export default AppNavbar;