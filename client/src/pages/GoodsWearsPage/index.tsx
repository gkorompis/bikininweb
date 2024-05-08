
import { useContext, useEffect, useState } from "react";
import { ImgBannerGaw, ImgBannerGaw3, ImgBannerGaw4, ImgBannerGaw6, MImgBannerGaw3 } from "../../assets/photos";
import { ContFooter, UniversalNavbarBlur } from "../../containers";
import "./GoodsWearsPage.css";
import globalStates from "../../utils/global";

const GoodsWearsPage = () =>{
    const [scrolled, setScrolled] = useState(false);

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    useEffect(()=>{
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);  
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${windowWidthClass}-goods-wears-page`}>
            {/* <section className={`${windowWidthClass}-goods-wears-page-navbar`}>
                    <h1>lorem ipsum</h1>
            </section> */}
            
            <section className={`${windowWidthClass}-goods-wears-page-banner`}>
                
                <div className="banner-section-img">
                    {/* <img src={ImgBannerGaw3}/> */}
                    <img src={(windowWidthClass==="w-pc" || windowWidthClass==="w-tab") ? ImgBannerGaw3 : MImgBannerGaw3}/>
                </div>
                <UniversalNavbarBlur/>
                <div className={"banner-section-content"}>
                    <div className={"content-wrapper" + ` ${scrolled ? "bg-less": " "}` + `  ${scrolled ? "child-text": ""}`}>
                         <h1>
                            Allison Wears
                        </h1>
                        <h3>
                            Summer 2024 Collection
                        </h3>
                    </div>
                </div> 
            </section>
            <section className={`${windowWidthClass}-goods-wears-page-banner`}>
                <div className="banner-section-img">
                    <img src={ImgBannerGaw6}/>
                </div>
                <div className="banner-section-content">
                    <div className={"content-wrapper-screen2" + ` ${scrolled ? "bg-less": " "}`}>
                        <h3>
                            Minimalist Photographies
                        </h3>
                         <p>
                            This template focuses on your products, showcased as aesthatics photographies, while keeping the copywriting minimum but descriptive.
                        </p>
                        
                    </div>
                </div>
            </section>
        </div>
    )
};

export default GoodsWearsPage;