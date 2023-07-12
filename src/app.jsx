import React from "react";
import Netflix from './Crads';
import './index.css';



function App (){
     return (
        <>
        <div className="main">
            <Netflix imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClMlCwqtTsDHme1QuTD9lFiE_fanAp8fQkQ"
            Title="The Last Kingdom: Seven Kings Must Die"
            Viwe="35.5M Hours View" 
            link="https://www.netflix.com/in/title/81460361"
            SubTitle="Film (Hindi)"
            />
            <Netflix imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XYlKoM300UiFzDhJ5wjeyQ4wnmznp1w99w"
            Title="Hunger"
            Viwe="43.58M Hours View" 
            link="https://www.netflix.com/in/title/81517155"
            SubTitle="Film (Non-English)"/>
            <Netflix imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOy7E9g6LXV0wCQw34747qv2LwY5aVSAVylw"
            Title="The Night Agent"
            Viwe="90.04M Hours View" 
            link="https://www.netflix.com/in/title/81450827"
            SubTitle="TV (English)"/>

            <Netflix imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYbNDp6CjaC4c_qRK-z6xXPzfdjhEWsphSg"
            Title="Money Heist"
            Viwe="105.82M Hours View" 
            link="https://www.netflix.com/in/title/80192098"
            SubTitle="Web Serise (English)"/> 
            </div>
        </>
     )

}
export default App;