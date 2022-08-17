import { checkAuth, displayPost, deletePost } from '../fetch-utils.js';
import { renderPost } from '../render-utils.js';

const postDetailEl = document.querySelector('post-detail');
const params = new URLSearchParams(window.location.search);

async function displayDetailPosts() {
    const post = await displayPost(params.get('id'));
    const postEl = renderPost(post);
    postDetailEl.append(postEl);
    const user = checkAuth();

    if (user.id === post.user.id) {

        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.classList.add('delete-button');
        deleteButtonEl.textContent = 'Delete Post';

        deleteButtonEl.addEventListener('click', async () => {
            await deletePost(post.id);
            // alert('Your Post Has Been Deleted!');
            // location.href = '../';

        });
        postDetailEl.append(deleteButtonEl);
    }
}
displayDetailPosts();