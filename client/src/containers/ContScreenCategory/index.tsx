import {ImgDesignIcon4 } from "../../assets/img";
import "./ContScreenCategory.css";
import globalStates from "../../utils/global";
import { useContext } from "react";
import { CardPreview1, CardPreview2 } from "../../assets/photos";
import { useNavigate } from "react-router-dom";

const ContScreenCategory = ({styles}:any) =>{
    const styleCategoryCardboxItem = (styles && styles.styleCategoryCardboxItem) || {};
     const styleCategoryFontPrimary = (styles && styles.styleCategoryFontPrimary) || {};
    const previewList = [
        {
            desainName: "goods and wears",
            imgSrc: CardPreview1,
            route: "/referensi-design/goods-and-wears"
        },
        {
            desainName: "food and beverages",
            imgSrc: CardPreview2,
            route: "/referensi-design/foods-and-beverages"
        },
        {
            desainName: "music lesson",
            imgSrc: CardPreview1,
            route: "/referensi-design/goods-and-wears"
        }, 
        {
            desainName: "music lesson",
            imgSrc: CardPreview2,
            route: "/referensi-design/foods-and-beverages"
        }
    ]

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

    const navigate = useNavigate();
    const handleDesignCard = (route:string) =>{
        navigate(route);
        window.scrollTo(0, 0);
    }
    return(
        <>
            <section className={`${windowWidthClass}-landing-page-section-screen-category`}>
                <div className={`${windowWidthClass}-section-screen-category ${windowWidthClass}-section-screen-category-title`}>
                    <img className={`${windowWidthClass}-section-category-title-img`} src={ImgDesignIcon4} alt={"colorful cartoon of desktop pc "}/>
                    <h3 className={`${windowWidthClass}-section-category-title-h3`} style={styleCategoryFontPrimary}> Design Previews </h3>
                    <p className={`${windowWidthClass}-section-category-title-p`} style={styleCategoryFontPrimary}>temukan variasi website sesuai cerita kamu. </p>
                    
                     
                </div>  
                <div className={`${windowWidthClass}-section-screen-category ${windowWidthClass}-section-screen-category-cardbox`}>
                    {
                        previewList && previewList.map((preview: any, index: any)=>{
                            const {imgSrc, desainName, route} = preview;
                            return(
                                
                                    <div key={index} className={`${windowWidthClass}-screen-category-cardbox-item`} style={styleCategoryCardboxItem} onClick={()=>handleDesignCard(route)}>
                                        <img src={imgSrc}/>
                                        <p>{desainName}</p>
                                    </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
};

export default ContScreenCategory;