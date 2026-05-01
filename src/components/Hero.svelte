
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

<!-- <div class="bg-background relative flex h-125 w-70 flex-col items-center justify-center overflow-hidden rounded-lg md:min-w-2xl">
	<DotPattern class={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")} />
</div> -->

<div class="p-7 lg:p-40">
<DotPattern
		width={20}
		height={20}
		cx={1}
		cy={1}
		cr={1}
		class={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]")}
	/>
<div class="font-light text-3xl md:text-4xl lg:text-4xl md:leading-normal lg:leading-relaxed text-neutral-500 flex flex-col justify-end items-start min-h-screen pb-30 md:min-h-0 md:block">
<p>I'm Yzabel, a multimedia designer with a developer's mindset. I think in both 
<span class="word-wrap">
    pixel
    <span class="bbox" style="width: {$width}%; height: {$height}%;">
      <!-- handles only show when fully expanded -->
      {#if $width > 95}
        <span class="handle tl"/>
        <span class="handle tr"/>
        <span class="handle bl"/>
        <span class="handle br"/>
        <span class="handle tm"/>
        <span class="handle bm"/>
        <span class="handle ml"/>
        <span class="handle mr"/>
      {/if}
    </span>
  </span> and <code class="inline-code">{displayed}<span class="cursor">|</span></code>, making complex ideas clear for audiences that don't have time for noise.
</p>
<div class="font-normal text-lg text-neutral-800">
    <br>
    More about my background and experiences <i class="fa-solid fa-arrow-down"></i>
</div>
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
    font-family: monospace;
    font-size: 0.9em;
    padding: 6px 10px;
    border-radius: 4px;
  }

  .cursor {
    font-size: 1em;
    display: inline-block;
    animation: blink 0.7s step-end infinite;
    margin-left: 1px;
    color: #6b7280;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
</style>