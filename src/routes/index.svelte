<script lang="ts">
	import Filter from "../components/Filter.svelte";
	import dayjs from "dayjs";
	import relativeTime from "dayjs/plugin/relativeTime";
	// import duration from "dayjs/plugin/duration";
	// dayjs.extend(duration);
	import "dayjs/locale/ru";
	dayjs.locale("ru");
	dayjs.extend(relativeTime);

	const bday = (d) => {
		const day = dayjs(d).date();
		const month = dayjs(d).month() + 1;
		const thisYear = dayjs().year();
		let result;
		if (dayjs(`${thisYear}-${month}-${day}`).isAfter(dayjs(), "days")) {
			result = dayjs(`${thisYear}-${month}-${day}`).fromNow();
		} else if (
			dayjs(`${thisYear}-${month}-${day}`).isBefore(dayjs(), "days")
		) {
			result = dayjs(`${thisYear + 1}-${month}-${day}`).fromNow();
		} else {
			result = "сегодня. Поздравляем!!";
		}
		return result;
	};

	import { families } from "../data";
</script>

<style>
	h2 {
		text-align: center;
		margin: 0 auto;
		font-weight: 300;
		font-family: "Bad Script", cursive;
	}

	h2 {
		font-size: 1.6em;
		margin-top: 1em;
		margin-bottom: 0.4em;
	}

	h3 {
		font-family: "Times New Roman", Times, serif;
		font-weight: 300;
		font-size: 1.4em;
		font-style: italic;
		text-align: center;
	}

	.flx {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.pers {
		width: 80vw;
		height: 200px;
		margin: 1em;
		padding: 1em;
		border-radius: 7px;
		transition: 0.4s;
		opacity: 0.8;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
	}

	.pers:hover {
		opacity: 1;
		transform: scale(1.01); /* increase the size */
	}

	@media (min-width: 480px) {
		h2 {
			font-size: 2em;
		}

		.flx {
			grid-template-columns: 2fr;
		}

		.pers {
			width: 20em;
		}
	}
</style>

<svelte:head>
	<title>Большая Семья Добровольских</title>
</svelte:head>

<!-- <Filter /> -->

{#each $families as klan}
	<h2>{klan.family}</h2>
	<div class="flx">
		{#each klan.members as member}
			<div class="pers">
				<h3>{member.name}</h3>
				<p>{dayjs(member.dob).format('DD/MM/YYYY')} гр.</p>
				<hr />
				<p>
					{member.gender == 'm' ? 'Родился' : 'Родилась'}
					{dayjs(member.dob).fromNow()}
				</p>
				<p>{dayjs(dayjs()).diff(member.dob, 'day')} дней от роду</p>
				<p>День рождения {bday(member.dob)}</p>
			</div>
		{/each}
	</div>
{/each}
