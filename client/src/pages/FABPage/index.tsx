import { FABGrid, UniversalNavbarBlur } from "../../containers";
import GAWFooter from "../../containers/GAWFooter";
import "./FABPage.css";

const FABPage = () =>{
    return(
        <>
            <div className={`w-pc-fab-page`}>
                <UniversalNavbarBlur/>
                <FABGrid/>
                <GAWFooter/>
            </div>
        </>
    )
};

export default FABPage;