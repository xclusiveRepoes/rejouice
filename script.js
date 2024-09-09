function logoAnim(){
    let text = document.querySelectorAll(".logoText h1 span");
    gsap.from(text,{
        y: 100,
        opacity: 0,
        duration: 1,
        delay: .5,
        stagger: .1
    })
}
logoAnim()


function smoothScroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
smoothScroll()




function navTop(){
    var navTop = document.querySelector(" .navTop");
    var button = document.querySelector(".menu");
    var tl = gsap.timeline();
    var i = 0
    tl.to(navTop,{
        top: 0,
        height: `${60}vh`
    })
    tl.from(".navRight .navP, .navRight button",{
        y:50,
        opacity: 0,
        stagger: .1
    },"a")
    tl.from(".navLeft video, .navLeft p",{
        scale:0,
        stagger: .1
    }, "a")
    tl.pause();
    button.addEventListener("click",function(){
        i++;
        if(i%2!=0){
            setTimeout(function(){
                button.innerHTML = "";
                button.innerHTML = "Close"
            },500)
            tl.play();
        }
        else{tl.reverse()
            setTimeout(function(){
                button.innerHTML = "";
                button.innerHTML = "Menu"
            },500)
        }
    })
}
navTop();

function circle(){
    var page1 = document.querySelector(".page1");
    var circle = document.querySelector(".circle");
    var navTop = document.querySelector(".navTop")
    page1.addEventListener("mouseenter", () =>{
        gsap.to(".circle",{
            scale: 1 
        })
        circle.innerHTML = "Play Reel"
    })
    page1.addEventListener("mouseleave", () =>{
        gsap.to(".circle",{
            scale: 0 
        })
        circle.innerHTML = ""
    })
    page1.addEventListener("mousemove", (dets) =>{
        gsap.to(".circle",{
            x: dets.x-90,
            y: dets.y-90
        })
    })
    navTop.addEventListener("mouseenter",() =>{
        gsap.to(circle,{
            scale: 0
        })
    })
}
circle();

function page2Animation(){
    gsap.from(".top2 p, .bottom2 p span",{
        y: 100,
        duration: 2,
        stagger: .5,
        delay: 1,
        opacity: 0,
        scrollTrigger:{
            trigger: ".page2",
            scroller:".main",
            // markers: true,
            scrub: 2,
            end: "top 20%",
            start: "top 70%"
        }
    })
}
page2Animation()

function hoverAnim(){
    var bottom  = document.querySelector(".bottom3");
    bottom.addEventListener("mouseenter", function(){
        bottom.removeAttribute("id")
    })
    bottom.addEventListener("mouseleave", function(){
        bottom.setAttribute("id", "hov")
    })
}
hoverAnim();

function page3Anim(){
    gsap.from(".bottom3 h1",{
        y: 100,
        opacity: 0,
        stagger: .1,
        scrollTrigger:{
            trigger: ".page3",
            scroller: ".main",
            // markers: true,
            scrub: 2,
            end: "top 20%",
            start: "top 80%"
        }
    })
}
page3Anim()


function page5Anim(){
    gsap.from(".top5 ,.bottom5 h1 span",{
        y: 100,
        stagger: .1,
        opacity: 0,
        scrollTrigger:{
            trigger:".page5",
            scroller: ".main",
            // markers: true,
            scrub: 2,
            top: "top 10%",
            end: "top 10%"
        }
    })
}
page5Anim()

function page4Img(){
    // var img = document.querySelector(".box4 img, .box4 video");
    gsap.from(".box4 img, .box4 video", {
        scale: 0,
        duration: .4, 
        scrollTrigger:{
            trigger: ".page4",
            scroller: ".main",
            scrub: 2,
            end: "top 20%"
        }
    })
}
page4Img();

function page6Circle(){
    var page6 = document.querySelector(".page6");
    var circle = document.querySelector(".circle")
    page6.addEventListener("mouseenter", () =>{
        gsap.to(".circle",{
            scale: 1,
        })
        circle.innerHTML = "take one"
    })
    page6.addEventListener("mouseleave", () =>{
        gsap.to(".circle",{
            scale: 0
        })
        circle.innerHTML = ""
    })
    page6.addEventListener("mousemove",(dets) =>{
        gsap.to(".circle",{
            x: dets.x -90,
            y: dets.y -90
        })
    })
}
page6Circle();

function page7Anim(){
    gsap.from(".top7 ,.bottom7 p span",{
        y: 100,
        stagger: .1,
        opacity: 0,
        scrollTrigger:{
            trigger:".page7",
            scroller: ".main",
            // markers: true,
            scrub: 2,
            top: "top 10%",
            end: "top 10%"
        }
    })
}
page7Anim()

function p9(){
    var p9 = document.querySelector(".hovAnim");
    p9.addEventListener("mouseenter", () =>{
        p9.removeAttribute("id");
    })
    p9.addEventListener("mouseleave", () =>{
        p9.setAttribute("id", "p9")
    })
}
p9();

function footerH(){
    gsap.from(" .bottomF h1 span",{
        y: -400,
        stagger: .2,
        duration: 2,
        scrollTrigger:{
            trigger: ".footer",
            scroller: " .main",
            scrub: 2,
            // markers: true,
            start: "top 90%",
            end: "top 0%"
        }
    })
}
footerH()