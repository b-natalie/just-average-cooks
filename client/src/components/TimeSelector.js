import React from "react";
import { useLocation } from "react-router";
import { Image } from "semantic-ui-react";

function TimeSelector({ filterForTime }) {

    const location = useLocation().pathname;

    function setTime(e) {
        filterForTime(e.target.name)
    }

    return(
        <div style={{textAlign: "center"}}>
            <Image.Group centered>
                <Image src='https://i.imgur.com/faF3j6Q.png' size='tiny' circular name="0" onClick={setTime} />
                <Image src='https://i.imgur.com/VSDVccy.png' size='tiny' circular name="21" onClick={setTime}/>
                <Image src='https://i.imgur.com/u5moXWk.png' size='tiny' circular name="41" onClick={setTime} />
                <Image src='https://i.imgur.com/8b4J3XK.png' size='tiny' circular name="all" onClick={setTime} />
            </Image.Group>
        </div>
    )
}

export default TimeSelector;