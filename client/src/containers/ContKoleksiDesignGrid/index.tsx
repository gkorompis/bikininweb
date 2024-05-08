import { useContext } from "react";
import globalStates from "../../utils/global";
import "./ContKoleksiDesignGrid.css";
import { useNavigate } from "react-router-dom";

const ContKoleksiDesignGrid = ({data,styles}:any)  => {
    const collectionDesign = (data && data.collectionDesign) || [];
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const navigate = useNavigate();

    const handleDesignCard = (route:string) =>{
        navigate(route);
    }

    return (
        <div className={`${windowWidthClass}-section-koleksi-design-grid`}>
            <div className="wrapper">
                {
                    collectionDesign.map((item:any, index:any)=>{
                        const {name, imgSrc, route} = item;
                        return(
                            <div key={index + name} className="wrapper-item">
                                <section className="design-card" onClick={()=>navigate(route)}>
                                    
                                    <img src={imgSrc} alt={name} />
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