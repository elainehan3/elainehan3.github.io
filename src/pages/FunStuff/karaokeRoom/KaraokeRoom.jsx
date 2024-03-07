import React, { Component } from 'react';
import './karaokeroom.scss';

class KaraokeMachine extends Component {

  render() {
    return (
      <div className="ktv" id="ktv">
        <div className="ktv-wrapper-all">
          <div className="ktv-head">
            <header role="banner" className="ktv-title">
              <img src="assets/microphone.webp" alt="" />
              <h2>KARAOKE ROOM</h2>
            </header>
            <span className="descrip">A web karaoke machine!</span>
          </div>
          <a  href="https://elainehan3.github.io/karaoke-room"><button className="ktv-btn" >CHECK IT OUT ></button></a>
        </div>
      </div>
    );
  }
}

export default KaraokeMachine;
