<script lang="ts">
	export let Logo: any;
	export let description: string;
	export let techStack: string;
</script>

<div class="flex flex-col gap-y-6 w-80 h-96 p-4 text-center rounded-2xl bg-[#18262b]">
	<div class="self-center">
		<svelte:component this={Logo} className="h-20" />
	</div>
	<div class="border-b-4 border-dotted border-blue-900" />
	<div class="text-xl">{description}</div>
	<div class="text-xl">
		<p class="text-orange-700">Technologies: <span class="text-cyan-50">{techStack}</span></p>
	</div>
</div>
