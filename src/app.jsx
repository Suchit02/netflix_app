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
            <Netflix imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClMlCwqtTsDHme1QuTD9lFiE_fanAp8fQkQ"
            Title="The Last Kingdom: Seven Kings Must Die"
            Viwe="35.5M Hours View" 
            link="https://www.netflix.com/in/title/81460361"
            SubTitle="Film (English)"
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