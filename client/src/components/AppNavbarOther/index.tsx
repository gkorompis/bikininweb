import { useContext, useEffect, useState } from "react";
import "./app-navbar.css";
import globalStates from "../../utils/global";
import { useNavigate } from "react-router-dom";


const openLinkHandler = (link:any) =>{
    window.open(link, '_blank');
}
const AppNavbarOther = ({styles}:any) =>{

    const {
        styleAppNavbarOther, 
        styleAppNavbarOtherFixed, 
        styleAppNavbarOtherInput, 
        styleAppNavbarOtherInputCentered, 
        styleAppNavbarOtherInputPlaceholder,
        styleAppNavbarOtherTitle,
        styleAppNavbarOtherAnchors,
        styleAppNavbarOtherInputButton,
        styleAppNavbarOtherInputButtonHover,
        styleAppNavbarOtherBurger,
        styleBurgerCollapsedPspan,

    } = styles || {};

    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [hoverButton, setHoverButton] = useState(false);
    const [dynamicStyleAppNavbarOtherInput, setDynamicStyleAppNavbarOtherInput] = useState(styleAppNavbarOtherInput);
    const [dynamicStyleAppNavbarOtherFixed, setDynamicStyleAppNavbarOtherFixed] = useState(styleAppNavbarOther);
    const [isBurgerCollapsed, setIsBurgerCollapsed] = useState(false);

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;


    // console.log("app-navbar", {globalContext, windowWidthClass});



    // put size state in the root !!!!;

    const handleBurgerCollapsed = () =>{
        setIsBurgerCollapsed(!isBurgerCollapsed);
    };
    const handleNavigate = (routePath:string)=>{
        navigate(routePath)
        // console.log('route', routePath)
    }
    const handleButtonRequestMeeting = () =>{
        const waMessage = `https://wa.me/6287715376976?text=Halo,%20saya%20mau%20request%20meeting%20online%20untuk%20diskusi%20terkait%20bikinin%20website.%20Mohon%20bantuannya.%20Terima%20kasih.%20`
        openLinkHandler(waMessage);
    } 
    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            // Call a function or submit a form here
            const inputMessage = e.target.value;
            const waFormat = inputMessage.replace(/ /g, "%20");
            const waMessage = `https://wa.me/6287715376976?text=Halo,%20saya%20mau%20minta%20tolong%20dibikinin%20website%20tentang%20${waFormat}.%20Mohon%20bantuan%20informasinya.%20Terima%20kasih.%20`
            openLinkHandler(waMessage);
        }
    };

  

    useEffect(()=>{
        // console.log(">>>ue-appnavbarOther", {dynamicStyleAppNavbarOtherInput, windowWidthClass})
        setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInput);
        setDynamicStyleAppNavbarOtherFixed(styleAppNavbarOther);

        

        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            
            setScrolled(scrolled);
            // console.log("isScrolled",scrolled)
            if(scrolled){
                setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInput);
                setDynamicStyleAppNavbarOtherFixed(styleAppNavbarOtherFixed);
            } else {
                (setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInput));
                setDynamicStyleAppNavbarOtherFixed(styleAppNavbarOther);
            }
            // scrolled ? 
            // (setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInput)) 
            // : (setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInputCentered))
            // scrolled ? 
            // (setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInput)) 
            // : (setDynamicStyleAppNavbarOtherInput(styleAppNavbarOtherInputCentered))
        };

        // console.log("scrolle in app navbar", scrolled)

        window.addEventListener('scroll', handleScroll);

        return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    }, [styleAppNavbarOtherInputCentered, windowWidthClass, styleAppNavbarOther, styleAppNavbarOtherFixed, isBurgerCollapsed, styleAppNavbarOtherInput])

    return(
        <>
            <nav className={`${windowWidthClass}-app-navbar ` + (scrolled ? "navbar-fixed" : "")} style={dynamicStyleAppNavbarOtherFixed}>
                <div>
                    <h1 style={styleAppNavbarOtherTitle} onClick={()=>handleNavigate('/')}>bikinin</h1>
                </div>
                <div>
                    <div className={scrolled ? "" : `${windowWidthClass}-searchbar-centered-xxx`}>
                        <input  id="navbar-searchbar" name="navbar-searchbar"  className={`navbar-searchbar `} placeholder="mau bikin website apa?" style={dynamicStyleAppNavbarOtherInput}
                            onKeyDown={handleKeyPress}
                        />
                        <style> 
                            {`::placeholder${styleAppNavbarOtherInputPlaceholder}` 
                            } 
                        </style> 
                        <button 
                            className="" style={hoverButton ? styleAppNavbarOtherInputButtonHover : styleAppNavbarOtherInputButton} 
                            onMouseOver={(e)=>{e.preventDefault(); setHoverButton(true)}}
                            onMouseLeave={(e)=>{e.preventDefault(); setHoverButton(false)}}
                        >bikinin</button>
                    </div>
                </div>{}
                <div>
                            {
                                windowWidthClass === "w-mob" ?
                                <p className="mobile-burger" style={styleAppNavbarOtherBurger} onClick={handleBurgerCollapsed}>=</p> :
                                <ul className={`${windowWidthClass}-app-navbar-ul`}>
                                   
                                    <li><p  style={styleAppNavbarOtherAnchors} onClick={()=>handleNavigate('/referensi-design')}>referensi design</p></li>
                                    <li><p  style={styleAppNavbarOtherAnchors} onClick={()=>handleNavigate('/layanan')}>layanan bikinin</p></li>
                                    <li><p style={styleAppNavbarOtherAnchors} onClick={handleButtonRequestMeeting}>request meeting</p></li>
                                </ul>
                                
                            }
                    
                </div>
            </nav>
            {windowWidthClass === "w-mob" ?
            <div>
                <div className={`${"burger-collapsed "} ${(isBurgerCollapsed ? "" : "burger-collapsed-hide")}`}>
                    <ul className={`${windowWidthClass}-app-navbar-ul-bruger-collapsed`}>
                         <h3 style={styleAppNavbarOtherAnchors}>bikinin</h3>
                        <li><p style={styleAppNavbarOtherAnchors} onClick={()=>handleNavigate("/referensi-design")}>referensi design</p></li>
                        <li><p style={styleAppNavbarOtherAnchors} onClick={()=>handleNavigate('/layanan')}>layanan bikinin</p></li>
                        <li><p style={styleAppNavbarOtherAnchors} onClick={handleButtonRequestMeeting}>request meeting</p></li>
                    </ul>
                    <p style={styleBurgerCollapsedPspan} onClick={handleBurgerCollapsed} >
                        {/* <i className="arrow up" style={styleBurgerCollapsedPspanArrow} onClick={handleBurgerCollapsed}></i> */}
                        close
                    </p>
                </div> 
            </div>  : null
            }
            
        </>
    )
};

export default AppNavbarOther;