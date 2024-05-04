import { useContext, useEffect, useState } from "react";
import globalStates from "../../utils/global";
import "./LayananPage.css";
import { AppNavbarOther } from "../../components";
import { ContFooter, ContLayananBanner, ContLayananGrid } from "../../containers";

const drapeColors = (palatteObject:any) =>{
    const {body} = palatteObject || {};
    document.body.style.backgroundColor = body && body.backgroundColor;
};  

const LayananPage = () =>{
    const pallateObject = globalStates && globalStates.globalPallateObject as any;
    const defaultPallate = (pallateObject && pallateObject["bikinin"]) || {};
    const [pallate, setPallate] = useState(defaultPallate);
    const [scrolled, setScrolled] = useState(false);;

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

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

    return (
        <>
            <div className={`${windowWidthClass}-cont-layanan-page`}>
                <AppNavbarOther
                        styles ={{
                            styleAppNavbarOther: pallate && pallate.appNavbar,
                            styleAppNavbarOtherFixed: pallate && pallate.appNavbarFixed,
                            styleAppNavbarOtherInput: pallate && pallate.appNavbarInput,
                            styleAppNavbarOtherInputCentered: pallate && pallate.appNavbarInputCentered,
                            styleAppNavbarOtherInputPlaceholder: pallate && pallate.appNavbarInputPlaceholder,
                            styleAppNavbarOtherTitle: pallate && pallate.appNavbarTitle,
                            styleAppNavbarOtherAnchors: pallate && pallate.appNavbarAnchors,
                            styleAppNavbarOtherInputButton: pallate && pallate.appNavbarInputButton,
                            styleAppNavbarOtherInputButtonHover: pallate && pallate.appNavbarInputButtonHover,
                            styleAppNavbarOtherBurger: pallate && pallate.appNavbarBurger,
                            styleBurgerCollapsedPspan: pallate && pallate.burgerCollapsedPspan,
                            styleBurgerCollapsedPspanArrow: pallate && pallate.burgerCollapsedPspanArrow
                        }}
                    />
                <ContLayananBanner/>
                <ContLayananGrid/>
                <ContFooter styles={{
                    styleComponentBanner: pallate && pallate.componentBanner
                }}/>
            </div>
        </>
    )
};

export default LayananPage;