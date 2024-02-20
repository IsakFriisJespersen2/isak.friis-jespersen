<script lang="ts">
	import { Link } from 'lucide-svelte'
	export let Logo: any;
	export let description: string;
	export let techStack: string;
</script>

<div class="relative w-80 h-96 text-center rounded-md bg-[#18262b] text-[#dddddd]">
	<div class="flex flex-col gap-y-6 p-4">
		<div class="self-center">
			<svelte:component this={Logo} className="h-16" />
		</div>
		<div class="border-b-4 border-dotted border-blue-900" />
		<div class="text-md">{description}</div>
		<div class="text-md">
			<p><span class="text-orange-700 mr-2">Technologies:</span>{techStack}</p>
		</div>
	</div>
	<div class="h-12 bg-[#253a41] flex absolute bottom-0 w-full items-center justify-center text-[#4db6ac]">
		<a href="/" class="items-center text-md flex"><Link class="w-4 h-4 mr-1"/>Site</a>
	</div>
</div>
