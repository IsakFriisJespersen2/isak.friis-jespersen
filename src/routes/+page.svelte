<script lang="ts">
	import Author from '$lib/components/Author.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<main class="bg-[#111d21] text-cyan-50">
	<div class="w-full flex flex-col items-center gap-y-24">
		<section class="h-5/6 mt-16">
			<Author />
		</section>
		<div class="w-full border border-dashed"/>
		<section class="h-5/6 w-full">
			<About />
		</section>
		<div class="w-full border border-dashed"/>
		<section>
			<Experience />
		</section>
		<div class="w-full border border-dashed"/>
		<section>
			<Skills />
		</section>
		<div class="w-full border border-dashed"/>
	</div>
</main>
