import { checkAuth, signOutUser, getPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

// some "boiler plate" code for:
// sign out link
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

checkAuth();

const profileLink = document.getElementById('profile');
const usersLink = document.getElementById('users');

// grab needed DOM elements on page
const bulletinBoard = document.getElementById('bulletin-board');

async function displayPosts() {
    const posts = await getPosts();
    const listEls = renderPosts(posts);
    bulletinBoard.append(listEls);
    
}

profileLink.addEventListener('click', () => {
    window.location.replace('./users');

});

usersLink.addEventListener('click', () => {
    window.location.replace('./profile');

});

displayPosts();

