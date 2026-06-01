// Smooth animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateNumbers();
    addInteractivity();
});

// Animate numbers when page loads
function animateNumbers() {
    const followersEl = document.getElementById('followers');
    const likesEl = document.getElementById('likes');
    const videosEl = document.getElementById('videos');

    animateValue(followersEl, 0, 1200000, 1500);
    animateValue(likesEl, 0, 45000000, 1500);
    animateValue(videosEl, 0, 256, 1500);
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (end > 1000000) {
            element.textContent = formatNumber(value);
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

// Add interactivity to video cards
function addInteractivity() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Video clicked');
            // You can add modal or redirect functionality here
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideDown 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.video-card').forEach(card => {
        observer.observe(card);
    });
}

// Add event listeners to social buttons
document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});