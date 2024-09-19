<script lang="ts">
	import profile from '$lib/logos/profile.png';
	import SectionTitle from './SectionTitle.svelte';
</script>

<div class="flex flex-col items-center gap-6">
	<SectionTitle title="About" />
	<div class="rounded-full p-10 max-w-[48rem] max-h-[48rem] h-[calc(100dvw)] mx-4 text-center bg-[#18262b]">
		<div class="w-full h-full flex flex-col items-center pt-5 tablet:gap-4 gap-3 text-lg">
			<img
				alt="Profile of Isak Friis-Jespersen"
				src={profile}
				class="desktop:w-48 desktop:h-48 w-40 h-40 rounded-full tablet:mb-6"
			/>
			<p class="tablet:text-lg">
				Welcome to my site! I am a software developer based in Stockholm, Sweden, who is passionate about modern
				technologies and creative ways of solving problems.
			</p>
			<div class="text-3xl text-orange-600">. . .</div>
			<p class="tablet:text-lg">
				In addition to fullstack web development I love experimenting with, k8s technologies hosting stuff from my
				raspberry pi.
			</p>
			<div class="text-3xl text-orange-600">. . .</div>
		</div>
	</div>
</div>
