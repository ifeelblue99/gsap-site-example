gsap.fromTo("#home-info", 
    {width: 0, height: 0, opacity:.1}, 
    {duration: 2, width: 200, height: 100, opacity:1
});

gsap.registerPlugin(ScrollTrigger )

gsap.to("#sq-1", {
    duration: 2, 
    ease: "bounce.out", 
    x: 300,
    scrollTrigger: {
        toggleActions: "restart resume resume reverse",
        //          on: enter leave back leave
        //  play pause  resume reverse restart reset complete none
        trigger: "#sq-1",
        start: "top 60%",
        end: "top 40%",
        toggleClass: "circle",
        markers:true
    }
});

gsap.from("#sq-2", {
    duration: 3, 
    x: 300, 
    ease: "elastic.out(1, 0.3)",
    opacity: 0, 
    scale: 0.5,
    scrollTrigger: {
        toggleActions: "restart resume resume reverse",
        markers:true,
        trigger: "#sq-2",
        start: "top 60%",
        end: "top 40%",
    }
});