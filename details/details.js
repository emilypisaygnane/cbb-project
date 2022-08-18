import { getPostDetail, checkAuth } from '../fetch-utils.js';
import { deletePost } from '../fetch-utils.js';

const displayBulletinBoard = document.querySelector('.bulletin-board');

// Render post detail function
function renderPostDetail(post) {

    const div = document.createElement('div');
    const titleEl = document.createElement('h2');
    const dateEl = document.createElement('p');
    const descriptionEl = document.createElement('p');
    const deleteButton = document.createElement('button');
    const commentEl = document.createElement('p');
    const inputBlock = document.createElement('input');


    dateEl.textContent = `Latest Modification: ${date}`;
    dateEl.classList.add('date-text');

    titleEl.textContent = post.title;

    descriptionEl.textContent = post.description;

    deleteButton.textContent = 'Delete';
    // setting up user auth to delete
    deleteButton.addEventListener('click', async () => {
        const user = checkAuth();
        if (user.id === post.user_id) {
            await deletePost(post.id);
        } else {
            alert('This is not your post to delete');
        }
        location.replace ('../');
    });
    
    div.classList.add('post-detail-container');
    descriptionEl.classList.add('post-description');

    div.append(
        titleEl, 
        dateEl, 
        descriptionEl, 
        deleteButton, 
        commentEl, 
        inputBlock);

    return div;
}

//URL Search Params
const params = new URLSearchParams(window.location.search);

async function loadData() {
    const post = await getPostDetail(params.get('id'));
    const displayPost = renderPostDetail(post);
    displayBulletinBoard.append(displayPost);
}

loadData();

// displaying date
let today = new Date(); 
let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();