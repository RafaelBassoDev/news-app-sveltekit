import type { NewsArticleModel } from '$models/NewsArticleModel';
import { request, parseResponse, cache } from '$services/api';
import { articles } from '$stores/articles';
import { get } from 'svelte/store';

export async function load() {
	const cachedArticles: NewsArticleModel[] = get(articles);

	if (cachedArticles.length > 0) {
		return { articles: cachedArticles };
	}

	let fetchedArticles: NewsArticleModel[] = [];

	await request('everything', ['q=technology', 'language=en', 'sortBy=popularity', 'pageSize=20'])
		.then((res) => parseResponse(res))
		.then((data) => {
			cache(data);
			fetchedArticles = data;
		});

	return { articles: fetchedArticles };
}
