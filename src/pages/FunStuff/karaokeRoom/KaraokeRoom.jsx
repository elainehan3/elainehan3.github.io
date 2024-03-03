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
          <button className="ktv-btn" type="submit">CHECK IT OUT ></button>
        </div>
      </div>
    );
  }
}

export default KaraokeMachine;
