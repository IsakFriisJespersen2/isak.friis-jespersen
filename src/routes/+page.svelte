<script lang="ts">
	import Programming from '$lib/icons/programming.svelte';
</script>

<main>
	<navbar class="w-full bg-slate-800 text-white text-lg flex items-center justify-between p-8">
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
	<div class="flex flex-col items-center gap-20">
		<section>
			<div class="">
				<h3 class="text-6xl">Meet Isak Friis-Jespersen</h3>
				<h5 class="text-4xl bg-slate-500 w-full flex justify-end">a software engineer</h5>
			</div>
			<Programming className="h-96"/>
		</section>
		<section>Experience</section>
		<section>IT-knowledge</section>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
