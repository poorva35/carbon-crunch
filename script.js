//  GSAP & ScrollTrigger implemetation
gsap.registerPlugin(ScrollTrigger);
console.log("Script is linked");

const clearAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};


let mm = gsap.matchMedia();

// Desktop: >= 1025px
mm.add("(min-width: 1025px)", () => {
  clearAnimations(); // Remove previous animations

  gsap.to(".box-1", {
    opacity: 1, scale: 1, y: 0, x: 300, duration: 5.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-1",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true 
    }
  });

  gsap.to(".box-2", {
    opacity: 1, scale: 1, y: 0, x: 80, delay: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-2",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-3", {
    opacity: 1, scale: 1, y: 0, x: 250, duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-3",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-4", {
    opacity: 1, y: 0, x: 80, duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-4",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });
});

// Tablet: 768px - 1024px
mm.add("(max-width: 1024px)", () => {
  clearAnimations(); // Remove previous animations

  gsap.to(".box-1", {
    opacity: 1, scale: 1, y: 0, x: 150, duration: 5.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-1",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-2", {
    opacity: 1, scale: 1, y: 0, x: 40, delay: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-2",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-3", {
    opacity: 1, scale: 1, y: 0, x: 120, duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-3",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-4", {
    opacity: 1, y: 0, x: 40, duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-4",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });
});

// Mobile: < 768px
mm.add("(max-width: 767px)", () => {
  clearAnimations(); // Remove previous animations

  gsap.to(".box-1", {
    opacity: 1, scale: 1, y: 0, x: 50, duration: 5.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-1",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-2", {
    opacity: 1, scale: 1, y: 0, x: -20, delay: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-2",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-3", {
    opacity: 1, scale: 1, y: 0, x: 50, duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-3",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });

  gsap.to(".box-4", {
    opacity: 1, y: 0, x: -20, duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-4",
      start: "top center",
      end: "top top",
      scrub: true,
      toggleActions: "play reverse play reverse",
      invalidateOnRefresh: true
    }
  });
});

// cards animation
gsap.utils.toArray(".card").forEach((card) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 2.5,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.03, duration: 0.3, ease: "power1.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});