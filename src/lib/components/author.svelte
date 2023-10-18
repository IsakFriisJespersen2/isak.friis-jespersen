<script lang="ts">
	import Programming from '$lib/logos/programming.svelte';
	let author = '';
	let title = '';
	let cursorPosition = 'author';

	const addCharToDom = async (str: string, callback: Function) =>
		new Promise(async (resolve) => {
			function* charGenerator(str: string) {
				for (let i = 0; i < str.length; i++) {
					yield new Promise((resolve) => {
						setTimeout(() => resolve(str[i]), 60);
					});
				}
			}
			for await (let char of charGenerator(str)) {
				callback(char);
			}
			resolve('ok');
		});

	const start = async () => {
		await addCharToDom('Meet Isak Friis-Jespersen', (char: string) => (author += char));
		cursorPosition = 'title';
		addCharToDom('a software engineer', (char: string) => (title += char));
	};
	start();
</script>

<div class="">
	<h3 class="text-5xl">
		{author}<span class="animate-pulse font-bold text-orange-600 text-5xl {cursorPosition !== 'author' && 'hidden'}"
			>|</span
		>
	</h3>
	<h5 class="text-3xl ml-48">
		&nbsp;{title}<span class="animate-pulse font-bold text-orange-600 text-3xl {cursorPosition !== 'title' && 'hidden'}"
			>|</span
		>
	</h5>
	<Programming className="h-96" />
</div>
