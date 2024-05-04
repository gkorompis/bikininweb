import { useEffect, useState } from "react";
import { AppNavbar } from "../../components";
import globalStates from "../../utils/global";
import "./KoleksiPage.css";

const drapeColors = (palatteObject:any) =>{
    const {body} = palatteObject || {};
    document.body.style.backgroundColor = body && body.backgroundColor;
};  


const KoleksiPage = () =>{
    const pallateHex = globalStates && globalStates.globalPallateHex as any;
    const pallateNames = globalStates && globalStates.golbalPallateNames as any;
    const pallateObject = globalStates && globalStates.globalPallateObject as any;
    const defaultPallate = (pallateObject && pallateObject["bikinin"]) || {};
    const [pallate, setPallate] = useState(defaultPallate);
    const [scrolled, setScrolled] = useState(false);;

    useEffect(()=>{
            const handleScroll = () => {
                const scrolled = window.scrollY > 0;
                setScrolled(scrolled);  
            };
            window.addEventListener('scroll', handleScroll);
            document.body.style.transition = "1s ease-in-out";
            drapeColors(pallate);

            return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
             
        }, [pallate])

    return(
        <>
            <div className="koleksi-page">
                <AppNavbar
                        styles ={{
                            styleAppNavbar: pallate && pallate.appNavbar,
                            styleAppNavbarFixed: pallate && pallate.appNavbarFixed,
                            styleAppNavbarInput: pallate && pallate.appNavbarInput,
                            styleAppNavbarInputCentered: pallate && pallate.appNavbarInputCentered,
                            styleAppNavbarInputPlaceholder: pallate && pallate.appNavbarInputPlaceholder,
                            styleAppNavbarTitle: pallate && pallate.appNavbarTitle,
                            styleAppNavbarAnchors: pallate && pallate.appNavbarAnchors,
                            styleAppNavbarInputButton: pallate && pallate.appNavbarInputButton,
                            styleAppNavbarInputButtonHover: pallate && pallate.appNavbarInputButtonHover,
                            styleAppNavbarBurger: pallate && pallate.appNavbarBurger,
                            styleBurgerCollapsedPspan: pallate && pallate.burgerCollapsedPspan,
                            styleBurgerCollapsedPspanArrow: pallate && pallate.burgerCollapsedPspanArrow
                        }}
                    />

                    <h1>Koleksi Page</h1>
            </div>
        </>
    )
};

export default KoleksiPage;