import type { NewsArticleModel } from '$models/NewsArticleModel';
import type { APIResponse } from '$services/api/interfaces';
import { cyrb53 } from '$services/hashing';
import { format } from 'date-fns';

function parse(response: APIResponse): NewsArticleModel[] {
	const parsedData: NewsArticleModel[] = [];
	const articles = response.articles;

	articles.forEach((article) => {
		if (article.title !== '[Removed]') {
			parsedData.push({
				id: cyrb53(article.title).toString(),
				author: article.author,
				title: article.title,
				content: article.content,
				publishTime: format(article.publishedAt, 'p, dd/MM/yyyy'),
				bannerUrl: article.urlToImage
			});
		}
	});

	return parsedData;
}

export { parse as parseResponse };
