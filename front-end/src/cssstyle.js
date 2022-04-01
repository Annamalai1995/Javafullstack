import React from "react";

const Style=()=>
{
    //internal styles
    const yet={
        border:'4px',
        borderColor:'yellow',
        borderStyle:'dashed'

    }
    const imgsty={
        width:'600px',
        height:'300px',
        borderRadius:'55px',
        boxShadow:'10px 10px 10px blue'
    }
    const own={
        fontSize:'60px',
        fontFamily:'pink'
    }
    return(
     <>
        <p style={{color:'blue',backgroundColor:'red',textTransform:"uppercase"}}>
        Let me Know
        </p>
        <hr color="blue"/>
        <p Style={own}>Annamalai</p>
        <h1>Bootcamp</h1>
        <ol style={yet}>
            <li>SAm</li>
            <li>Raj</li>
            <li>Kumar</li>
        </ol>
        <div className="row">
        <img src="picture/download.jpg"/>
        <img width="200px" height="200px" src="picture/OOty.jpg"/>
        
        </div>


    </>
    )
}
export default Style