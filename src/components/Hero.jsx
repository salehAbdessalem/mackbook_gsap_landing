import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef()

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    })
  return (
    <section id="hero">
        <div>
            <h1 className='text-center'>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button>
        <p>$1559 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero