import { useEffect, useState } from "react";
import "./app-navbar.css";

const AppNavbar = () =>{
    const [scrolled, setScrolled] = useState(false);
    console.log(scrolled);
    useEffect(()=>{

        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return ()=>{
             window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <>
            <nav className={"app-navbar " + (scrolled ? "navbar-fixed" : "")} >
                <div>
                    <h1>bikinin</h1>
                </div>
                <div>
                    <div className={scrolled ? "" : "searchbar-centered"}>
                        <input className={"navbar-searchbar " } placeholder="mau bikin website apa?"/>
                        <button className="">cari design</button>
                    </div>
                </div>
                <div>
                    <ul className="app-navbar-ul">
                        <li><a href="/">koleksi design</a></li>
                        <li><a href="/">layanan bikinin</a></li>
                        <li><a href="/">login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default AppNavbar;