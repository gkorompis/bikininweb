import { useContext, useEffect, useState } from "react";
import globalStates from "../../utils/global";
import "./UniversalNavbar2.css";

const UniversalNavbars2 = ({data}:any) =>{
    const titleBar = (data && data.title ) || "bikinin2";
    const pages = (data && data.pages) || ["home", "services", "articles", "contacts"]

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const [scrolled, setScrolled] = useState(false);;

    console.log(scrolled)
    useEffect(()=>{
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);  
        };
        window.addEventListener('scroll', handleScroll);

        return()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    },[scrolled]);

    return (
        <>
            <nav className={`${windowWidthClass}-universal-navbar-2` + " " + `${(scrolled ? windowWidthClass : "")}-universal-navbar-2-border`}>
                <div className="group-anchors col-1">
                    <h1>
                        {titleBar}
                    </h1>
                </div>
                <div className="group-anchors col-2">
                    {
                        pages.map (
                            (pageName:any, index:any)=>{
                                return(
                                    <p key={pageName+index}>{pageName}</p>
                                )
                            }
                        )
                    }
                </div>
                <div className="group-anchors col-3">
                    
                </div>
            </nav>
        </>
    )
};

export default UniversalNavbars2;