import { useContext } from 'react';
import './CompanyPage.css';
import globalStates from '../../utils/global';
import { CompanyCarousel, CompanyServiceTray, UniversalFooter } from '../../containers';
import { Obat2 } from '../../assets/photos';

const CompanyPage = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass
    
    const imgSrcs = [
        Obat2
    ] as any;
    return (
        <>
            <div className={`${windowWidthClass}-company-page`}>
                <CompanyCarousel data={{
                    imgSrcs
                }}/>
                <CompanyServiceTray/>
                <UniversalFooter
                    data={{
                        title: "beat well",
                        parentStyle: {
                            backgroundColor: 'black'
                        }
                    }} 
                />
                {/* <img src={Obat1}/> */}
                {/* <UniversalNavbar2 data={{
                    title: "Beat Well"
                }}/> */}
                {/* <p>Healthy heartbeat, welcome new morning</p>
                <p>Know The Symptomps</p>
                <p>Know The Risk</p>
                <p>Consultation</p> */}
            </div>
        </>
    )
};

export default CompanyPage;