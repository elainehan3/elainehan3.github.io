import React, { Component, createRef } from 'react';

const globalThis = window;
const { requestAnimationFrame, cancelAnimationFrame } = globalThis;

const confettiDefaultOptions = {
  colors: [
    'darkblue',
    'yellow',
    'coral',
    'lightblue',
    'purple',
    'lightgreen',
    'red'
  ],
  count: 200,
  waveAngle: 0,
  timeout: null,
  gravity: 10,
  windSpeed: 0,
};
class AllConfetti {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.options = {
      ...confettiDefaultOptions,
      ...options
    };
    this.height = 0;
    this.particles = [];
    this.width = 0;
    this.stopConfetti = false;
    this.animationId = null;
  }

  updateAndDrawParticles(context) {
    this.options.waveAngle = this.options.waveAngle + 0.01;
    let x2, y2;
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      particle.tiltAngle += particle.tiltAngleIncrement;
      particle.x = particle.x + Math.sin(particle.tiltAngle) * 2 - this.options.windSpeed;
      particle.y =
        particle.y +
        (Math.cos(this.options.waveAngle) +
          particle.diameter +
          this.options.gravity) *
          0.2;
      particle.tilt = Math.sin(particle.tiltAngle);
      if (
        particle.x > this.width + 20 ||
        particle.x < -20 ||
        particle.y > this.height
      ) {
        if (this.stopConfetti) {
          this.particles.splice(i, 1);
        } else {
          this.setParticle(particle);
        }
      }
 
      context.beginPath();
      context.lineWidth = particle.diameter;
      x2 =
        particle.x - particle.diameter / 3 + particle.tilt * particle.diameter;
      y2 = particle.y + particle.diameter + particle.tilt * particle.diameter;
      context.strokeStyle = particle.color;
      context.moveTo(particle.x, particle.y);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }
  }

  runAnimation(ctx, height, width) {
    ctx.clearRect(0, 0, width, height);
    this.updateAndDrawParticles(ctx);
    this.animationId = requestAnimationFrame(() =>
      this.runAnimation(ctx, height, width)
    );
  }

  setParticle(particle) {
    const randomN = Math.random;
    const colors = this.options.colors;
    particle.color = colors[parseInt(randomN() * colors.length, 10)];
    particle.x = randomN() * this.width;
    particle.y = randomN() * this.height - this.height;
    particle.diameter = randomN() * 6 + 6;
    particle.tilt = randomN() * 10 - 10;
    particle.tiltAngleIncrement = randomN() * 0.07 + 0.05;
    particle.tiltAngle = randomN() * Math.PI;
    return particle;
  }

  startAnimation() {
    cancelAnimationFrame(this.animationId);
    this.stopConfetti = false;
    const context = this.canvas.getContext('2d');
    const { width, height } = this.canvas.getBoundingClientRect();
    if (this.canvas.width !== width || this.canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = globalThis;
      this.canvas.width = width * ratio;
      this.canvas.height = height * ratio;
      context.scale(ratio, ratio);
    }
    this.height = height;
    this.width = width;
    while (this.particles.length < this.options.count) {
      this.particles.push(this.setParticle({}));
    }
    this.runAnimation(context, height, width);
    const { timeout } = this.options;
    if (timeout && Number.isInteger(timeout)) {
      setTimeout(this.stopAnimation.bind(this), timeout);
    }
  }

  stopAnimation() {
    this.stopConfetti = true;
  }

  ummountCanvas() {
    this.particles = [];
    cancelAnimationFrame(this.animationId);
  }
}

class Confetti extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef();
    this.state = {
      canvas: null
    };
  }

  componentDidMount() {
    const canvas = new AllConfetti(
      this.canvasRef.current,
      this.props.options
    );
    if (this.props.streamAnimation === true) {
      canvas.startAnimation();
    }
    this.setState({ canvas });
  }

  componentDidUpdate(prevProps) {
    const { streamAnimation } = this.props;
    if (streamAnimation !== prevProps.streamAnimation) {
      if (streamAnimation) {
        this.state.canvas.startAnimation();
      } else {
        this.state.canvas.stopAnimation();
      }
    }
  }

  componentWillUnmount() {
    this.state.canvas.ummountCanvas();
  }

  render() {
    const { styles } = this.props;
    return (
      <canvas
        ref={this.canvasRef}
        style={{
          height: '100%',
          width: '100%',
          ...styles
        }}
      />
    );
  }
}

export default Confetti;