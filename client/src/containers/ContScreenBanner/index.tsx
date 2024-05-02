import "./ContScreenBanner.css";
import globalStates from "../../utils/global";
import { useContext, useEffect, useState } from "react";


const ContScreenBanner = ({styles}:any) =>{
    const bikininBlank = ["website", "app", "e-invite", "e-commerce"];

    const [alternateCountDown, setAlternateCountDown]= useState(3);
    const [dynamicBlank, setDynamicBlank] = useState("website");

    const styleComponentBanner = styles && styles.styleComponentBanner || {};
    const styleBannerBlank = styles && styles.styleBannerBlank || {};
    const styleBannerBlankMobile = styles && styles.styleBannerBlankMobile || {};

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

    useEffect(()=>{
       
        const intervalId = setInterval(()=>{
            const newCountDown = +alternateCountDown - 1;
            // console.log(newCountDown, alternateCountDown)
            // setDynamicBlank(`${newCountDown}_${alternateCountDown}`)
            // setAlternateCountDown(newCountDown)

            if(newCountDown < 0){
                const newBlank = bikininBlank[3];
                setDynamicBlank(newBlank)
                setAlternateCountDown(3);
                // console.log("reset", newBlank)
            } else {
                const newBlank = bikininBlank[+newCountDown];
                setDynamicBlank(newBlank);
                // console.log("countdown", newBlank)
                 setAlternateCountDown(newCountDown)
            }
            

        }, 6000)
        return () => clearInterval(intervalId);
    }, [dynamicBlank])
    return(
        <>
            <div className={`${windowWidthClass}-section-screen-banner`} style={styleComponentBanner}>
                <h2>bikinin</h2>
                <div style={(windowWidthClass === "w-mob" ? styleBannerBlankMobile : styleBannerBlank)}>
                    <p>{dynamicBlank}</p>
                    {/* <p className={`w-pc-blank-` + (+alternateCountDown===4 ? alternateCountDown:"")}>website</p>
                    <p className={`w-pc-blank-`+ (+alternateCountDown===4 ? alternateCountDown:"")}>app</p>
                    <p className={`w-pc-blank-`+ (+alternateCountDown===4 ? alternateCountDown:"")}>e-invite</p>
                    <p className={`w-pc-blank-`+ (+alternateCountDown===4? alternateCountDown:"")}>e-commerce</p> */}
                </div>
                
            </div>
        </>
    )
};

export default ContScreenBanner;