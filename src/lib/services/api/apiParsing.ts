import type { NewsArticleModel } from '$models/NewsArticleModel';
import type { APIResponse } from '$services/api/interfaces';
import { cyrb53 } from '$services/hashing';

function parse(response: APIResponse): NewsArticleModel[] {
	const parsedData: NewsArticleModel[] = [];
	const articles = response.articles;

	articles.forEach((article) => {
		parsedData.push({
			id: cyrb53(article.title).toString(),
			author: article.author,
			title: article.title,
			content: article.content,
			publishTime: article.publishedAt,
			bannerUrl: article.urlToImage
		});
	});

	return parsedData;
}

export { parse as parseResponse };
