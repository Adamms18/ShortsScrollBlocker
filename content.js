// Function to block scroll events on YouTube Shorts pages
function blockScrollEvent(e) {
    if (window.location.pathname.startsWith('/shorts/')) {
        e.preventDefault();
        e.stopPropagation();
    }
}

// Stopping scroll events on YouTube Shorts pages
window.addEventListener('wheel', blockScrollEvent, { passive: false, capture: true });

// Blocking arrow key events (Up/Down) for changing Shorts
window.addEventListener('keydown', function(e) {
    if (window.location.pathname.startsWith('/shorts/')) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown') {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}, { passive: false, capture: true });


// Turn of the navigator buttons on YouTube Shorts
const hideContainerStyle = document.createElement('style');
hideContainerStyle.innerHTML = `
    .navigation-container.ytd-shorts,
    .reel-video-in-sequence-thumbnail.ytd-shorts {
        display: none !important;
        pointer-events: none !important;
    }
`;
document.head.appendChild(hideContainerStyle);