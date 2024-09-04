<script lang="ts">
	import Card from '$lib/components/Projects/Card.svelte';
	import Dotfiles from '$lib/logos/dotfiles.svelte';
	import Portfolio from '$lib/logos/portfolio.svelte';
	import SectionTitle from '../SectionTitle.svelte';
	import { Lightbulb } from 'lucide-svelte';
	import Pong from '$lib/logos/pong.svelte';
</script>

<section class="flex flex-col items-center gap-6">
	<SectionTitle title="Projects" />
	<section class="flex flex-wrap gap-6 justify-center max-w-4xl">
		<Card
			description="Small web app showing fun fact of the day using ChatGPT-API."
			techStack="SvelteKit, ChatGPT-API, docker"
			link={'https://github.com/IsakFriisJespersen2/fun-fact-of-the-day'}
		>
			<div slot="logo"><Lightbulb class="h-16 w-16" /></div>
		</Card>
		<Card
			description="Portfolio project where I try to put up stuff I create. Mostly its a fun app to host."
			techStack="SvelteKit, docker"
			link={'https://github.com/IsakFriisJespersen2/isak.friis-jespersen'}
		>
			<div slot="logo" class="h-16 w-16"><Portfolio /></div>
		</Card>
		<Card
			description="Repo where I try to organize my dotfiles"
			techStack="Nvim, tmux, alacritty"
			link={'https://github.com/IsakFriisJespersen2/dotfiles'}
		>
			<div slot="logo"><Dotfiles className="h-16" /></div>
		</Card>
		<Card
			description="School project creating the game pong using RxJS."
			techStack="TypeScript, RxJS, Functional Programming"
			link={'https://github.com/IsakFriisJespersen/pong'}
		>
			<div slot="logo"><Pong className="h-16 w-16 text-white" /></div>
		</Card>
	</section>
</section>
