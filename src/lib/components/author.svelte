<script lang="ts">
	import Programming from '$lib/icons/programming.svelte';
	let author = '';
	let title = '';

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
		addCharToDom('a software engineer', (char: string) => (title += char));
	};
	start();
</script>

<h3 class="text-5xl text-center">
	{author}<span class="animate-pulse font-bold text-orange-600 text-5xl">|</span>
</h3>
<h5 class="text-3xl w-full flex justify-end">&nbsp;{title}</h5>
<Programming className="h-96" />
