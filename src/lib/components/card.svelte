<script lang="ts">
	export let Logo: any;
	export let title: string;
	export let description: string;
	export let techStack: string;
</script>

<div class="flex flex-col gap-y-6 border-4 border-black w-80 h-96 p-4 text-center">
	<div class="self-center">
		<svelte:component this={Logo} className="h-20" />
	</div>
	<!-- <h5 class="text-2xl">{title}</h5> -->
	<div class="border-b-4 border-dotted border-black" />
	<div class="text-xl">{description}</div>
	<div class="text-xl">
		<p class="text-orange-700">Technologies: <span class="text-black">{techStack}</span></p>
	</div>
</div>
