<script lang="ts">
	import { Menu } from 'lucide-svelte';

	let isOpen = false;
</script>

<navbar class="fixed w-full bg-[#18262b] text-md border-b border-black z-10 text-cyan-50">
	<div class="flex justify-between p-5 w-full">
		<div class="flex space-x-4">
			<a href="/">About</a>
			<a href="/">Projects</a>
			<a href="/">Skills</a>
			<a href="/">Contact</a>
		</div>
		<div class="space-y-2 flex flex-col items-end">
			<button on:click={() => isOpen = !isOpen} >
				<Menu role="button" class="tablet:hidden border rounded-md w-8 h-8 p-1" />
			</button>
			<div class="flex flex-col space-y-2 items-end data-[hidden=false]:hidden" data-hidden={isOpen}>
				<a href="https://github.com/IsakFriisJespersen2">Github</a>
				<a href="https://www.linkedin.com/in/isak-friis-jespersen-9abb4915a/">Linkedin</a>
			</div>
		</div>
	</div>
</navbar>
