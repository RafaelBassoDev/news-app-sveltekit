export default class NewsArticleModel {
	title: string;
	author: string;
	content: string;
	publishTime: string;
	bannerUrl: string;

	constructor(
		title: string,
		author: string,
		content: string,
		publishTime: string,
		bannerUrl: string = ''
	) {
		this.title = title;
		this.author = author;
		this.content = content;
		this.publishTime = publishTime;
		this.bannerUrl = bannerUrl;
	}
}
