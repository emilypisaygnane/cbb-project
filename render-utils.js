export function renderCategoryOptions(categories) {
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const a = document.createElement('a');
        a.href = `../post-detail/?id=${post.id}`;

        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        li.append(titleEl, categoryEl, descriptionEl, contactEl);

        fragment.append(a);
        a.append(li);
    }

    return fragment;
}

export function renderPost(post) {
    const postContainerEl = document.createElement('div');
    postContainerEl.classList.add('post-detail');

    const titleEl = document.createElement('h1');
    titleEl.classList.add('title');
    titleEl.textContent = `${post.title}`;

    const categoryEl = document.createElement('div');
    categoryEl.classList.add('category');
    categoryEl.textContent = `${post.category.emoji}`;

    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('description');
    descriptionEl.textContent = `${post.description}`;

    const contactEl = document.createElement('div');
    contactEl.classList.add('contact');
    contactEl.textContent = `${post.contact}`;

    postContainerEl.append(
        titleEl,
        categoryEl,
        descriptionEl,
        contactEl
    );

    return postContainerEl;
}