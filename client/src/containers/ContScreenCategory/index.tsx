import { ImgDesignIcon1, ImgDesignIcon2, ImgDesignIcon3, ImgDesignIcon4 } from "../../assets/img";
import "./ContScreenCategory.css";
import globalStates from "../../utils/global";
import { useContext } from "react";

const ContScreenCategory = () =>{

    const previewList = [
        {
            desainName: "sportswear",
            imgSrc: ""
        },
        {
            desainName: "pastries",
            imgSrc: ""
        },
        {
            desainName: "music lesson",
            imgSrc: ""
        }, 
        {
            desainName: "music lesson",
            imgSrc: ""
        }
    ]

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

    return(
        <>
            <section className={`${windowWidthClass}-landing-page-section-screen-category`}>
                <div className={`${windowWidthClass}-section-screen-category ${windowWidthClass}-section-screen-category-title`}>
                    <img className={`${windowWidthClass}-section-category-title-img`} src={ImgDesignIcon4}/>
                    <h3 className={`${windowWidthClass}-section-category-title-h3`}> Web Previews </h3>
                    <p className={`${windowWidthClass}-section-category-title-p`}>find variation of web design that suits your busines case. </p>
                    
                     
                </div>  
                <div className={`${windowWidthClass}-section-screen-category ${windowWidthClass}-section-screen-category-cardbox`}>
                    {
                        previewList && previewList.map((preview: any, index: any)=>{
                            return(
                                <>
                                    <div className={`${windowWidthClass}-screen-category-cardbox-item`}>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
};

export default ContScreenCategory;