const cookieValue = document.cookie.match(/(;)?cookiebar=([^;]*);?/) ? document.cookie.match(/(;)?cookiebar=([^;]*);?/)[2] : 'CokkiesUnset';
console.log(cookieValue)
if (cookieValue === 'CookieAllowed') {
    const thumbnail = document.getElementsByClassName('trailer__thumbnail')[0];
    const playerContainer = document.getElementsByClassName('trailer__container')[0];
    const iframe = `<iframe id="iframe" class="trailer__player" width="560" 
                        height="315" src="https://www.youtube.com/embed/w9DKBKqvu4g" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    thumbnail.classList.add('trailer__thumbnail--hide');
    playerContainer.innerHTML = iframe;
}
