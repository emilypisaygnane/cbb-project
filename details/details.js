import { getPostDetail, checkAuth } from '../fetch-utils.js';
import { deletePost } from '../fetch-utils.js';

const displayBulletinBoard = document.querySelector('.bulletin-board');

// Render post detail function
function renderPostDetail(post) {

    const div = document.createElement('div');
    const h = document.createElement('h2');
    const dateP = document.createElement('p');
    const descriptionP = document.createElement('p');
    const delButton = document.createElement('button');
    const commentsP = document.createElement('p');
    const inputBlock = document.createElement('input');


    dateP.textContent = `last modified ${date}`;
    dateP.classList.add('date-text');

    h.textContent = post.title;
    descriptionP.textContent = post.description;

    delButton.textContent = 'Delete';
    // setting up user auth to delete
    delButton.addEventListener('click', async () => {
        const user = checkAuth();
        if (user.id === post.user_id) {
            await deletePost(post.id);
        } else {
            alert('This is not your post to delete');
        }
        location.href = '../';
    });

    // const user = checkAuth();
    // if (user.id === post.user_id) {
    //     // remove the hidden class and add in the delete button class
    //     delButton.addEventListener('click', () => {
    //         deletePost(post.id);
    //     }
    //     , location.href = '../');
    // }

    
    div.classList.add('post-detail-container');
    descriptionP.classList.add('post-description');

    div.append(h, dateP, descriptionP, delButton, commentsP, inputBlock);

    return div;
}

//URL Search Params
const params = new URLSearchParams(window.location.search);

async function loadPost() {
    const post = await getPostDetail(params.get('id'));
    const postDisplay = renderPostDetail(post);
    displayBulletinBoard.append(postDisplay);
}

loadPost();

// displaying date
let today = new Date(); 
let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();