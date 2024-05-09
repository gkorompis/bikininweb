import { FABGrid, UniversalFooter, UniversalNavbarBlur, UniversalNavbars } from "../../containers";
import GAWFooter from "../../containers/GAWFooter";
import "./FABPage.css";

const FABPage = () =>{
    
    return(
        <>
            <div className={`w-pc-fab-page`}>
                {/* <UniversalNavbarBlur/> */}
                <UniversalNavbars
                    data={{
                        title: "pâtisseries"
                    }}
                />
                <FABGrid/>
                {/* <GAWFooter/> */}
                <UniversalFooter
                    data={{
                        title: "pâtisseries"
                    }} 
                />
            </div>
        </>
    )
};

export default FABPage;