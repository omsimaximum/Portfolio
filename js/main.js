const welcomeText = document.querySelector('.welcome-text');
const toggle = document.querySelector('.toggle');
const leftNavSlide = document.querySelector('.left-nav-slide');
const socialContainer = document.querySelector('.social-container');
const about = document.getElementById('about');
const footer = document.getElementById('contact');
const header = document.getElementById('home');
const menus = leftNavSlide.querySelectorAll('ul li a');
const form = document.forms['form'];


document.addEventListener('DOMContentLoaded', () => {


setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.top = '-100%';
    document.body.style.overflow = 'visible';

    // GSAP ANIMATION
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.from('#logo',1,{
            y:-100,
            opacity:0})
        .from('.welcome-text', 1,{
            y:100,
            opacity:0})
        .from('.left-nav',0.6,{
            x:-100,
            opacity:0
        })
        .from('.social-container',{
            x:100,
            opacity:0
        },2)
        .from('.scroll-down',{
            y:100,
            opacity:0
        },2)
    
        gsap.utils.toArray('.about-text',).forEach((elem,i) => {
            gsap.to(elem, {
                xPercent:50,
                ease: "none",
                scrollTrigger: {
                trigger: elem,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                }
            })
        })

        gsap.utils.toArray('.box',).forEach((elem,i) => {
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:elem,
                    start:"top 30%",
                    //markers:true,
                    toggleActions:'play reverse play reverse'
                }
            })
        tl.from(elem.querySelector('.right'),0.5,{
            x:100,
            opacity:0,
        })


        gsap.from(elem.querySelector('.left .left-text'),0.5,{
            x:-100,
            opacity:0,
            scrollTrigger:{
                trigger:elem,
                start:"top 30%",
                //markers:true,
                toggleActions:'play reverse play reverse'   
            }
        })

        gsap.to( elem, {
            scrollTrigger: {
            trigger: elem,
            start:'top top',
            end: '90% center',
            //scrub: true,
            //markers:true,
            pin:elem.querySelector('.left .left-text'),
            pinSpacing:false
            }
        })

        })

        const aboutTl = gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                markers:false,
                start:'top 40%',
                toggleActions:'play reverse play reverse'
            }
        })

        aboutTl.from('.introduction-container',{y:200, opacity:0,duration:1})

        window.addEventListener('scroll', () => {
            welcomeText.style.transform = 'translateY( -' + (window.pageYOffset) + 'px)';
            
            // if(window.scrollY > about.offsetTop){
            //    // about.style.backgroundAttachment = 'fixed';
            // }
            // else if(window.scrollY < about.offsetTop){
            //     about.style.backgroundAttachment = '';
            // }
            if(window.scrollY > footer.offsetTop){
                socialContainer.style.display = 'none';
            }
            else if(window.scrollY < footer.offsetTop){
                socialContainer.style.display = '';
            }
        })


        const hamburgerMenu = () => {
        toggle.classList.toggle('active');
        leftNavSlide.classList.toggle('active');
        }   
        menus.forEach(menu => {
        menu.addEventListener('click', () => {
            toggle.classList.remove('active');
            leftNavSlide.classList.remove('active');
        })
        })
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            const name = form.querySelector('input[type="text"]');
            const msg = form.querySelector('textarea');
            name.value = '';
            msg.value = '';
            email.value = '';
        })
        
        toggle.onclick = hamburgerMenu;

        
        
}, 5000)

})