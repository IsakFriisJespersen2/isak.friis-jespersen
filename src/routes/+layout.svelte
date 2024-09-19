<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="min-w-[calc(100dvw)]">
	<Navbar />
	<section class="pt-16">
		<slot />
	</section>
</main>
