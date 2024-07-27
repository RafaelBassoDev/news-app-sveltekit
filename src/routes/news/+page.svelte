<script lang="ts">
	import NewsArticle from '$components/NewsArticle.svelte';

	export let data;
</script>

<div class="news-container">
	{#each data.newsList as article}
		<NewsArticle {article} on:click />
	{/each}
</div>

<style lang="scss">
	.news-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;

		font-size: 1.6em;
		padding: 0 2em;
	}

	@media screen and (min-width: 769px) {
		.news-container {
			max-width: 768px;
		}
	}
</style>
