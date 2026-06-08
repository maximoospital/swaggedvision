document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const showcaseImg = document.getElementById('showcase-img');
    const stateHome = document.getElementById('state-home');
    const panelHome = document.querySelector('.panel-home');

    // Cycle through our high-quality generated assets to show different festival/brand visuals
    const assets = [
        'hero_festival.png',
        'clothing_hoodie.png',
        'clothing_shirt.png',
        'album_art.png'
    ];

    gridItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Select asset based on item index (cycle through available images)
            const assetName = assets[index % assets.length];
            
            // Update the showcase image source
            if (showcaseImg) {
                showcaseImg.src = assetName;
                showcaseImg.alt = `Gallery Image ${item.textContent}`;
            }

            // Switch radio state to Home so the showcase panel is visible
            if (stateHome) {
                stateHome.checked = true;
            }

            // Re-trigger the glitchy CSS blink animation on the home panel
            if (panelHome) {
                panelHome.style.animation = 'none';
                void panelHome.offsetHeight; // Trigger reflow to restart animation
                panelHome.style.animation = 'blinkIn 0.4s steps(5) forwards';
            }
        });
    });
});
