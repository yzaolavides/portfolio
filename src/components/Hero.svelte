
<script>
    import { DotPattern } from "$lib/components/magic/dot-pattern";
	import { cn } from "$lib/utils";
    import { tweened } from "svelte/motion";
    import { linear } from "svelte/easing";
    import { onMount } from "svelte";

    const width = tweened(0, { duration: 400, easing: linear});
    const height = tweened(0, { duration: 400, easing: linear});

    onMount(() => {
        setTimeout(() => {
            width.set(130);
            height.set(100);
        }, 800);
    
    });

    const word = 'code';
  let displayed = $state('');

  onMount(() => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        displayed += word[i];
        i++;
        if (i === word.length) clearInterval(interval);
      }, 100); // speed per character
    }, 1400); // start after bbox animation finishes
  });

</script>

<div class="p-7 lg:p-40">
<div class="z-0">
<DotPattern
		width={30}
		height={30}
		cx={1}
		cy={1}
		cr={1}
		class={cn("mask-[radial-gradient(900px_circle_at_center,transparent,white)]",
              "inset-x-0 inset-y-[-10%] h-[118%] skew-y-0"
    )}
	/>
</div>
<div class="z-10 font-light text-3xl md:text-4xl lg:text-4xl text-neutral-500 flex flex-col justify-end items-start min-h-full lg:pb-20 md:block">
<p class="leading-snug sm:leading-relaxed md:leading-normal lg:leading-relaxed">I'm Yzabel, a multimedia designer with a developer's mindset. I think in both 
<span class="word-wrap">
    pixel
    <span class="bbox" style="width: {$width}%; height: {$height}%;">
      <!-- handles only show when fully expanded -->
      {#if $width > 95}
        <span class="handle tl"></span>
        <span class="handle tr"></span>
        <span class="handle bl"></span>
        <span class="handle br"></span>
        <span class="handle tm"></span>
        <span class="handle bm"></span>
        <span class="handle ml"></span>
        <span class="handle mr"></span>
      {/if}
    </span>
  </span> and <code class="inline-code sm:text-sm">{displayed}<span class="cursor">|</span></code>, making complex ideas clear for audiences that don't have time for noise.
  <br>
</p>

    <br>
   <a href="#about" class="inline-flex items-center gap-2 font-normal text-lg text-neutral-800 hover:text-[#FF6D29] transition duration-300 ease-in-out">
  More about my background and experiences
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z"/>
  </svg>
</a>

</div>

</div>

<style>
  .word-wrap {
    position: relative;
    display: inline-block;
    /* color: #4f8ef7; */
    margin: 0 0.25em;
    white-space: nowrap;
  }

  p {
    display: inline;
    white-space: normal;
  }

  .bbox {
    position: absolute;
    left: -9px;
    border: 1.5px solid #bebebe;
    border-radius: 1px;
    pointer-events: none;
    transform-origin: top left;
    overflow: visible;
  }

  .handle {
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border: 1.5px solid #717171;
    border-radius: 1px;
  }

  .tl { top: -3px;    left: -3px;              }
  .tr { top: -3px;    right: -3px;             }
  .bl { bottom: -3px; left: -3px;              }
  .br { bottom: -3px; right: -3px;             }
  .tm { top: -3px;    left: 50%; transform: translateX(-50%); }
  .bm { bottom: -3px; left: 50%; transform: translateX(-50%); }
  .ml { top: 50%;     left: -3px;  transform: translateY(-50%); }
  .mr { top: 50%;     right: -3px; transform: translateY(-50%); }


  .inline-code {
    background: #e5e7eb;
    color: #1f2937;
    font-family: 'DM Mono', monospace;
    font-size: 0.8em;
    padding: 6px 10px;
    border-radius: 4px;
  }

  .cursor {
    font-size: 1em;
    display: inline-block;
    animation: blink 0.7s step-end infinite;
    margin-left: 1px;
    color: #FF6D29;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  :global(.dotfade) {
    mask-image: 
      linear-gradient(to top, transparent, white) !important;
    mask-composite: intersect;
  }
</style>