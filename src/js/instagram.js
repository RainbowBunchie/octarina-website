const twitterFetcher = require('twitter-fetcher');

function generateFeed(data) {
    const wrapper = document.getElementById('twitter-feed');
    for (const post of data) {
        wrapper.appendChild(post);
    }
}

function test(data) {
    const images = [];
    for (const post of data) {
        // eslint-disable-next-line no-undef
        const doc = new DOMParser().parseFromString(post, 'text/html');
        const image = doc.body.getElementsByClassName('media');
        if (image.length > 0) {
            images.push(image[0]);
        }
        if (images.length > 4) {
            generateFeed(images);
            return;
        }
    }
}

const configProfile = {
    profile: {
        screenName: 'octarina_game',
    },
    domId: 'twitter-feed',
    maxTweets: 15,
    enableLinks: false,
    showUser: false,
    showTime: false,
    showImages: true,
    showRetweet: false,
    showInteraction: false,
    lang: 'en',
    customCallback: test,
};

twitterFetcher.fetch(configProfile);
