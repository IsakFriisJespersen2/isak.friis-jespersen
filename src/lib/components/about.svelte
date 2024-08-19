<script lang="ts">
	import profile from '$lib/logos/profile.png';
	import SectionTitle from './SectionTitle.svelte';
</script>

<div class="flex flex-col items-center gap-6">
	<SectionTitle title="About" />
	<div
		class="rounded-full p-10 desktop:w-[48rem] desktop:h-[48rem] tablet:w-[40rem] tablet:h-[40rem] w-[28rem] h-[28rem] text-center bg-[#18262b]"
	>
		<div class="w-full h-full flex flex-col items-center pt-5 tablet:gap-4 gap-3 tablet:text-md text-sm">
			<img
				alt="Profile of Isak Friis-Jespersen"
				src={profile}
				class="desktop:w-48 desktop:h-48 tablet:w-40 tablet:h-40 w-28 h-28 rounded-full tablet:mb-6"
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
