import { useContext } from "react";
import globalStates from "../../utils/global";
import "./UniversalNavbar2.css";

const UniversalNavbars2 = ({data}:any) =>{
    const titleBar = (data && data.title ) || "bikinin2";
    const pages = (data && data.pages) || ["home", "services", "articles", "contacts"]

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return (
        <>
            <nav className={`${windowWidthClass}-universal-navbar-2`}>
                <div className="group-anchors col-1">
                    <h1>
                        {titleBar}
                    </h1>
                </div>
                <div className="group-anchors col-2">
                    {
                        pages.map (
                            (pageName:any, index:any)=>{
                                return(
                                    <p key={pageName+index}>{pageName}</p>
                                )
                            }
                        )
                    }
                </div>
                <div className="group-anchors col-3">
                    
                </div>
            </nav>
        </>
    )
};

export default UniversalNavbars2;