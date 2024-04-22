import { useEffect, useState } from "react";
import "./app-navbar.css";

const AppNavbar = ({styles}:any) =>{
    const {
        styleAppNavbar, 
        styleAppNavbarInput, 
        styleAppNavbarInputCentered, 
        styleAppNavbarInputPlaceholder,
        styleAppNavbarTitle,
        styleAppNavbarAnchors,
        styleAppNavbarInputButton,
        styleAppNavbarInputButtonHover

    } = styles || {};
    const [scrolled, setScrolled] = useState(false);
    const [hoverButton, setHoverButton] = useState(false);
    const [dynamicStyleAppNavbarInput, setDynamicStyleAppNavbarInput] = useState(styleAppNavbarInputCentered);
    console.log(scrolled);
    useEffect(()=>{
        console.log("appnavbar ue", {dynamicStyleAppNavbarInput})
        setDynamicStyleAppNavbarInput(styleAppNavbarInputCentered);
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);
            console.log("isScrolled",scrolled)
            scrolled ? 
            setDynamicStyleAppNavbarInput(styleAppNavbarInput) : setDynamicStyleAppNavbarInput(styleAppNavbarInputCentered);
        };

        window.addEventListener('scroll', handleScroll);

        return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    }, [styleAppNavbarInputCentered])

    return(
        <>
            <nav className={"app-navbar " + (scrolled ? "navbar-fixed" : "")} style={styleAppNavbar}>
                <div>
                    <h1 style={styleAppNavbarTitle}>bikinin</h1>
                </div>
                <div>
                    <div className={scrolled ? "" : "searchbar-centered"}>
                        <input className={"navbar-searchbar " } placeholder="mau bikin website apa?" style={dynamicStyleAppNavbarInput}/>
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
                    <ul className="app-navbar-ul">
                        <li><a href="/" style={styleAppNavbarAnchors}>koleksi design</a></li>
                        <li><a href="/" style={styleAppNavbarAnchors}>layanan bikinin</a></li>
                        <li><a href="/" style={styleAppNavbarAnchors}>login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default AppNavbar;