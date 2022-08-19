import { checkAuth, saveProfile, getProfile, signOutUser } from '../fetch-utils.js';

const formEl = document.getElementById('user-form');
const nameEl = document.getElementById('user-name');
const bioEl = document.getElementById('user-bio');
const avatarEl = document.getElementById('avatar');
const button = document.getElementById('button');
const signOutLink = document.getElementById('sign-out-link');

const user = checkAuth();

console.log(formEl);

signOutLink.addEventListener('click', signOutUser);

checkAuth();

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const name = data.get('user-name');
    const bio = data.get('user-bio');
    const avatar = data.get('avatar');

    await saveProfile({
        id: user.id,
        user_name: name,
        bio: bio,
        avatar_url: avatar
    });

    formEl.reset();

    displayProfile();
});

async function displayProfile() {
    const response = await getProfile(user.id);

    if (response) {
        nameEl.value = response.user_name;
        bioEl.value = response.bio;
        avatarEl.value = response.avatar_url;
        button.textContent = 'update';
    }
}
displayProfile();

checkAuth();