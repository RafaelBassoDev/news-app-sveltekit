<script lang="ts">
	import type { NewsArticleModel } from '$models/NewsArticleModel';
	export let article: NewsArticleModel;
</script>

<div class="news-article">
	<a href="/news/{article.id}">
		<div class="news-article-content">
			<div class="news-article-content-info">
				<p class="author">{article.author}</p>
				<p class="title">{article.title}</p>
			</div>
			{#if article.bannerUrl && false}
				<div class="news-article-content-image">
					<img src={article.bannerUrl} alt="news" />
				</div>
			{/if}
		</div>
		<div class="news-article-footer">
			<span class="publish-time">{article.publishTime}</span>
		</div>
	</a>
</div>

<style lang="scss">
	.news-article {
		display: flex;
		flex-direction: column;
		gap: 1em;

		width: 100%;
		padding: 1em;

		border-bottom: 2px solid var(--separator-color);

		a {
			all: unset;
			cursor: pointer;
		}

		&-content {
			display: flex;
			gap: 1em;

			&-info {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				gap: 1em;
				flex-grow: 2;

				* {
					margin: 0;
				}

				.author {
					font-weight: bold;
				}

				.title {
					flex-grow: 2;
					font-size: 1.3em;
				}
			}

			&-image {
				display: flex;
				align-items: center;
				max-width: 20%;

				img {
					width: 100%;
					border-radius: 0.5em;
					aspect-ratio: 1 / 1;
					object-fit: cover;
				}
			}
		}

		&-footer {
			.publish-time {
				font-size: 0.9em;
				color: var(--font-color-secondary);
			}
		}
	}
</style>
