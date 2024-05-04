import { useContext } from "react";
import globalStates from "../../utils/global";
import "./ContKoleksiDesignGrid.css";

const ContKoleksiDesignGrid = ({data,styles}:any)  => {
    const collectionDesign = (data && data.collectionDesign) || [];
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    return (
        <div className={"" + `${windowWidthClass}-section-koleksi-design-grid`}>
            <div className="wrapper">
                {
                    collectionDesign.map((item:any, index:any)=>{
                        const {name, imgSrc} = item;
                        return(
                            <div className="wrapper-item">
                                <section className="design-card">
                                    
                                    <img src={imgSrc}/>
                                    <h4>{name}</h4>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ContKoleksiDesignGrid;