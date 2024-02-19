<script lang="ts">
	import Author from '$lib/components/Author.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<main class="bg-[#111d21] text-cyan-50">
	<div class="w-full flex flex-col items-center gap-y-24">
		<section class="h-5/6 mt-16">
			<Author />
		</section>
		<div class="w-full border-b-4 border-dashed border-[#18262b]" />
		<section class="h-5/6 w-full">
			<About />
		</section>
		<div class="w-full border-b-4 border-dashed border-[#18262b]" />
		<section>
			<Experience />
		</section>
		<div class="w-full border-b-4 border-dashed border-[#18262b]" />
		<section>
			<Skills />
		</section>
		<div class="w-full border-b-4 border-dashed border-[#18262b]" />
		<section class="w-full">
			<Contact />
		</section>
	</div>
</main>
