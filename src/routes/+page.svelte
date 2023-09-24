<script lang="ts">
	import Author from '$lib/components/author.svelte';
	import About from '$lib/components/about.svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import BG from '$lib/icons/bg.svg';
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
		<section>
			<h3 class="text-5xl">@ Experience @</h3>
			<div>
				<h5 class="text-2xl">Booli</h5>
			</div>
			<div>
				<h5 class="text-2xl">Lime-technologies</h5>
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
