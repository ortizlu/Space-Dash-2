import React from 'react'
import './Game.css'
import Overlay from './Overlay'

const styles = {
  backgroundImage: "url('./img/background.jpg')"
}

const GameMain = () => {
  return (
    <section className="splash-screen" style={styles}>
      <Overlay />
    </section>
  );
};

export default GameMain;