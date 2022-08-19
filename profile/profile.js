import { checkAuth, saveProfile, getProfile } from '../fetch-utils.js';

const formEl = document.getElementById('user-form');
const userNameInput = document.getElementById('user-name');
const userBioInput = document.getElementById('user-bio');

const userProfile = {
    name: '',
    bio: ''

};

const user = checkAuth();

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    userProfile.name = data.get('user-name');
    userProfile.bio = data.get('user-bio');

    await saveProfile(userProfile);
});

async function displayProfile() {
    const response = await getProfile(user.id);

    if (response) {
        userNameInput.value = response.name;
        userBioInput.value = response.bio;
    }
}
displayProfile();