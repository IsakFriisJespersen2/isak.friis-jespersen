<script lang="ts">
	import profile from '$lib/components/profile.png';
</script>

<div class="flex flex-col items-center gap-6">
	<div class="text-3xl">+ About +</div>
	<div class="border-4 rounded-full p-10 w-[40rem] h-[40rem] text-center">
		<div class="w-full h-full flex flex-col items-center gap-6 text-lg">
		<img alt="My profile" src={profile} class="w-44 h-44 rounded-full"/>
			<div>
				Welcome to my site! I am a software developer based in Stockholm, Sweden, who is passionate about modern
				technologies and creative ways of solving problems
			</div>
			<div>. . . .</div>
			<div>
				In addition to fullstack web development I love experimenting with, k8s technologies hosting stuff from my
				raspberry pi.
			</div>
			<div>. . .</div>
		</div>
	</div>
</div>
