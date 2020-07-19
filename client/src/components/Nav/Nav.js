import React from "react";
import './Nav.css'
// import MusicBtn from "../../components/SoundBtns/MusicBtn"

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-bg">
        <a className="nav-brand special" href="/">
          Once Upon an Adventure
        </a>
      {/* <MusicBtn /> */}
      </nav>
      <p></p>
    </div>
  );
}

export default Nav;

