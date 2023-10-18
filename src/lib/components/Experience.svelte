<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import BooliLogo from '$lib/logos/Booli.svelte';
	import LimeLogo from '$lib/logos/Lime.svelte';
</script>

<div>
	<h3 class="text-5xl">@ Experience @</h3>
	<div class="flex gap-6">
		<Card
			description="Search engine for the real estate market in Sweden."
			Logo={BooliLogo}
			techStack="NextJs, EmberJs, Django, Pandas, php, Mongodb, SQL, K8S, Docker, Gitlab"
		/>
		<Card
			description="CRM tailored to your business"
			Logo={LimeLogo}
			techStack="StencilJs, Python, Flask, Marshmallow, SQL, Docker, Github Actions, Jenkins"
		/>
	</div>
</div>
