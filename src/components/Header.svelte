<script>
	// import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
    // import { ScrollProgress } from "$lib/components/magic/scroll-progress";
	let is_navbar_closed = $state(true);
	function dropMenu(){is_navbar_closed = !is_navbar_closed}
</script>
    <div class="navbar z-10">
	<!-- <ScrollProgress class="top-16" /> -->
		<div class="content">
			<div style="display: flex; padding: 1rem 0 1rem 0;">
				<a href="#" style="text-decoration: none"><span class="logo">yzabel olavides</span></a>
				<button class="dropdown" onclick={dropMenu}><i class="fa-solid fa-bars"></i></button>
			</div>
			<div class="links items-center" class:closed={is_navbar_closed}>
				<a href="#works" style="text-decoration: none"><p>Works</p></a>
				<a href="#about" style="text-decoration: none"><p>About</p></a>
				<a href="https://drive.google.com/file/d/1XyeUJm4gusBrfuKa15-ZYyr8c0rrKa90/view?usp=sharing" style="text-decoration: none" target="_blank"><p>Resume</p></a>
				<a href="https://vimeo.com/yzaolavides" style="text-decoration: none" target="_blank"><p>Videos</p></a>
				<!-- <a href="mailto:yza.olavides@gmail.com" target="_blank"><InteractiveHoverButton class="border-0 text-neutral-500 bg-neutral-200 font-light">Contact Me</InteractiveHoverButton></a> -->
			</div>
		</div>
	</div>