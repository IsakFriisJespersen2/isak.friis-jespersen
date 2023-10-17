<script lang="ts">
	import Author from '$lib/components/author.svelte';
	import About from '$lib/components/about.svelte';
	import Card from '$lib/components/card.svelte';
	import BooliLogo from '$lib/logos/Booli.svelte';
	import LimeLogo from '$lib/logos/Lime.svelte';
</script>

<main class="bg text-foreground">
	<navbar class="w-full bg-primary text-lg flex items-center justify-between p-8">
		<div class="flex gap-6">
			<a href="/">About</a>
			<a href="/">Projects</a>
			<a href="/">Skills</a>
			<a href="/">Contact</a>
		</div>
		<div class="flex gap-6">
			<a href="/">Github</a>
			<a href="/">Linkedin</a>
		</div>
	</navbar>
	<div class="flex flex-col items-center">
		<section class="h-screen -mb-40 pt-32">
			<Author />
		</section>
		<section class="h-screen w-full">
			<About />
		</section>
		<section class="flex flex-col items-center gap-6">
			<h3 class="text-5xl">@ Experience @</h3>
			<div class="flex gap-6">
				<Card
					title="Booli Search Technologies AB"
					description="Search engine for the real estate market in Sweden."
					Logo={BooliLogo}
					techStack="NextJs, EmberJs, Django, Pandas, php, Mongodb, SQL, K8S, Docker, Gitlab"
				/>
				<Card
					title="Lime Technologies Sweden AB"
					description="CRM tailored to your business"
					Logo={LimeLogo}
					techStack="StencilJs, Python, Flask, Marshmallow, SQL, Docker, Github Actions, Jenkins"
				/>
			</div>
		</section>
		<section>
			<h5 class="text-5xl">+ Skills +</h5>
		</section>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
