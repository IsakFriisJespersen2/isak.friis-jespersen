<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import BooliLogo from '$lib/logos/Booli.svelte';
	import LimeLogo from '$lib/logos/Lime.svelte';
</script>

<section class="flex flex-col items-center gap-6">
	<h3 class="text-2xl">
		<span class="text-lg mr-2">@</span>Experience<span class="text-lg ml-2">@</span>
	</h3>
	<section class="flex gap-6">
		<Card
			description="Search engine for the real estate market in Sweden."
			Logo={BooliLogo}
			techStack="NextJs, EmberJs, Django, Pandas, php, Mongodb, SQL, K8S, Docker, Gitlab"
		/>
		<Card
			description="CRM tailored to your business needs"
			Logo={LimeLogo}
			techStack="StencilJs, Python, Flask, Marshmallow, SQL, Docker, Github Actions, Jenkins"
		/>
	</section>
</section>
