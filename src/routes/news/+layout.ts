import type { NewsArticleModel } from '$models/NewsArticleModel';
import { request, parseResponse, cache } from '$services/api';

export async function load() {
	let articles: NewsArticleModel[] = [];

	await request('everything', ['q=technology', 'language=en', 'sortBy=popularity', 'pageSize=20'])
		.then((res) => parseResponse(res))
		.then((data) => {
			cache(data);
			console.log(data);
			articles = data;
		});

	return { articles };
}
