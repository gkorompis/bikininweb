import { useContext, useEffect, useState } from "react";
import globalStates from "../../utils/global";
import "./CompanyServiceTray.css";
import { Obat4, Obat5, Obat6, ServiceDoctor, ServicePerson, ServiceRisk } from "../../assets/photos";

const serviceData = [
    {
        name: "Risk Screening",
        imgSrc: ServiceRisk,
        description: "Service starts with a detailed evaluation of your medical history, lifestyle factors, and genetic predispositions. Using advanced algorithms and medical expertise, we tailor our screening process to your unique profile, ensuring accuracy and relevance."
    },
    {
        name: "Personalized Medicine",
        imgSrc: ServicePerson,
        description: "Personalized medicine service is revolutionizing healthcare by tailoring treatment plans to your unique genetic makeup, lifestyle factors, and medical history."
    },
    {
        name: "Consultation",
        imgSrc: ServiceDoctor,
        description: "Doctor consultation service is designed to provide you with seamless access to top-tier medical expertise from the comfort of your own home."
    }
]


const CompanyServiceTray = () =>{

    const [scrolled, setScrolled] = useState(false);;

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass
    
    useEffect(()=>{
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrolled(scrolled);  
        };

        return()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    return(
        <>
            <div className={`${windowWidthClass}-company-service-tray`}>
                <img src={Obat5} />

                <div className="tray-wrapper">
                    <div className="wrapper-text">
                        <h1>Services</h1>
                    </div>
                    <div className="wrapper-grid">
                        {/* <div className="grid-item">
                            <div className="tray-box">
                                <div>
                                    <img src={ServiceRisk}/>
                                </div>
                                <div>
                                    <h1>
                                        Service Risk
                                    </h1>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="tray-box">
                                <div>
                                    <img src={ServiceDoctor}/>
                                </div>
                                <div>
                                    <h1>

                                    </h1>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="tray-box">
                                <div>
                                    <img src={ServicePerson}/>
                                </div>
                                <div>
                                    <h1>

                                    </h1>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div> */}
                        {
                            serviceData.map((service:any, index:any)=>{
                                const {name, imgSrc, description } = service;
                                return(
                                    <div key={index} className="grid-item">
                                        <div className="tray-box">
                                            <div className="tray-box-img">
                                                <img src={imgSrc}/>
                                            </div>
                                            <div className="tray-box-title">
                                                <h4>
                                                    {name}
                                                </h4>
                                            </div>
                                            <div className="tray-box-text">
                                                <p>     
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                
                {/* company service tray */}
            </div>
        </>
    )
};

export default CompanyServiceTray;