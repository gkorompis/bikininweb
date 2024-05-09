import { useContext, useEffect, useState } from "react";
import "./app-navbar.css";
import globalStates from "../../utils/global";
import { useNavigate } from "react-router-dom";

const openLinkHandler = (link:any) =>{
    window.open(link, '_blank');
}


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
        styleAppNavbarBurger,
        styleBurgerCollapsedPspan,

    } = styles || {};

    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [hoverButton, setHoverButton] = useState(false);
    const [dynamicStyleAppNavbarInput, setDynamicStyleAppNavbarInput] = useState(styleAppNavbarInputCentered);
    const [dynamicStyleAppNavbarFixed, setDynamicStyleAppNavbarFixed] = useState(styleAppNavbar);
    const [isBurgerCollapsed, setIsBurgerCollapsed] = useState(false);
    const [searchbarValue, setSearchbarValue] = useState("");

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;


    // console.log("app-navbar", {globalContext, windowWidthClass});



    // put size state in the root !!!!;

    const handleBurgerCollapsed = () =>{
        setIsBurgerCollapsed(!isBurgerCollapsed);
    };
    const handleNavigate = (routePath:string)=>{
        navigate(routePath);
        window.scrollTo(0,0);
        // console.log('route', routePath)
    }
    const handleInputChange = (e:any)=>{
        try{
            setSearchbarValue(e.target.value);
        } catch (err){
            
        }
    }
    const handleButtonBikinin = () =>{
        const inputMessage = searchbarValue as string;
        const waFormat = inputMessage.replace(/ /g, "%20");
        const waMessage = `https://wa.me/6287715376976?text=Halo,%20saya%20mau%20minta%20tolong%20dibikinin%20website%20tentang%20${waFormat}.%20Mohon%20bantuan%20informasinya.%20Terima%20kasih.%20`
        openLinkHandler(waMessage);
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
        // console.log(">>>ue-appnavbar", {dynamicStyleAppNavbarInput, windowWidthClass})
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

        // console.log("scrolle in app navbar", scrolled)

        window.addEventListener('scroll', handleScroll);

        return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    }, [styleAppNavbarInputCentered, windowWidthClass, styleAppNavbar, styleAppNavbarFixed, isBurgerCollapsed, styleAppNavbarInput])

    return(
        <>
            <nav className={`${windowWidthClass}-app-navbar ` + (scrolled ? "navbar-fixed" : "")} style={dynamicStyleAppNavbarFixed}>
                <div>
                    <h1 style={styleAppNavbarTitle}>bikinin</h1>
                </div>
                <div>
                    <div className={scrolled ? "" : `${windowWidthClass}-searchbar-centered`}>
                        <input 
                            id="navbar-searchbar" 
                            name="navbar-searchbar" 
                            className={`navbar-searchbar `} 
                            placeholder="mau bikin website tentang apa?" 
                            style={dynamicStyleAppNavbarInput}
                            value={searchbarValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            />
                        <style> 
                            {`::placeholder${styleAppNavbarInputPlaceholder}` 
                            } 
                        </style> 
                        <button 
                            className="" style={hoverButton ? styleAppNavbarInputButtonHover : styleAppNavbarInputButton} 
                            onMouseOver={(e)=>{e.preventDefault(); setHoverButton(true)}}
                            onMouseLeave={(e)=>{e.preventDefault(); setHoverButton(false)}}
                            onClick={handleButtonBikinin}
                        >bikinin</button>
                    </div>
                </div>{}
                <div>
                            {
                                windowWidthClass === "w-mob" ?
                                <p className="mobile-burger" style={styleAppNavbarBurger} onClick={handleBurgerCollapsed}>=</p> :
                                <ul className={`${windowWidthClass}-app-navbar-ul`}>
                                   
                                    <li><a  style={styleAppNavbarAnchors} onClick={()=>handleNavigate('/referensi-design')}>referensi design</a></li>
                                    <li><a  style={styleAppNavbarAnchors} onClick={()=>handleNavigate("/layanan")}>layanan bikinin</a></li>
                                    <li><a  style={styleAppNavbarAnchors} onClick={handleButtonRequestMeeting}>request meeting</a></li>
                                </ul>
                                
                            }
                    
                </div>
            </nav>
            {windowWidthClass === "w-mob" ?
            <div>
                <div className={`${"burger-collapsed "} ${(isBurgerCollapsed ? "" : "burger-collapsed-hide")}`}>
                    <ul className={`${windowWidthClass}-app-navbar-ul-bruger-collapsed`}>
                         <h3 style={styleAppNavbarAnchors}>bikinin</h3>
                        <li><a style={styleAppNavbarAnchors} onClick={()=>handleNavigate("/referensi-design")}>referensi design</a></li>
                        <li><a style={styleAppNavbarAnchors} onClick={()=>handleNavigate("/layanan")}>layanan bikinin</a></li>
                        <li><a style={styleAppNavbarAnchors} onClick={handleButtonRequestMeeting}>request meeting</a></li>
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

export default AppNavbar;