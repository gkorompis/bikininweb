import { useContext } from "react";
import globalStates from "../../utils/global";
import "./ContKoleksiBanner.css";


const ContLayananBanner = () =>{
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    return(
        <>
            <div className={"" + `${windowWidthClass}-cont-koleksi-banner`}>
                <h2>paket layanan</h2>
                <div className={"" + (windowWidthClass === "w-mob" ? "wrap-text-col" : "wrap-text-row")}>
                    <p>rincian paket fitur dan harga layanan bikinin</p>
                    <h1>website</h1>
                </div>
                
            </div>
        </>
    )
};

export default ContLayananBanner;