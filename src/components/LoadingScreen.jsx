import React,{useRef,useEffect} from 'react'
import gsap from 'gsap'
const LoadingScreen = ({ onFinish,exitDuration }) => {
  const textRef = useRef();

 useEffect(() => {
  const tl = gsap.timeline({
    onComplete: onFinish,
  });

  tl.fromTo(
    textRef.current,
    {
      scale: 2.5,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
    }
  )
  .to(textRef.current, {
    x: 600,
    rotation: 15,
    scale: 1.4,
    opacity: 0,
    duration: exitDuration,
    ease: 'back.in(2)',
  });

  return () => tl.kill();
}, [onFinish, exitDuration]);


  return (
    <div className="loading-screen">
      <h1 ref={textRef} className="loading-text">Welcome to My Linktree</h1>
    </div>
  );
};

export default LoadingScreen