<script lang="ts">
	import profile from '$lib/logos/profile.png';
</script>

<div class="flex flex-col items-center gap-6">
	<div class="text-3xl">+ About +</div>
	<div
		class="rounded-full p-10 desktop:w-[40rem] desktop:h-[40rem] tablet:w-[36rem] tablet:h-[36rem] w-[28rem] h-[28rem] text-center bg-[#18262b]"
	>
		<div class="w-full h-full flex flex-col items-center tablet:gap-4 gap-3 tablet:text-md text-sm">
			<img alt="My profile" src={profile} class="desktop:w-40 desktop:h-40 tablet:w-32 tablet:h-32 w-28 h-28 rounded-full tablet:mb-6" />
			<p>
				Welcome to my site! I am a software developer based in Stockholm, Sweden, who is passionate about modern
				technologies and creative ways of solving problems
			</p>
			<div class="text-3xl text-orange-600">. . .</div>
			<p>
				In addition to fullstack web development I love experimenting with, k8s technologies hosting stuff from my
				raspberry pi.
			</p>
			<div class="text-3xl text-orange-600">. . .</div>
		</div>
	</div>
</div>
