import React from "react";
import HangmanBtn from "./hangmanBtn";

//This component is a button for each level
//Future development of diasbling when clicked will be through here
function LetterBtns(props) {
    return (
        <div>
          
            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="a"
            name="a"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="b"
            name="b"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="c"
            name="c"
          />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="d"
            name="d"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="e"
            name="e"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="f"
            name="f"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="g"
            name="g"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="h"
            name="h"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="i"
            name="i"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="j"
            name="j"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="k"
            name="k"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="l"
            name="l"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="m"
            name="m"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="n"
            name="n"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="o"
            name="o"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="p"
            name="p"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="q"
            name="q"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="r"
            name="r"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="s"
            name="s"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="t"
            name="t"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="u"
            name="u"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="v"
            name="v"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="w"
            name="w"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="x"
            name="x"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="y"
            name="y"
            />

            <HangmanBtn
            onClick={props.handleBtnClick}
            data-value="z"
            name="z"
            />
        </div>
      );
}

export default LetterBtns;