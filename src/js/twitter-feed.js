const twitterFetcher = require('twitter-fetcher');

function generateFeed(data) {
    const wrapper = document.getElementById('twitter-feed');
    let html = '';

    for (const post of data) {
        const doc = new DOMParser().parseFromString(post, 'text/html');
        let time = doc.body.getElementsByClassName('timePosted')[0].textContent;
        time = time.replace('Posted on ', '');
        const text = doc.body.getElementsByClassName('tweet')[0].innerHTML;
        const reply = doc.body.getElementsByClassName('twitter_reply_icon')[0].href;
        const retweet = doc.body.getElementsByClassName('twitter_retweet_icon')[0].href;
        const favorite = doc.body.getElementsByClassName('twitter_fav_icon')[0].href;
        const media = doc.body.querySelectorAll('.media');

        let images = '';

        for (const img of media) {
            const { src } = img.querySelector('img');
            images += `<img class="post__media" src="${src}" alt='image from tweet'>`;
        }
        const content = `
        <div class="news__post post">
            <p class="post__date">${time}</p> 
            <div class="post__user user">
                <img class="user__img" src="../images/content/member-denise.png">
                <p class="user__name">Octarina WISHLIST NOW! @octarina_game</p>
            </div>
            <p class="post__text">${text}</p>
            ${images}
            <div class="post__interaction interaction">
                <a href="${reply}" target="_blank">
                    <img class="interaction__icon" title="reply" src="../images/content/icon-reply.png">
                </a>
                <a href="${retweet}" target="_blank">
                    <img class="interaction__icon" title="retweet" src="../images/content/icon-retweet.png">
                </a>
                <a href="${favorite}" target="_blank">
                    <img class="interaction__icon" title="favorite" src="../images/content/icon-favorite.png">
                </a>
            </div>
        </div>`;
        html += content;
    }
    wrapper.innerHTML = html;
}

const configProfile = {
    profile: {
        screenName: 'octarina_game',
    },
    domId: 'twitter-feed',
    maxTweets: 15,
    enableLinks: true,
    showUser: true,
    showTime: true,
    showImages: true,
    showRetweet: false,
    showInteraction: true,
    lang: 'en',
    customCallback: generateFeed,
};

twitterFetcher.fetch(configProfile);
