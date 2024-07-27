import placeholderUrl from '$lib/assets/placeholder-image.jpg';
import type { NewsArticleModel } from '$ambient';

export function load() {
	const newsList: NewsArticleModel[] = [
		{
			id: crypto.randomUUID(),
			title:
				'1How the Park fire near Chico exploded into Californias largest of the year - Yahoo! Voices',
			author: 'BBC News',
			content: 'content',
			publishTime: '1 hour ago',
			bannerUrl: placeholderUrl
		},
		{
			id: crypto.randomUUID(),
			title:
				'1How the Park fire near Chico exploded into Californias largest of the year - Yahoo! Voices',
			author: 'BBC News',
			content: 'content',
			publishTime: '1 hour ago',
			bannerUrl: placeholderUrl
		},
		{
			id: crypto.randomUUID(),
			title:
				'1How the Park fire near Chico exploded into Californias largest of the year - Yahoo! Voices',
			author: 'BBC News',
			content: 'content',
			publishTime: '1 hour ago',
			bannerUrl: placeholderUrl
		}
	];

	return {
		newsList
	};
}
