<script lang="ts">
	import Author from '$lib/components/author.svelte'
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
	<div class="flex flex-col items-center gap-y-20">
		<section class="h-screen mt-32">
			<Author />
		</section>
		<section class="bg-[url('/public/bg.svg')] z-10 bg-cover w-screen h-screen">
			<div class="text-5xl">About</div>
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
