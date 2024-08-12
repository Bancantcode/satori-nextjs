'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import './styles.scss'

export default function PageReveal() {
  
  useEffect(() => {
    gsap.set(".img", { y: 550 })
    gsap.set(".loader_imgs", { x: 500 })

    const tl = gsap.timeline({ delay: 0.5 })
    tl
    .to(".img", { y: 0, duration: 1, stagger: 0.05, ease: "power3.inOut", })
    .to(".loader_imgs", { x: 0, duration: 3, ease: "power3.inOut" }, "-=2.5")
    .to(".img:not(#loader-logo)", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1, stagger: 0.1, ease: "power3.inOut", }, "-=1")
    .to(".loader", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1, ease: "power3.inOut", }, "-=0.5")
  })

  return (
     <div className="loader">
      <div className="loader_imgs">
        <div className="img">
          <Image className="image" src="/images/about_filter.png" alt="loader" width={500} height={300} priority/>
        </div>
        <div className="img">
          <Image 
            className="image" src="/images/about_image1.png" alt="loader" width={500} height={300} />
        </div>
        <div className="img">
          <Image className="image" src="/images/about_image4.png" alt="loader" width={500} height={300} />
        </div>
        <div className="img" id="loader-logo">
          <Image className="image" src="/images/about_filter.png" alt="loader" width={500} height={300}/>
        </div>
        <div className="img">
          <Image className="image" src="/images/about_milk.png" alt="loader" width={500} height={300} />
        </div>
        <div className="img">
          <Image className="image" src="/images/home_image3.png" alt="loader" width={500} height={300} />
        </div>
        <div className="img">
          <Image className="image" src="/images/main_moreInformation1.png" alt="loader" width={500} height={300} />
        </div>
      </div>
     </div>

     /* website content here */

  );
}
