import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { newsList } = await parent();

	const article = newsList.find((article) => article.id === params.id);

	if (!article) throw error(404);

	return { article };
}
