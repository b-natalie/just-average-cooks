import React, { useState } from "react";
import { useLocation } from "react-router";
import { Image, Input, Form, Radio } from "semantic-ui-react";

function TimeSelector({ filterRecipes }) {

    // const location = useLocation().pathname;

    const [short, setShort] = useState("not-active")
    const [medium, setMedium] = useState("not-active")
    const [long, setLong] = useState("not-active")
    const [all, setAll] = useState("active")
    const [value, setValue] = useState("1")

    function setTime(e) {
        filterRecipes(e.target.name)
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

    function handleRadioChange(e) {
        console.log(e)
        setValue(e.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Image.Group >
                <Image src='https://i.imgur.com/faF3j6Q.png' size='tiny' circular name="0" className={short} onClick={setTime} />
                <Image src='https://i.imgur.com/VSDVccy.png' size='tiny' circular name="21" className={medium} onClick={setTime} />
                <Image src='https://i.imgur.com/u5moXWk.png' size='tiny' circular name="41" className={long} onClick={setTime} />
                <Image src='https://i.imgur.com/8b4J3XK.png' size='tiny' circular name="all" className={all} onClick={setTime} />
            </Image.Group>
            <p>(minutes)</p>
            <Input icon='search' placeholder='Search...' />
            <br />
            <br />
            {/* <Form.Group inline>
                <label># of ingredients</label>
                <Form.Field
                    control={Radio}
                    label='Any'
                    value='1'
                    checked={value === '1'}
                    onChange={handleRadioChange}
                />
                <Form.Field
                    control={Radio}
                    label='12 or less'
                    value='2'
                    checked={value === '2'}
                    onChange={handleRadioChange}
                />
                <Form.Field
                    control={Radio}
                    label='7 or less'
                    value='3'
                    checked={value === '3'}
                    onChange={handleRadioChange}
                />
            </Form.Group>
            <br />
            <br /> */}
        </div>
    )
}

export default TimeSelector;