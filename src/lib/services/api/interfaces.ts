type Endpoint = 'everything' | 'top-headlines';

type APIError = {
	status: string;
	code: string;
	message: string;
};

type Articles = {
	author: string;
	title: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

type APIResponse = {
	totalResults: number;
	articles: Articles[];
};

export { type Endpoint, type APIError, type APIResponse };
