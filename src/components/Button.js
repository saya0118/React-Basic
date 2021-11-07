import React, { useEffect, useState } from "react";

// Functional component

export const EdButton = () => {

    // State
    const [ toggle, setToggle] = useState(false);

    // UseEffect
    useEffect(() => {
        console.log("Use Effect")
    }, [toggle]);

    // Any Functions

    const onClick = () => {
        if (toggle === true) {
            setToggle(false);
        } else {
            setToggle(true);
        }

        // setToggle(!toggle)
    }

    return (
        <div className="test">
            {
                toggle === true ?
                <h1 style={{color: 'red'}}>Class</h1> :
                <h1 style={{color: 'green'}}>Class</h1>
            }
            <button className="button" onClick={onClick}>Click</button>
        </div>
    )
}



// Class component

class HughJackmanButton extends React.Component {

    state = {
        data: [],
        toggle: false
    }


    onClick = () => {
        console.log("click");
        // toggle = true;
        this.setState({
            toggle: true
        })
    }


    render () {

        return (
            <div>
                <h1>Class</h1>
                <button className="button" onClick={this.onClick}>Click</button>
            </div>
        )
    }
}
