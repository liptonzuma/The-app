gsap.from('.head', {
    y: -300,
    opacity: 0,
    duration: 2,
    ease: Power2.easeInOut(),
    backgroundPosition: 0
})
gsap.from('.deliveries', {
    opacity: 0,
    y: 160,
    delay: .7,
    duration: 1.5
})
gsap.from('.but', {
    opacity: 0,
    x: -100,
    stagger: 1,

})
gsap.from('.ride', {
    scrollTrigger: '.ride',
    x: -400,
    duration: 2,
    start: "bottom center",
    delay: 1
})
gsap.from('.track', {
    scrollTrigger: '.track',
    start: 'bottom center',
    opacity: 0,
    duration: 2,
    x: 300,
    delay: 1
})
gsap.from('.on-text', {
    scrollTrigger: '.on-text',
    x: 300,
    delay: 1,
    duration: 2
})
gsap.from('.bigger', {
    scrollTrigger: '.bigger',
    y: 100,
    start: "bottom center",
    delay: 1,
    duration: 2
})
gsap.from('.hit', {
    scrollTrigger: '.hit',
    opacity: 0,
    x: 300,
    start: "bottom center",
    stagger: 1
})