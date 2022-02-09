import React, { useState } from "react";
import { useLocation } from "react-router";
import { Image, Input } from "semantic-ui-react";

function TimeSelector({ filterRecipes }) {

    const location = useLocation().pathname;

    const [ short, setShort ] = useState("not-active")
    const [ medium, setMedium ] = useState("not-active")
    const [ long, setLong ] = useState("not-active")
    const [ all, setAll ] = useState("active")
    const [ keyword, setKeyword ] = useState("")
    const [ time, setTime ] = useState("all")

    function changeTime(e) {
        setTime(e.target.name)
        filterRecipes(e.target.name, keyword)
        if (e.target.name === "0") {
            setShort("active")
            setMedium("not-active")
            setLong("not-active")
            setAll("not-active")
        } else if (e.target.name === "21") {
            setShort("not-active")
            setMedium("active")
            setLong("not-active")
            setAll("not-active")
        } else if (e.target.name === "41") {
            setShort("not-active")
            setMedium("not-active")
            setLong("active")
            setAll("not-active")
        } else {
            setShort("not-active")
            setMedium("not-active")
            setLong("not-active")
            setAll("active")
        }
    }

    function handleInput(e) {
        setKeyword(e.target.value)
        filterRecipes(time, e.target.value)
    }

    return(
        <div style={{textAlign: "center"}}>
            <Image.Group centered>
                <Image src='https://i.imgur.com/faF3j6Q.png' size='tiny' circular name="0" className={short} onClick={changeTime} />
                <Image src='https://i.imgur.com/VSDVccy.png' size='tiny' circular name="21" className={medium} onClick={changeTime}/>
                <Image src='https://i.imgur.com/u5moXWk.png' size='tiny' circular name="41" className={long} onClick={changeTime} />
                <Image src='https://i.imgur.com/8b4J3XK.png' size='tiny' circular name="all" className={all} onClick={changeTime} />
            </Image.Group>
            <Input icon='search' placeholder='Search...' onChange={handleInput} />
            <br />
            <br />
        </div>
    )
}

export default TimeSelector;