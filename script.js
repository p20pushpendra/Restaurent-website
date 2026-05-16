// Nav Bar Color Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'rgba(15, 15, 15, 0.95)';
        nav.style.padding = '20px 8%';
    }
});

// Form Submission Animation
const form = document.querySelector('form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn');
        btn.innerHTML = 'Sending...';
        
        setTimeout(() => {
            btn.innerHTML = 'Booked Successfully!';
            btn.style.background = '#27ae60';
            btn.style.borderColor = '#27ae60';
        }, 1500);
    });
}