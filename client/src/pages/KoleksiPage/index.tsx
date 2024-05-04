import { useEffect, useState } from "react";
import { AppNavbarOther } from "../../components";
import globalStates from "../../utils/global";
import "./KoleksiPage.css";
import { ContFooter, ContKoleksiBanner, ContKoleksiDesignGrid } from "../../containers";
import { IconBlog, IconEducation, IconFood, IconTravel, IconWear } from "../../assets/img";

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

    const collectionDesign = [
        {
            name: "Goods",
            imgSrc: IconWear
        },
        {
            name: "Food and Beverage",
            imgSrc: IconFood
        },
        {
            name: "Blog and Company Profiles",
            imgSrc: IconBlog
        },
        {
            name: "Education and Training",
            imgSrc: IconEducation
        },
        {
            name: "Tourisms and Travelling",
            imgSrc: IconTravel
        }


    ]

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
                    <ContKoleksiBanner/>
                    <ContKoleksiDesignGrid
                        data={{collectionDesign}}
                        styles={{}}
                    />
                    <ContFooter styles={{
                        styleComponentBanner: pallate && pallate.componentBanner
                    }}/>
                    
            </div>
        </>
    )
};

export default KoleksiPage;