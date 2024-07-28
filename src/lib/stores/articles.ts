import { writable } from 'svelte/store';
import type { NewsArticleModel } from '$models/NewsArticleModel';

export const articles = writable<NewsArticleModel[]>([]);
