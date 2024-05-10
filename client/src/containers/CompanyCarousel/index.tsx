import { useContext } from "react";
import globalStates from "../../utils/global";
import "./CompanyCarousel.css";
import { UniversalNavbar2 } from "..";


const CompanyCarousel = ({data}:any) =>{
    const imgSrcs = (data && data.imgSrcs ) || [];
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass
    return(
        <>
            <div className={`${windowWidthClass}-company-carousel`}>
                
                <UniversalNavbar2 data={{
                    title: "Beat Well"
                }}/>
                <img src={imgSrcs[0]}/>
            </div>
        </>
    )
};

export default CompanyCarousel;