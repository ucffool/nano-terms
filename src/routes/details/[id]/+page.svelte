<script>
    import { onMount } from 'svelte';
    import definitions from '$lib/data.json';
    import { timeAgo } from '$lib/utils';
    import { goto } from '$app/navigation';
    import { swipe } from 'svelte-gestures';
    import animationSwipeMp4 from "$lib/animation-swipe.mp4";
    import animationSwipeWebm from "$lib/animation-swipe.webm";

  
    /** @type {import('./$types').PageProps} */
	let { data } = $props();
    
    let term = $state(null);
    let direction = $state(null);
    let activeTab = $state('detailed_definition');
    const tabList = ["back", "detailed_definition", "analogies", "use_cases"];
    const tabLabels = {
      back: "Back",
      detailed_definition: "Detailed Definition",
      analogies: "Analogies",
      use_cases: "Use Cases"
    };

    let id = $state(data.id);
    $effect(() => {
    if (id) {
        term = getTermById(id);
      }
    });

    const getTermById = (id) => {
      return definitions.terms.find(term => term.id === id);
    };
    
    function swipeHandler(event) {
        direction = event.detail.direction;
        if (direction === 'right') {
            activeTab = tabList[(tabList.indexOf(activeTab) - 1 + tabList.length) % tabList.length];
        } else if (direction === 'left') {
            activeTab = tabList[(tabList.indexOf(activeTab) + 1) % tabList.length];
        }
        if (activeTab === 'back') {
            goto("/");
        }
    }

</script>

{#if term}
  <h1 class="text-sm bg-black text-white text-center">Last Updated: <b class="capitalize">{timeAgo(term.last_updated)}</b></h1>
  <div class="flex flex-col justify-end items-center" use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>
    <div class="p-2 w-full h-screen mb-16">
        <h2 class="text-xl font-bold">{term.word}</h2>
        <h3 class="text-sm italic">{tabLabels[activeTab]}</h3>
        {#if activeTab === 'detailed_definition'}
            <p class="text-gray-700">{term.detailed_definition}</p>
            <div class="flex lg:hidden items-center">
                <div class="flex-1">
                    <!-- svelte-ignore a11y_media_has_caption -->
                    <video muted loop autoplay playsinline class="mx-auto" width="150" height="150" title="Finger swiping left">
                        <source src={animationSwipeWebm} type="video/webm" />
                        <source src={animationSwipeMp4} type="video/mp4">
                    </video>
                </div>
            </div>

        {:else if activeTab === 'analogies'}
            <ul class="list-disc list-inside">
                {#each term.analogies as analogy}
                <li>{analogy}</li>
                {/each}
            </ul>
        {:else if activeTab === 'use_cases'}
            <ul class="list-disc list-inside">
                {#each term.use_cases as useCase}
                <li>{useCase}</li>
                {/each}
            </ul>
        {/if}
    </div>
    <div class="bg-white fixed bottom-0 left-0 right-0 flex space-x-1 justify-stretch leading-5">
        <a      class="bg-yellow-300 text-black px-1 py-1 w-1/4 text-center text-3xl rounded-t-xl" href="/">&#8624;</a>
        <button class="px-1 py-1 w-1/4 cursor-pointer  rounded-t-xl {activeTab === 'detailed_definition' ? 'bg-yellow-500' : 'bg-yellow-300'}" onclick={() => activeTab = 'detailed_definition'}>Detailed Definition</button>
        <button class="px-1 py-1 w-1/4 cursor-pointer  rounded-t-xl {activeTab === 'analogies' ? 'bg-yellow-500' : 'bg-yellow-300'}" onclick={() => activeTab = 'analogies'}>Analogies</button>
        <button class="px-1 py-1 w-1/4 cursor-pointer  rounded-t-xl {activeTab === 'use_cases' ? 'bg-yellow-500' : 'bg-yellow-300'}" onclick={() => activeTab = 'use_cases'}>Use Cases</button>
    </div>
  </div>
{/if}
