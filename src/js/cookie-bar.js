const cookieValue = document.cookie.match(/(;)?cookiebar=([^;]*);?/) ? document.cookie.match(/(;)?cookiebar=([^;]*);?/)[2] : 'CokkiesUnset';

if (cookieValue === 'CookieAllowed') {
    const videos = document.querySelectorAll('.youtube');
    for (const video of videos) {
        const thumbnail = video.querySelector('.thumbnail');
        const width = window.innerWidth < 1000 ? window.innerWidth - 72 : 1000 - 72;
        const youtube = thumbnail.getAttribute('data-youtube');
        const iframe = `<iframe id="iframe" class="player" width="${width}" 
                            height="${width * 0.563}" src="${youtube}" frameborder="0" allow="accelerometer; 
                            clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        video.innerHTML = iframe;
        thumbnail.classList.add('thumbnail--hide');
    }
}
