import "./ContFooter.css"
import globalStates from "../../utils/global";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ContFooterCss = ({styles}:any) =>{
    const navigate = useNavigate()
    const styleComponentBanner = (styles && styles.styleComponentBanner) || {};

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

   const handleFooter = () =>{
        navigate('/referensi-design');
   }
    return (
        <>
            <div className={`${windowWidthClass}-container-footer`} style={styleComponentBanner} onClick={handleFooter}>
                <h3>bikinin</h3>
                <div>
                    <div>
                        <h4>Contacts</h4>
                        <p>whatsapp</p>
                        <p>email</p>
                    </div>
                    <div>
                        <h4>Layanan</h4>
                        <p>bikinin website</p>
                        <p>bikinin webapp</p>
                        <p>bikinin e-invite</p>
                    </div>
                    <div>
                        <h4>Pelajari</h4>
                        <p>website vs webapp</p>
                        <p>SEO optimizations</p>
                        <p>Responsive Design</p>
                        <p>Web hosting & Domain</p>
                    </div>
                    <div>
                        <h4>Kategori</h4>
                        <p>Fashion, Wears, and Sports</p>
                        <p>Food and Beverage</p>
                        <p>Blog and Company Profiles</p>
                        <p>Education and Training</p>
                        <p>Tourism and Entertainment</p>
                        <p>Others</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ContFooterCss;