<script lang="ts">
	import SectionTitle from './SectionTitle.svelte';

	const experience = [
		{
			date: '2020 -',
			company: 'Booli Search Technologies AB',
			subject: 'Software Engineer',
			description: 'Blää blää'
		},
		{
			date: '2018 - 2020',
			company: 'Lime Technologies',
			subject: 'Software Engineer',
			description: 'Blää blää'
		},
		{
			date: '2018 - 2020',
			company: 'Uppsala Universitet',
			subject: 'Mathematics',
			description: 'Blää blää'
		},
		{
			date: '2018 - 2020',
			company: 'Monash University',
			subject: 'Australia Exchange',
			description: 'Blää blää'
		},
		{
			date: '2018 - 2020',
			company: 'Luleå Tekniska Universitet',
			subject: 'Information science',
			description: 'Blää blää'
		}
	];
</script>

<section class="flex flex-col w-full items-center">
	<SectionTitle title="Experience" />
	<div class="flex flex-col space-y-4 bg-[#18262b] p-8 rounded-md">
		{#each experience as { date, company, subject, description }}
			<div class="flex flex-col tablet:flex-row gap-y-4 pb-8 tablet:pb-4 items-start">
				<p class="w-32">{date}</p>
				<div class="space-y-2">
					<p class="flex gap-2"><span>{company}</span> - <span class="text-gray-400">{subject}</span></p>
					<p class="text-gray-400">{description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
