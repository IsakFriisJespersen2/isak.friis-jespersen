<script lang="ts">
	import Programming from "$lib/icons/programming.svelte";
	let author = '';
	let title = '';

	const print = async (str: string) => {
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			author += char;
			await new Promise((resolve) => setTimeout(resolve, 70));
		}
	};
	const print2 = async (str: string) => {
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			title += char;
			await new Promise((resolve) => setTimeout(resolve, 70));
		}
	};

	print('Meet Isak Friis-Jespersen');
	print2('a software engineer');
</script>

<div class="">
	<h3 class="text-5xl text-center">
		{author}<span class="animate-pulse font-bold text-orange-600 text-5xl">|</span>
	</h3>
	<h5 class="text-3xl w-full flex justify-end">{title}</h5>
</div>
<Programming className="h-96" />
