<script lang="ts">
	import Wrapper from '$lib/components/Skills/Wrapper.svelte';
	import Django from '$lib/logos/Django.svelte';
	import Docker from '$lib/logos/Docker.svelte';
	import EmberJs from '$lib/logos/EmberJs.svelte';
	import Git from '$lib/logos/Git.svelte';
	import Kubernetes from '$lib/logos/Kubernetes.svelte';
	import Neovim from '$lib/logos/Neovim.svelte';
	import NextJs from '$lib/logos/NextJs.svelte';
	import Node from '$lib/logos/Node.svelte';
	import Python from '$lib/logos/Python.svelte';
	import SQL from '$lib/logos/SQL.svelte';
	import Typescript from '$lib/logos/Typescript.svelte';
</script>

<div>
	<h5 class="text-3xl text-center">+ Skills +</h5>
	<div class="flex flex-wrap justify-around tablet:gap-32 gap-12 max-w-6xl tablet:p-36 p-12 rounded-full">
		<Wrapper>
			<Django/>
		</Wrapper>
		<Wrapper>
			<Docker />
		</Wrapper>
		<Wrapper>
			<EmberJs />
		</Wrapper>
		<Wrapper>
			<Git />
		</Wrapper>
		<Wrapper>
			<Kubernetes />
		</Wrapper>
		<Wrapper>
			<Neovim />
		</Wrapper>
		<Wrapper>
			<NextJs />
		</Wrapper>
		<Wrapper>
			<Node />
		</Wrapper>
		<Wrapper>
			<Python />
		</Wrapper>
		<Wrapper>
			<SQL />
		</Wrapper>
		<Wrapper>
			<Typescript />
		</Wrapper>
	</div>
</div>
