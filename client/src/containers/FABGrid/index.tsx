import { useContext } from 'react';
import globalStates from '../../utils/global';
import './FABGrid.css';
import { ImgItemFab1, ImgItemFab2, ImgItemFab3, ImgItemFab4, ImgItemFab5, ImgItemFab6, ImgItemFab7 } from '../../assets/photos';


const pastriesList = [
    {
        name: "choco-1",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab1,
        shopName: ""
    },
    {
        name: "choco-2",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab2,
        shopName: ""
    },
    {
        name: "choco-3",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab3,
        shopName: ""
    },
    {
        name: "choco-4",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab4,
        shopName: ""
    },
    {
        name: "choco-5",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab5,
        shopName: ""
    },
    {
        name: "choco-6",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab6,
        shopName: ""
    },
    {
        name: "choco-7",
        desc: "delicious choclate display ala chef",
        price: "IDR 59.024",
        imgSrc: ImgItemFab7,
        shopName: ""
    }

]

const FABGrid = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    return(
        <>
            <div className={`${windowWidthClass}-fab-grid`}>
                {
                    pastriesList.map((x:any, index:any)=>{
                        const {name, desc, imgSrc, shopName, price} = x;
                        return(
                            <div className="fab-grid-item">
                                <div className="fab-card-img">
                                     <img src={imgSrc}/>
                                </div>
                               
                                <div className="fab-card-desc">
                                    <div className="desc-row">
                                        <p className="desc-name">{name}</p>
                                        <p className="desc-price">{price}</p>
                                    </div>
                                    <div className="desc-row">
                                        <p className="desc-details">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default FABGrid;