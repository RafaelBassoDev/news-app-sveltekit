<script lang="ts">
	import NewsModel from '$lib/models/NewsModel';
	export let news: NewsModel[];
</script>

<div class="news">
	{#each news as news}
		<div class="news-article">
			<div class="news-article-content">
				<div class="news-article-content-info">
					<p class="author">{news.author}</p>
					<p class="title">{news.title}</p>
				</div>
				<div class="news-article-content-image">
					<img src={news.bannerUrl} alt="news" />
				</div>
			</div>
			<div class="news-article-footer">
				<span class="publish-time">{news.publishTime}</span>
			</div>
		</div>
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

	.news-article {
		display: flex;
		flex-direction: column;
		gap: 1em;

		width: 100%;
		padding: 1em;

		border-bottom: 2px solid var(--separator-color);

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
