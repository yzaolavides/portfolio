<script>
    let is_navbar_closed = $state(true);
	function dropMenu(){is_navbar_closed = !is_navbar_closed}
</script>
        <div class="navbar">
			<div class="content">
				<div style="display: flex; padding: 1rem 0 1rem 0;">
					<a href="/" style="text-decoration: none"><span class="logo">yzabel olavides</span></a>
					<button class="dropdown" onclick={dropMenu}><i class="fa-solid fa-bars"></i></button>
				</div>
				<div class="links" class:closed={is_navbar_closed}>
					<a href="#works" style="text-decoration: none"><p>Works</p></a>
					<a href="#about" style="text-decoration: none"><p>About</p></a>
					<a href="https://drive.google.com/file/d/1XyeUJm4gusBrfuKa15-ZYyr8c0rrKa90/view?usp=sharing" style="text-decoration: none" target="_blank"><p>Resume</p></a>
					<a href="https://vimeo.com/yzaolavides" style="text-decoration: none" target="_blank"><p>Videos</p></a>
				</div>
			</div>
		</div>