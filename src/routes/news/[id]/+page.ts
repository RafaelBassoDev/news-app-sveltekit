import { articles } from '$stores/articles.js';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load({ params }) {
	const cachedArticles = get(articles);

	const article = cachedArticles.find((article) => article.id === params.id);

	if (!article) throw error(404);

	return { article };
}
