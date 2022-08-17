import { checkAuth, getPost, deletePost } from "../fetch-utils.js";
import { renderPost } from "../render-utils.js";

const postContainerEl = document.querySelector('#post-container');
const params = new URLSearchParams(window.location.search);

loadData();

const user = checkAuth();

async function loadData() {
    const postId = params.get('id');

    const details = await getPost(postId);

    const detailsDiv = renderPost(details);
    postContainerEl.append(detailsDiv);

    if (user.id === details.user.id) {
        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.textContent = 'Delete Post';
        deleteButtonEl.addEventListener('click', async () => {
            await deletePost(postId);
            alert('Your Post Has Been Deleted!');
            location.href = '../';

        });
        postContainerEl.append(deleteButtonEl);
    }
}