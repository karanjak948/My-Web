// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const smoothScrollLink of smoothScrollLinks) {
        smoothScrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// Sticky navigation bar
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Fade-in effect for page transitions
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    for (const page of pages) {
        page.style.opacity = '0';
        page.style.display = 'none';
    }

    const targetPage = document.getElementById(pageId);
    targetPage.style.display = 'block';
    setTimeout(() => {
        targetPage.style.opacity = '1';
    }, 50);
}


