const cookieValue = document.cookie.match(/(;)?cookiebar=([^;]*);?/) ? document.cookie.match(/(;)?cookiebar=([^;]*);?/)[2] : 'CokkiesUnset';

if (cookieValue === 'CookieAllowed') {
    console.log('test')
    const thumbnail = document.getElementsByClassName('trailer__thumbnail')[0];
    const playerContainer = document.getElementsByClassName('trailer__container')[0];
    const width = window.innerWidth < 1000 ? window.innerWidth - 72 : 1000 - 72;
    const iframe = `<iframe id="iframe" class="trailer__player" width="${width}" 
                        height="${width * 0.563}" src="https://www.youtube.com/embed/w9DKBKqvu4g" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    thumbnail.classList.add('trailer__thumbnail--hide');
    playerContainer.innerHTML = iframe;
}
