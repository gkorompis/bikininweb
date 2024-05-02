import { useContext, useEffect, useState } from "react";
import { AppNavbar } from "../../components";
import globalStates from "../../utils/global";
import "./landing-page.css";
import { ContScreenCategory, ContScreenStory } from "../../containers";

const drapeColors = (palatteObject:any) =>{
    const {pallateName, body} = palatteObject || {};
    document.body.style.backgroundColor = body && body.backgroundColor;
};  

const LandingPage = () => {
        const pallateHex = globalStates && globalStates.globalPallateHex as any;
        const pallateNames = globalStates && globalStates.golbalPallateNames as any;
        const pallateObject = globalStates && globalStates.globalPallateObject as any;

        const [isPageReady, setIsPageReady] = useState(false);
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
            console.log(">>>ue-landing-page", {defaultPallate}, {pallate});
            const timer = setTimeout(()=>{
                setIsPageReady(true)
                
            }, 800);

            return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
             
        }, [pallate])
        return(
            <>
                <div className="app-pages page-landing">
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
                            styleAppNavbarBurger: pallate && pallate.appNavbarBurger
                        }}
                    />

                    {/* page-section 1 */}
                    <div className={(scrolled ? `${windowWidthClass}-page-section-filler-scrolled` : `${windowWidthClass}-page-section-filler`)}>

                    </div>


                    {/* page-section 2 */}
                    <div className={(" color-draping") + (isPageReady ? " section-show" : "")}>
                        {/* <h1>color draping</h1> */}
                        <div className="conveyor">
                            {
                                pallateNames.map((name:any )=> {
                                    return (
                                        <>
                                            <div>
                                                <div className="conveyor-item sliding-content" onClick={()=>setPallate(pallateObject[name])}>
                                                <p style={pallate && pallate.conveyorItemFontP}>{name}</p>
                                                <div className="hex-layers-wrap" style={pallate && pallate.conveyorItem}>
                                                    <div className="hex-layers layer-1" style={{backgroundColor: pallateHex[name][0]}}></div>
                                                    <div className="hex-layers layer-2" style={{backgroundColor: pallateHex[name][1]}}></div>
                                                    <div className="hex-layers layer-3" style={{backgroundColor: pallateHex[name][2]}}></div>
                                                    <div className="hex-layers layer-4" style={{backgroundColor: pallateHex[name][3]}}></div>
                                                </div>
                                            
                                            </div>

                                            </div>
                                            
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* page-section 3 */}
                    <ContScreenCategory styles={{
                        styleCategoryCardboxItem: pallate && pallate.categoryCardboxItem,
                        styleCategoryFontPrimary: pallate && pallate.categoryFontPrimary
                    }}/>
                    <ContScreenStory styles={{
                        styleCategoryFontPrimary: pallate && pallate.categoryFontPrimary,
                        styleCategoryFontButton: pallate && pallate.categoryFontButton,
                        styleCategoryFontButtonHover: pallate && pallate.categoryFontButtonHover
                    }}/>

                    {/* page-section 4 */}
                     {/* <div className="page-section collection-carousel">
                        <h1 style={pallate && pallate.sectionTitle}>screen 3</h1>
                    </div> */}

                    {/* page-section 5 */}
                    {/* <div className="page-section collection-carousel">
                        <h1 style={pallate && pallate.sectionTitle}>screen 4</h1>
                    </div> */}
                </div>
            </>
        )
};

export default LandingPage;