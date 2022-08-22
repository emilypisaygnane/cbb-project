import { getProfiles, checkAuth, signOutUser } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const usersContainer = document.getElementById('users-container');

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

checkAuth();

async function displayProfiles() {
    const users = await getProfiles();
    // console.log(users);
    for (let user of users) {
        const renderedProfile = renderProfile(user);
        console.log(renderedProfile);
        renderedProfile.classList.add('post-it');

        usersContainer.append(renderedProfile);
    }
}
displayProfiles();