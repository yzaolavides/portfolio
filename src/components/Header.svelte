<script>
	import { resolve } from '$app/paths';
	// import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
    // import { ScrollProgress } from "$lib/components/magic/scroll-progress";
	let is_navbar_closed = $state(true);
	function dropMenu(){is_navbar_closed = !is_navbar_closed}
</script>
    <div class="navbar z-30">
	<!-- <ScrollProgress class="top-16" /> -->
		<div class="content">
			<div style="display: flex; padding: 1rem 0 1rem 0;">
				<a href={resolve("/#")} aria-label="Go back home" style="text-decoration: none" class="logo hover:text-[#FF6D29] transition duration-300 ease-in-out">yzabel olavides</a>
				<button title="dropdown" class="dropdown" onclick={dropMenu}><i class="fa-solid fa-bars"></i></button>
			</div>
			<nav class="links items-center" class:closed={is_navbar_closed}>
				<a href={resolve("/#works")} aria-label="Discover more of Yzabel's works" style="text-decoration: none"><p>Works</p></a>
				<a href={resolve("/#about")} aria-label="Learn more about Yzabel" style="text-decoration: none"><p>About</p></a>
				<a href="https://drive.google.com/file/d/1XyeUJm4gusBrfuKa15-ZYyr8c0rrKa90/view?usp=sharing" aria-label="View Yzabel's resume" style="text-decoration: none" target="_blank"><p>Resume</p></a>
				<a href="https://vimeo.com/yzaolavides" style="text-decoration: none" target="_blank" aria-label="See Yzabel's motion and video editing work"><p>Videos</p></a>
				<!-- <a href="mailto:yza.olavides@gmail.com" target="_blank"><InteractiveHoverButton class="border-0 text-neutral-500 bg-neutral-200 font-light">Contact Me</InteractiveHoverButton></a> -->
			</nav>
		</div>
	</div>