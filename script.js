const menuBtn = document.getElementById('menu-btn');
const mobileNavbar = document.getElementById('mobile-navbar');

menuBtn.addEventListener('click', () => {
    mobileNavbar.classList.toggle('hidden');

    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
});

// Initialize EmailJS
(function() {
    emailjs.init("bGGc_Ns2RTIfPIDAO"); // Your public key
})();

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show sending status
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending...';
    
    emailjs.sendForm('service_yowrqeg', 'template_spgufae', this)
        .then(function() {
            const notifSuccess = document.getElementById('notif-success');
            notifSuccess.classList.remove('hidden');
            button.textContent = 'Message Sent!';
            document.getElementById('messageForm').reset();
             setTimeout(() => {
                notifSuccess.classList.add('hidden');
                button.textContent = originalText;
                button.disabled = false; // Aktifkan kembali tombol
            }, 3000);
        }, function(error) {
            button.textContent = 'Failed to send';
            console.log('FAILED...', error);
            // Kembalikan teks tombol dan aktifkan kembali jika gagal
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false; 
            }, 5000);
        });
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




