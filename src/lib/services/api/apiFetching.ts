import { error } from '@sveltejs/kit';
import { PUBLIC_ENDPOINT, PUBLIC_API_KEY } from '$env/static/public';
import type { Endpoint, APIResponse, APIError } from '$services/api/interfaces';

async function query(endpoint: Endpoint, args: string[]) {
	let completeUrl = PUBLIC_ENDPOINT + '/' + endpoint;

	for (let i = 0; i < args.length; i++) {
		completeUrl += (i == 0 ? '?' : '&') + args[i];
	}

	const headers: Headers = new Headers();
	headers.set('Accept', 'application/json');
	headers.set('Authorization', PUBLIC_API_KEY);

	return await fetch(completeUrl, {
		credentials: 'omit',
		method: 'GET',
		headers: headers
	});
}

async function fetchTopHeadlines(args: string[] = []): Promise<APIResponse> {
	const response = await query('top-headlines', args);

	if (!response.ok) {
		const json: APIError = await response.json();
		error(500, json.code + ': ' + json.message);
	}

	return (await response.json()) as APIResponse;
}

export { fetchTopHeadlines, type APIResponse };
