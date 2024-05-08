import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GoodsWearsPage, KoleksiPage, LandingPage, LayananPage } from './pages';
import globalStates from './utils/global'
import { useEffect, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';



function App() {

  const globalContext = globalStates && globalStates.globalContext as any;
  const [windowWidthClass, setWindowWidthClass] = useState("w-pc");
  const windowSize = useWindowSize() as {width: any, height: any};
  const windowWidth = windowSize && windowSize.width;
  // console.log(">>>root-app", {windowWidth, windowWidthClass})
  useEffect(()=>{
    // console.log(">>>ue-root-app", {windowWidthClass, windowSize, windowWidth}, +windowWidth < 600);
    if(+windowWidth < 769){
      setWindowWidthClass("w-mob");
    }

    else if (+windowWidth < 1025) {
      setWindowWidthClass("w-tab");
    }
    
    else {
      setWindowWidthClass("w-pc");
    }

  }, [windowSize, windowWidth])
  
  return (
    <>
      <globalContext.Provider value={{windowSize, windowWidthClass}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage/>}></Route>
              <Route path="/referensi-design" element={<KoleksiPage/>}></Route>
              <Route path="/referensi-design/goods-and-wears" element={<GoodsWearsPage/>}></Route>
              <Route path="/layanan" element={<LayananPage/>}></Route>
            </Routes>
        </BrowserRouter>
      </globalContext.Provider>
      
    </>
  );
}

export default App;
