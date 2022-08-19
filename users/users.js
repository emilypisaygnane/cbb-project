import { getProfiles, checkAuth } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const usersEl = document.getElementById('users-container');

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click, signOutUser');

checkAuth();

async function displayProfiles() {
    const users = await getProfiles();
    
    for (let user of users) {
        // const userEl = renderProfile(user);

        usersEl.append(renderProfile(user));
    }
}
displayProfiles();