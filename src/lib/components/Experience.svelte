<script lang="ts">
	import SectionTitle from './SectionTitle.svelte';

	$: showEducation = false;

	const work = [
		{
			date: '2020 - Curr',
			company: 'Booli Search Technologies AB',
			subject: 'Software Engineer',
			description:
				'Working on Booli Pro, a data heavy business analytics tool for the real estate market in Sweden.<br> NextJs, EmberJs, Django, Pandas, php, Mongodb, SQL, K8S, Docker, Gitlab'
		},
		{
			date: '2018 - 2020',
			company: 'Lime Technologies',
			subject: 'Software Engineer',
			description:
				'Consultant with focus on building/ maintaining customer applications. <br> TypeScript, Python, Flask, SQL, Docker, Github Actions, Jenkins'
		}
	];

	const education = [
		{
			date: '2018 - 2020',
			company: 'Uppsala Universitet',
			subject: 'Mathematics',
			description:
				'Studied one semester of Mathematics at Uppsala University. <ul><li> - Basic Course in Mathematics</li><li> - Linear Algebra and Geometry I</li><li> - Single Variable Calculus</li><li> - Algebra I, Scientific Computing I</li></ul>'
		},
		{
			date: '2018 - 2018',
			company: 'Monash University',
			subject: 'Australia Exchange',
			description: `Studied one semester at the Engineering Facultiy. Computer Science courses eg: <ul><li>- Programming Paradigms (Functional Programming)</li><li>- Continuous Mathematics in Computer Science</li><li>- e-Business software technologies (Angular, Node.js, Express, MongoDB)</li><ul>`
		},
		{
			date: '2016 - 2019',
			company: 'Luleå Tekniska Universitet',
			subject: 'Information science',
			description: `Bachelor's degree`
		}
	];
</script>

<section class="flex flex-col w-full items-center">
	<SectionTitle title="Experience" />
	<div class="flex flex-col space-y-4 bg-[#18262b] p-8 rounded-md">
		<p class="text-orange-600/80">Work</p>
		{#each work as { date, company, subject, description }, index}
			<div class="flex flex-col tablet:flex-row gap-y-4 pb-8 tablet:pb-4 items-start">
				<p class="w-32 text-white">{date}</p>
				<div class="space-y-2">
					<p class="flex gap-2"><span class="font-bold">{company}</span> - <span class="">{subject}</span></p>
					<p class="text-gray-400 max-w-2xl">{@html description}</p>
					<div class="text-3xl tablet:text-start text-center text-orange-600">. . .</div>
				</div>
			</div>
		{/each}

		<p class="text-orange-600/80">Education</p>
		<div data-showEducation={showEducation}>
			{#each education as { date, company, subject, description }, index}
				<div class="flex flex-col tablet:flex-row gap-y-4 pb-8 tablet:pb-4 items-start">
					<p class="w-32 text-white">{date}</p>
					<div class="space-y-2">
						<p class="flex gap-2"><span>{company}</span> - <span class="">{subject}</span></p>
						<p class="text-gray-400 max-w-2xl">{@html description}</p>
						{#if index !== education.length - 1}
							<div class="text-3xl tablet:text-start text-center text-orange-600">. . .</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
