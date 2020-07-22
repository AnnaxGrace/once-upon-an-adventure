import React from "react";
import "./ComingSoon.css";
import { Link, useParams } from "react-router-dom";

const styles = {
    over: {
        backgroundColor: "black",

    },
    text: {
        color: "red"
    }
}

function ComingSoon() {

    const { id } = useParams();
console.log(id)
    const handleClick = event => console.log(event);

    return (
        <div className="cs text-center" style={styles.over}>
            <p style={styles.text}>
                GAME OVER...
            </p>
            <Link to={"/new/" + id}>
                <button className="btn" onClick={handleClick}>
                    Start a New Adventure!
                </button>
            </Link>
        </div>
    )
}

export default ComingSoon;