import { useContext, useState } from "react";
import { ImgFast } from "../../assets/img";
import globalStates from "../../utils/global";
import "./ContScreenStory.css";

const ContScreenStory = ({styles}:any) =>{
    const styleCategoryFontPrimary = styles && styles.styleCategoryFontPrimary;
    const styleCategoryFontButton = styles && styles.styleCategoryFontButton;
    const styleCategoryFontButtonHover = styles && styles. styleCategoryFontButtonHover;

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass

    const [hoverButton, setHoverButton] = useState(false);
    return(<>
        <section className={`${windowWidthClass}-page-section-screen-story`}>
                <div>
                    <h3 style={styleCategoryFontPrimary}>website kamu jadi dalam 10 hari</h3>
                    <div>
                        <h2 style={styleCategoryFontPrimary}>bikinin website?</h2>
                        <p style={hoverButton ? styleCategoryFontButtonHover : styleCategoryFontButton}
                            onMouseOver={(e)=>{e.preventDefault(); setHoverButton(true)}}
                            onMouseLeave={(e)=>{e.preventDefault(); setHoverButton(false)}}
                        > request di sini </p>
                    </div>
                </div>
                <img src={ImgFast} alt ={"clock inside red fire"}/>
        </section>
    </>)
};
export default ContScreenStory;