
const messageForm = document.getElementById('messageForm');
messageForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
        const name= document.getElementById('name').value
        const email= document.getElementById('email').value
        const phoneNo= document.getElementById('phoneNo').value
        const subject= document.getElementById('subject').value
        const message= document.getElementById('message').value
    const object = {
        method: 'POST',
        body: JSON.stringify({name,email,phoneNo,subject,message}),
    };
    try{
        const response = await fetch('https://api.sujal.info/portfolio/contact',object);
        const data = await response.json();
        if(data.success){
            alert('Message Sent Successfully');
            messageForm.reset();
        }
        else{
            alert('Something went wrong');
        }
    }
    catch(error){
        alert('Error: ' + error.message);
    }
});
document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    function changeLinkState() {
        let currentSection = sections[0];
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
                currentSection = section;
            }
        });
        navLinks.forEach((link) => link.classList.remove("active-link"));
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection.id}"]`);
        if (activeLink) {
            activeLink.classList.add("active-link");
        }
    }
    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
});

