const cookieValue = document.cookie.match(/(;)?cookiebar=([^;]*);?/) ? document.cookie.match(/(;)?cookiebar=([^;]*);?/)[2] : 'CokkiesUnset';

if (cookieValue === 'CookieAllowed') {
    const thumbnail = document.getElementsByClassName('trailer__thumbnail')[0];
    const playerContainer = document.getElementsByClassName('trailer__container')[0];
    const thumbnailPlaceholder = document.getElementsByClassName('trailer__thumbnail')[0].getBoundingClientRect();
    const iframe = `<iframe id="iframe" class="trailer__player" width="${thumbnailPlaceholder.width}" 
                        height="${thumbnailPlaceholder.height}" src="https://www.youtube.com/embed/w9DKBKqvu4g" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    thumbnail.classList.add('trailer__thumbnail--hide');
    playerContainer.innerHTML = iframe;
}
