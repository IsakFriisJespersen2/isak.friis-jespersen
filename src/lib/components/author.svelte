<script lang="ts">
	import Programming from '$lib/logos/Programming.svelte';
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

<div class="w-full flex flex-col items-center space-y-20">
	<div>
		<h3 class="desktop:text-6xl text-4xl">
			{author}<span class="animate-pulse font-bold text-orange-600 mr-1 {cursorPosition !== 'author' && 'hidden'}"
				>|</span
			>
		</h3>
		<h5 class="flex w-full justify-end desktop:text-3xl text-2xl">
			&nbsp;{title}<span class="animate-pulse font-bold text-orange-600 ml-1 {cursorPosition !== 'title' && 'hidden'}"
				>|</span
			>
		</h5>
	</div>
	<Programming className="desktop:h-96 laptop:h-80 h-64" />
</div>
