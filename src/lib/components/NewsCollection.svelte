<script lang="ts">
	import NewsArticleModel from '$models/NewsArticleModel';
	import NewsArticle from '$components/NewsArticle.svelte';

	export let news: NewsArticleModel[];
</script>

<div class="news">
	{#each news as article}
		<NewsArticle {article} on:click />
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
