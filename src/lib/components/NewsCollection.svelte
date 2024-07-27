<script lang="ts">
	import NewsModel from '$lib/models/NewsModel';
	import NewsArticle from './NewsArticle.svelte';

	export let news: NewsModel[];
</script>

<div class="news">
	{#each news as article}
		<NewsArticle {article} />
	{/each}
</div>

<style lang="scss">
	.news {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;

		font-size: 1.6em;
		padding: 1em 2em;
	}
</style>
