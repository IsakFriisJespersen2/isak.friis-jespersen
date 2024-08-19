<script lang="ts">
	import LinkedIn from '$lib/logos/LinkedIn.svelte';
	import Github from '$lib/logos/Github.svelte';
	import SectionTitle from '../SectionTitle.svelte';
	import Email from './Email.svelte';

	$: isSubmitted = false;
</script>

<section class="flex flex-col items-center space-y-4">
	<SectionTitle title="Contact" />
	<h2 class="text-xl">Let get social</h2>

	<div class="flex gap-2">
		<a href="https://github.com/IsakFriisJespersen2" target="”_blank”" class="flex items-center"
			><Github className="w-8 h-8 hover:scale-125 fill-orange-600 mr-1" /></a
		>
		<a href="https://www.linkedin.com/in/isak-friis-jespersen-9abb4915a/" target="”_blank”" class="flex items-center"
			><LinkedIn className="w-7 h-7 hover:scale-125 fill-orange-600 mr-1" /></a
		>
	</div>

	<Email isSubmitted={isSubmitted}/>
</section>
