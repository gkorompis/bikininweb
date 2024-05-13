import { useContext } from 'react';
import globalStates from '../../utils/global';
import './UniversalFooter.css';
import { IconBack } from '../../assets/img';
import { useNavigate } from 'react-router-dom';

const UniversalFooter = ({data}:any) =>{
    const footerTitle = (data && data.title) || "bikinin";
    const parentStyle = (data && data.parentStyle) || {};
    const navigate = useNavigate();
    
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    const handleBackToWeb = () =>{
        navigate("/referensi-design");
        window.scrollTo(0, 0);
    };

    return(
        <>
            <div className={`${windowWidthClass}-universal-footer`} style={parentStyle}>
                <div className="footer-logo">
                    <h1>{footerTitle}</h1>
                </div>
                <div className="footer-anchors">
                    <div className="anchors-group">
                        <div>
                            <h3>Contacts</h3>
                            <p>whatsapp</p>
                            <p>instagram</p>
                            <p>email</p>
                        </div>
                    </div>
                    <div className="anchors-group">
                        <div>
                            <h3>Collections</h3>
                            <p>Collection 1</p>
                            <p>Collection 2</p>
                            <p>Collection 3</p>   
                            <p>Collection 4</p>  
                        </div>
                                
                    </div>
                    <div className="anchors-group">
                        <div>
                            <h3>Articles</h3>
                            <p>Article 1</p>
                            <p>Article 2</p>
                            <p>Article 3</p>   
                        <p>Article 4</p>  
                        </div>
                        
                    </div>
                    <div className="anchors-group">
                        <div>
                            <h3>Random</h3>
                            <p>Random 1</p>
                            <p>Random 2</p>
                            <p>Random 3</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="floating-button" onClick={handleBackToWeb}>
                <img src={IconBack} alt="floating button back"/>
            </div>
        </>
    )
};

export default UniversalFooter;