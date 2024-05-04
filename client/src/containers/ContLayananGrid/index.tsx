import { useContext, useEffect, useState } from "react";
import globalStates from "../../utils/global";
import "./ContLayananGrid.css";


const ContLayananGrid = () =>{

    const [isHover, setIsHover] = useState(false);
    const [bookingState, setBookingState] = useState({} as any)
    // console.log({isHover, bookingState})

    const handleMouseEnter = ({name}:any) =>{
        setIsHover(true);
        if(name){
             setBookingState((prev:any) =>{
            const temp = {} as any;
            temp[name] = "request now";
            return {...prev, ...temp}
        })
        }
       
    };
    const handleMouseLeave = ({name}:any) =>{
        setIsHover(false);
        if(name){
            setBookingState((prev:any) =>{
            const temp = {} as any;
            temp[name] = name;
            return {...prev, ...temp}
        })
        }
        
    };

    const data = [
        {
            paket: "Premium", 
            price: "Rp. 1.200.000,-",
            desc: "Desain web premium dengan fitur-fitur web standard. (Max. 8 Webpages)",
            fitur: [
                "8 Pages",
                "gratis domain .com",
                "SEO-friendly web desain",
                "perpanjangan setiap tahun, 500rb/tahun",
                "statistik kunjungan",
                "respon server rata-rata dalam milisecond",
                "unlimitied bandwith",
                "free support",
                "free SSL",
                "garansi selamanya"
            ]
        },
        {
            paket: "Premium Plus", 
            price: "Rp. 1.400.000,-",
            desc: "Desain web premium untuk kebutuhan fitur dan halaman web yang lebih banyak. (Max. 10 Webages)",
            fitur:  [
                "10 Pages",
                "gratis domain .com",
                "SEO-friendly web desain",
                "perpanjangan setiap tahun, 500rb/tahun",
                "statistik kunjungan",
                "respon server rata-rata dalam milisecond",
                "unlimitied bandwith",
                "free support",
                "free SSL",
                "garansi selamanya"
            ]
        },
        {
            paket: "Ultra Premium", 
            price: "Rp. 2.200.000,-",
            desc: "Desain web premium untuk kebutuhan online presence banyak konten fitur dan halaman. (Max. 20 Pages)",
            fitur:  [
                "20 Pages",
                "gratis domain .com",
                "SEO-friendly web desain",
                "perpanjangan setiap tahun, 500rb/tahun",
                "statistik kunjungan",
                "respon server rata-rata dalam milisecond",
                "unlimitied bandwith",
                "free support",
                "free SSL",
                "garansi selamanya"
            ]
        }
    ]

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = (globalContext && globalContext.windowWidthClass) || "";

    useEffect(()=>{
        data.map((paketGroup:any, index:any)=>{
            const {paket} = paketGroup;
            const name = paket;
            if(name){
            setBookingState((prev:any) =>{
            const temp = {} as any;
            temp[name] = name;
            return {...prev, ...temp}
        })
        }
        })
    }, [])
    return(
        <>
            <div className={`${windowWidthClass}-cont-layanan-grid`}>
                {
                    data ? data.map((paketGroup:any, index:any)=>{
                        const {paket, price, desc, fitur} = paketGroup;
                        return (
                            <div key={index+paket} className="wrapper-item">
                                <p className="booking"
                                    onMouseEnter={()=>handleMouseEnter({name:paket})}  onMouseLeave={()=>handleMouseLeave({name:paket})}
                                >{bookingState[paket]}</p>
                                <h3
                                    onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}
                                >{paket}</h3>
                                <h4
                                    onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}
                                >{price}</h4>
                                <p 
                                    onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}
                                    className="paket-desc">{desc}</p>

                                <div className="paket-fitur" >
                                    {
                                        fitur ? 
                                        fitur.map((fiturDesc:any, index:any)=>{
                                           return <p key={fiturDesc+index}>{fiturDesc}</p>
                                        })
                                        : null
                                    }
                                </div>
                                
                            </div>
                        )
                    }) : null
                }
                
            </div>
        </>
    )
};

export default ContLayananGrid;