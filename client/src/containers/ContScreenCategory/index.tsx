import {ImgDesignIcon4 } from "../../assets/img";
import "./ContScreenCategory.css";
import globalStates from "../../utils/global";
import { useContext } from "react";
import { CardPreview1, CardPreview2 } from "../../assets/photos";

const ContScreenCategory = ({styles}:any) =>{
    const styleCategoryCardboxItem = (styles && styles.styleCategoryCardboxItem) || {};
     const styleCategoryFontPrimary = (styles && styles.styleCategoryFontPrimary) || {};
    const previewList = [
        {
            desainName: "goods and wears",
            imgSrc: CardPreview1
        },
        {
            desainName: "food and beverages",
            imgSrc: CardPreview2
        },
        {
            desainName: "music lesson",
            imgSrc: CardPreview1
        }, 
        {
            desainName: "music lesson",
            imgSrc: CardPreview2
        }
    ]

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

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
                            const {imgSrc, desainName} = preview;
                            return(
                                
                                    <div key={index} className={`${windowWidthClass}-screen-category-cardbox-item`} style={styleCategoryCardboxItem}>
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