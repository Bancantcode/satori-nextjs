'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import './styles.scss'

export default function PageReveal() {
  
  useEffect(() => {

    const isMobile = window.innerWidth <= 767;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

    const tl = gsap.timeline({ delay: 0.5 });

    if(isMobile) {
      gsap.set(".img", { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 0, opacity: 0 });
      gsap.set(".loader_imgs", { x: 0, opacity: 0 });

      tl.to(".loader_imgs", { opacity: 1, duration: 0 })
        .to(".img", { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.8, stagger: 0.1, ease: "power3.inOut", opacity: 1 })
        .to(".loader_imgs", { x: 0, duration: 3, ease: "power3.inOut" }, "-=2.5")
        .to(".img:not(#loader-logo)", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1, ease: "power3.inOut" }, "-=1")
        .to(".loader", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1.2, ease: "power3.inOut" }, "-=0.5");
    }
    else if(isTablet) {
      gsap.set(".img", { y: 250, opacity: 0 });
      gsap.set(".loader_imgs", { x: 300, opacity: 0 });

      tl.to(".loader_imgs", { opacity: 1, duration: 0 })
        .to(".img", { y: 0, duration: 0.7, stagger: 0.10, ease: "power3.inOut", opacity: 1 })
        .to(".loader_imgs", { x: 0, duration: 3, ease: "power3.inOut" }, "-=2.5")
        .to(".img:not(#loader-logo)", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 0.7, ease: "power3.inOut" }, "-=1")
        .to(".loader", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 0.8, ease: "power3.inOut" }, "-=0.5");
    }
    else {
      gsap.set(".img", { y: 550, opacity: 0 });
      gsap.set(".loader_imgs", { x: 500, opacity: 0 });

      tl.to(".loader_imgs", { opacity: 1, duration: 0 })
        .to(".img", { y: 0, duration: 0.7, stagger: 0.10, ease: "power3.inOut", opacity: 1 })
        .to(".loader_imgs", { x: 0, duration: 3, ease: "power3.inOut" }, "-=2.5")
        .to(".img:not(#loader-logo)", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 0.7, ease: "power3.inOut" }, "-=1")
        .to(".loader", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 0.8, ease: "power3.inOut" }, "-=0.5");
    }
  }, []);

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
