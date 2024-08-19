<script lang="ts">
  export let isSubmitted = false;

	const handleSubmit = async (e: Event) => {
		const response = await fetch('/api/send-email', {
			method: 'POST',
			body: JSON.stringify({
				name: e.target!.fullname.value,
				email: e.target!.email.value,
				message: e.target!.message.value
			})
		});

		console.log(await response.json());
    is
	};
</script>

<div class="p-8 w-full tablet:w-auto">
	<form
		class="flex flex-col space-y-4 w-full p-8 border-4 border-[#18262b] rounded-md"
		on:submit|preventDefault={handleSubmit}
	>
		<div class="flex tablet:flex-row flex-col tablet:space-x-4 tablet:space-y-0 space-y-4">
			<div class="flex flex-col tablet:space-y-2">
				<label for="fullname">Full Name*</label>
				<input
					required
					id="fullname"
					type="text"
					placeholder="Enter your name"
					class="px-3 py-2 rounded-md bg-[#18262b]"
				/>
			</div>
			<div class="flex flex-col tablet:space-y-2">
				<label for="email">Email*</label>
				<input
					required
					id="email"
					type="email"
					placeholder="Enter your email"
					class="px-3 py-2 rounded-md bg-[#18262b]"
				/>
			</div>
		</div>

		<div class="flex flex-col space-y-2">
			<label for="message">Your Message*</label>
			<textarea
				required
				name="message"
				id="message"
				cols="20"
				rows="10"
				placeholder="Enter your message"
				class="px-3 py-2 rounded-md bg-[#18262b]"
			/>
		</div>
		<button class="bg-[#253a41] p-2 rounded-md" type="submit">Send message</button>
	</form>
</div>
