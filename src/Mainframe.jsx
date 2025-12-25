import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "./Header";
import MyHikingMap from "./MyHikingMap";

function Mainframe(){

    const reference = "https://www.habitatauthority.org/";
    const choices = [ 
        {   name: "Powder Canyon Loop Trail",
            file: "PowderCanyonLoop.csv",
            pos: {lat: 33.96596342774215,lng: -117.9177018324779}, //33.96596342774215, -117.9177018324779
            alltrails: "https://www.alltrails.com/trail/us/california/powder-canyon-loop-trail?u=i&sh=sqfqqm"
        },
    ];
    const [selectedOption, setSelectedOption] = useState(0); // Initial selected option

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return <>
        <Header title={"Puente Hills Preserve"} reference={reference}/>
        <Stack spacing={1} direction="row">
        {
            choices.map((item, index) => {
            return <Button key={index} value={index} variant={selectedOption==(index) ? "contained" : "outlined"} onClick={handleChange}>{item.name}</Button>
            })
        }
        </Stack>
        <hr></hr>
        <MyHikingMap csv={choices[selectedOption].file} mark={choices[selectedOption].pos}/>
        <hr></hr>
        <h4><a href={choices[selectedOption].alltrails}>More on Alltrails ...</a></h4>
        <p><a href="https://kcfamilyjourney.github.io/home/">Home</a> | <a href="https://forms.gle/ErqZysKrBFxnL5SV7">Contact Us</a></p>
    </>;
}

export default Mainframe;