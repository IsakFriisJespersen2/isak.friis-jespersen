<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import LinkedIn from '$lib/logos/LinkedIn.svelte';
	import Github from '$lib/logos/Github.svelte';

	let isOpen = false;
</script>

<navbar class="fixed w-full bg-[#18262b] text-md border-b border-black z-10 text-cyan-50">
	<div class="flex justify-between p-5 w-full">
		<div class="flex space-x-4">
			<a href="/" class="hover:text-orange-600">About</a>
			<a href="/" class="hover:text-orange-600">Projects</a>
			<a href="/" class="hover:text-orange-600">Skills</a>
			<a href="/" class="hover:text-orange-600">Contact</a>
		</div>
		<div class="space-y-2 tablet:space-y-0 flex flex-col items-end">
			<button on:click={() => (isOpen = !isOpen)}>
				<Menu role="button" class="tablet:hidden border rounded-md w-8 h-8 p-1" />
			</button>
			<div
				class="flex flex-col tablet:flex-row space-y-2 tablet:space-x-4 tablet:space-y-0  tablet:data-[hidden=false]:flex data-[hidden=false]:hidden"
				data-hidden={isOpen}
			>
				<a href="https://github.com/IsakFriisJespersen2" class="flex items-center"
					><Github className="w-5 h-5 fill-orange-600 mr-1" />Github</a
				>
				<a href="https://www.linkedin.com/in/isak-friis-jespersen-9abb4915a/" class="flex items-center"
					><LinkedIn className="w-4 h-4 fill-orange-600 mr-1" />Linkedin</a
				>
			</div>
		</div>
	</div></navbar
>
