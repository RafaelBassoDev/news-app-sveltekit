<script lang="ts">
	export let data;

	$: article = data.article;
</script>

{#if article}
	<div class="article">
		{#if article.bannerUrl}
			<img src={article.bannerUrl} alt="banner" />
		{/if}
		<div class="article-content">
			<h1>{article.title}</h1>
			<p id="timestamp">{article.publishTime}</p>
			<p id="content">{article.content}</p>
		</div>
	</div>
{/if}

<style lang="scss">
	.article {
		display: flex;
		flex-direction: column;

		img {
			width: 100%;
			aspect-ratio: 2 / 1;
			object-fit: cover;
		}

		&-content {
			display: flex;
			flex-direction: column;

			gap: 1em;
			padding: 2em 2em;

			* {
				margin: 0;
			}

			h1 {
				font-size: 2.5em;
			}

			#timestamp {
				font-size: 1.4em;
				color: var(--font-color-secondary);
			}

			#content {
				border-top: 2px solid var(--separator-color);
				padding: 2em 0;

				font-size: 1.8em;
				color: var(--font-color-primary);
			}
		}
	}

	@media screen and (min-width: 426px) {
		.article {
			&-content {
				#content {
					font-size: 2em;
				}
			}
		}
	}

	@media screen and (min-width: 769px) {
		.article {
			max-width: 768px;

			&-content {
				#content {
					font-size: 2.4em;
				}
			}
		}
	}
</style>
