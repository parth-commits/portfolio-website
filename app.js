
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
/*
tl.to('.text-hide', {y: "0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-150%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-150%", duration:1}, "-=1");*/
tl.fromTo('nav', {opacity:0}, {opacity:1, duration: 1});
tl.fromTo('.hello-im-parth', {opacity:0}, {opacity:1, duration: 1}, "-=0.8");



const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
   appearOnScroll
 ){
   entries.forEach(entry => {
     if (!entry.isIntersecting) {
       entry.target.classList.remove('appear');
       return;
     }else {
       entry.target.classList.add('appear');
       //appearOnScroll.unobserve(entry.target);
     }
   });

 },
  appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



async function timeout() {
  await new Promise(r => setTimeout(r, 1000));
  window.location.href = "https://parth-commits.github.io/";
}
timeout();