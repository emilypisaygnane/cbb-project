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

        const a = document.createElement('a');
        a.href = `./details/?id=${post.id}`;

        li.append(titleEl, categoryEl, descriptionEl, contactEl);

        a.append(li);
        
        fragment.append(a);
    }

    return fragment;
}

export function renderPostDetails(post) {
    const container = document.createElement ('div');

    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;

    const categoryEl = document.createElement('span');
    categoryEl.textContent = post.category_id;

    const descriptionEl = document.createElement9('p');
    descriptionEl.textContent = post.description;

    const contactEl = document.createElement('p');
    contactEl.textContent = post.contact;

    container.append(titleEl, categoryEl, descriptionEl, contactEl);

    return container;

}