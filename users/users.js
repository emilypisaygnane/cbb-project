import { getProfiles } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const usersEl = document.getAnimations('users-container');

async function displayProfiles() {
    const users = await getProfiles();
    
    for (let user of users) {
        const userEl = renderProfile(user);

        usersEl.append(userEl);
    }
}
displayProfiles();