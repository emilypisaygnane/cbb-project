const SUPABASE_URL = 'https://zreruwbpazeflnpdvgpu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZXJ1d2JwYXplZmxucGR2Z3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2Mzg0NDAsImV4cCI6MTk3NTIxNDQ0MH0.0w4nYxAaZh9xi9hDm28uWJV9oLX7WW7apIb6-J9S88E';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client
        .from('categories')
        .select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client
        .from('posts')
        .select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client
        .from('posts')
        .insert(post);
}

export async function getPostById(id) {
    const response = await client
        .from('posts')
        .select('*')
        .match({ id })
        .single();
    
    return checkError(response);
}

export async function deletePost(id) {
    const response = await client
        .from('posts')
        .delete()
        .match({ id });
    return checkError(response);
}