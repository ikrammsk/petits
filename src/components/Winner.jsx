import React from 'react'
import winnerGif from "../assets/pic/winner.gif"


class Winner extends React.Component {

    render() {
        return (<div className="winner" >
            <p className="pWins">
                <span className="spanP1">Winner</span>Player 1</p>
            <div className="offset-3"
                style={{ background: `url(${winnerGif})`, height: `${500}px`, backgroundRepeat: "no-repeat" }} />
        </div>)

    }
}

export default Winner;