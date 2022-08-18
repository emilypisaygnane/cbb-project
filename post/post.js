import { getPostById, checkAuth, deletePost } from '../fetch-utils.js';
import { renderPostDetails } from '../render-utils.js';

const postDetailsContainerEl = document.getElementById('post-details');
const params = new URLSearchParams(window.location.search);

displayPost();

async function displayPost() {
    const data = await getPostById(params.get('id'));
    const postDiv = renderPostDetails(data);

    postDetailsContainerEl.append(postDiv);

    const user = checkAuth();

    if (user.id === data.user_id) {
        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Delete Post';
        
        deleteButton.addEventListener('click', async () => {
            await deletePost(data.id);

            alert('You deleted your post');

            location.replace('../');
        });

        postDetailsContainerEl.append(deleteButton);
    }
}