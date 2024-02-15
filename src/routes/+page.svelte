<script lang="ts">
	import Author from '$lib/components/Author.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<main class="bg-[#111d21] text-cyan-50">
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
