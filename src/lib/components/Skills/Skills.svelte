<script lang="ts">
	import SectionTitle from '../SectionTitle.svelte';
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
	import ElasticSearch from '$lib/logos/ElasticSearch.svelte';
	import Tailwind from '$lib/logos/Tailwind.svelte';
	import React from '$lib/logos/React.svelte';
</script>

<div class="flex flex-col items-center">
	<SectionTitle title="Skills" />
	<div class="flex flex-wrap justify-around tablet:gap-24 gap-4 max-w-7xl tablet:p-36 p-12 rounded-full">
		<Wrapper>
			<Tailwind />
		</Wrapper>
		<Wrapper>
			<React />
		</Wrapper>
		<Wrapper>
			<Django />
		</Wrapper>
		<Wrapper>
			<ElasticSearch />
		</Wrapper>
		<Wrapper>
			<EmberJs />
		</Wrapper>
		<Wrapper>
			<Git />
		</Wrapper>
		<Wrapper>
			<Docker />
		</Wrapper>
		<Wrapper>
			<Kubernetes />
		</Wrapper>
		<!-- <Wrapper> -->
		<!-- 	<Neovim /> -->
		<!-- </Wrapper> -->
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
