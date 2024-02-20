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
		<section class="mx-8">
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
	<div>
		<footer class="text-center text-md pb-8">
			<p>© 2024 Isak Friis-Jespersen - Coded by IFJ </p>
		</footer>
	</div>
</main>
