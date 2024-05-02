import "./ContScreenBanner.css";
import globalStates from "../../utils/global";
import { useContext } from "react";


const ContScreenBanner = ({styles}:any) =>{
    const styleComponentBanner = styles && styles.styleComponentBanner || {};

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

    return(
        <>
            <div className={`${windowWidthClass}-section-screen-banner`} style={styleComponentBanner}>
                <h2>bikinin</h2>
                <p>web</p>
            </div>
        </>
    )
};

export default ContScreenBanner;