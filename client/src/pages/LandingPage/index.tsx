import { useEffect, useState } from "react";
import { AppNavbar } from "../../components";
import "./landing-page.css"

const LandingPage = () => {
        const [isPageReady, setIsPageReady] = useState(false);

        useEffect(()=>{
            const timer = setTimeout(()=>{
                setIsPageReady(true)
            }, 800)
        }, [])
        return(
            <>
                <div className="app-pages page-landing">
                    <AppNavbar/>
                    <div className="page-section banner">

                    </div>
                    <div className={("page-section color-draping") + (isPageReady ? " section-show" : "")}>
                        <h1>color draping</h1>
                        <div className="conveyor">
                            <div className="conveyor-item sliding-content ">
                               
                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                             <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                            <div className="conveyor-item sliding-content ">

                            </div>
                        </div>
                    </div>
                    <div className="page-section collection-carousel">
                        
                    </div>
                </div>
            </>
        )
};

export default LandingPage;