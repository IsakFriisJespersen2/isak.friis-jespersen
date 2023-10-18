<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Author from '$lib/components/author.svelte';
	import About from '$lib/components/about.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<main class="bg text-foreground">
	<Navbar />
	<div class="w-full flex flex-col items-center gap-y-60">
		<section class="h-5/6 mt-20">
			<Author />
		</section>
		<section class="h-5/6 w-full">
			<About />
		</section>
		<section>
			<Experience />
		</section>
		<section>
			<Skills />
		</section>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
