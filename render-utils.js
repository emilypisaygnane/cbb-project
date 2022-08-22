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
        a.href = `./post/?id=${post.id}`;

        a.append(titleEl, categoryEl, descriptionEl, contactEl);

        li.append(a);
        
        fragment.append(li);
    }

    return fragment;
}

export function renderProfile(profile) {
    const profileEl = document.createElement('div');
    
    const nameEl = document.createElement('h3');
    nameEl.textContent = profile.name;

    const bioEl = document.createElement('p');
    bioEl.textContent = profile.bio;

    const avatarEl = document.createElement('p');
    avatarEl.textContent = profile.avatar_url;

    profileEl.append(nameEl, avatarEl, bioEl);

    return profileEl;
}

export function renderPostDetails(post) {
    const container = document.createElement ('div');

    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;

    const categoryEl = document.createElement('span');
    categoryEl.textContent = post.category_id;

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = post.description;

    const contactEl = document.createElement('p');
    contactEl.textContent = post.contact;

    container.append(titleEl, categoryEl, descriptionEl, contactEl);

    return container;

}