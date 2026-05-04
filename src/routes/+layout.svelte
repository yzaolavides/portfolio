<script>
	import './layout.css';
	import Header from "/src/components/Header.svelte";
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();


</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
{@render children()}
