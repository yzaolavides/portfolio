<script>
	import { motion, useScroll } from "motion-sv";
	import { cn } from "$lib/utils";

	let { class: className } = $props();

	let scroll = $derived(useScroll());
</script>

<motion.div
	class={cn(
		"fixed inset-x-0 top-0 z-50 h-1 origin-top-left bg-linear-to-r from-[#453027] via-[#81442a] to-[#FF6D29]",
		className
	)}
	style={{
		scaleX: scroll.scrollYProgress,
	}}
/>