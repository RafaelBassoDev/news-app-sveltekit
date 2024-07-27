<script lang="ts">
	export let data;

	$: article = data.article;
</script>

{#if article}
	<img src={article.bannerUrl} alt="banner" />
	<h1>{article.title}</h1>
	<p>{article.publishTime}</p>
	<p>{article.content}</p>
{/if}
