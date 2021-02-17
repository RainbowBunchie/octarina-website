const cookieValue = document.cookie.match(/(;)?cookiebar=([^;]*);?/) ? document.cookie.match(/(;)?cookiebar=([^;]*);?/)[2] : 'CokkiesUnset';
if (cookieValue === 'CookieAllowed') {
    // The user has allowed cookies, let's load our external services
    // allow youtube video
}
