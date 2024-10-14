<script lang="ts">
	import profile from '$lib/logos/profile.png';
	import SectionTitle from './SectionTitle.svelte';
</script>

<div class="flex flex-col items-center gap-6">
	<SectionTitle title="About" />
	<div class="rounded-full p-4 tabletsm:p-10 max-w-[48rem] max-h-[48rem] h-[calc(100dvw)] text-center bg-[#18262b]">
		<div class="w-full h-full flex flex-col items-center tablet:pt-6 tablet:gap-4 gap-2 text-lg">
			<img
				alt="Profile of Isak Friis-Jespersen"
				src={profile}
				class="desktop:w-48 desktop:h-48 tablet:w-40 tablet:h-40 tabletsm:w-32 tabletsm:h-32 w-24 h-24 rounded-full"
			/>
			<p class="tabletsm:text-md text-sm">
				Welcome to my site! I am a software developer based in Stockholm, Sweden, who is passionate about modern
				technologies and creative ways of solving problems.
			</p>
			<div class="text-2xl text-orange-600">. . .</div>
			<p class="tabletsm:text-md text-sm">
				In addition to fullstack web development I love experimenting with, k8s technologies hosting stuff from my
				raspberry pi.
			</p>
			<div class="text-2xl text-orange-600">. . .</div>
		</div>
	</div>
</div>
