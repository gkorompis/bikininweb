import { useContext } from "react";
import globalStates from "../../utils/global";
import "./ContKoleksiBanner.css";


const ContKoleksiBanner = () =>{
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    return(
        <>
            <div className={"" + `${windowWidthClass}-cont-koleksi-banner`}>
                <h2>referensi design</h2>
                <div className={"" + (windowWidthClass === "w-mob" ? "wrap-text-col" : "wrap-text-row")}>
                    <p>kumpulan inspirasi sesuai cerita kamu, versi</p>
                    <h1>bikinin</h1>
                </div>
                
            </div>
        </>
    )
};

export default ContKoleksiBanner;