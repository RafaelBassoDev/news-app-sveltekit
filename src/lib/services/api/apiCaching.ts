import type { NewsArticleModel } from '$models/NewsArticleModel';
import { articles } from '$stores/articles';

function cache(data: NewsArticleModel[]) {
	articles.set(data);
}

export { cache };
