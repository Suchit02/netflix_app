import React from "react";
import Netflix from './Cards';
import './index.css';
import Sdata from './Sdata';



function App (){
     return (
        <>
        <div className="heading">
        <h1> List Of Top Netflix Shows in 2020</h1> </div>
        <div className="main">
            <Netflix imgsrc={Sdata[0].imgsrc}
            Title={Sdata[0].Title}
            Viwe={Sdata[0].Viwe}
            link={Sdata[0].link}
            SubTitle={Sdata[0].SubTitle}
            />
           <Netflix imgsrc={Sdata[1].imgsrc}
            Title={Sdata[1].Title}
            Viwe={Sdata[1].Viwe}
            link={Sdata[1].link}
            SubTitle={Sdata[1].SubTitle}
            />
           <Netflix imgsrc={Sdata[2].imgsrc}
            Title={Sdata[2].Title}
            Viwe={Sdata[2].Viwe}
            link={Sdata[2].link}
            SubTitle={Sdata[2].SubTitle}
            />

<Netflix imgsrc={Sdata[3].imgsrc}
            Title={Sdata[3].Title}
            Viwe={Sdata[3].Viwe}
            link={Sdata[3].link}
            SubTitle={Sdata[3].SubTitle}
            />
            </div>
        </>
     )

}
export default App;