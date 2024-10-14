<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="flex min-h-full min-w-full flex-grow flex-col items-center bg-[#111d21]">
	<Navbar />
	<div class="flex w-full flex-grow flex-col items-center overflow-x-clip px-4">
		<slot />
	</div>
</main>
