<script>
    import definitions from '$lib/data.json';
    import { timeAgo } from '$lib/utils';
    import imgGithub from '$lib/github-mark.svg';

    let terms = $state([]);
    // Sort the 'terms' array in ascending order based on the 'word' property of each object.
    definitions.terms.sort((a, b) => a.word.localeCompare(b.word));
  
    // Filter the terms array to only include terms that are visible.
    terms = definitions.terms.filter(term => term.visible);
  
</script>
<main class="flex-grow">
    <div class="text-sm mb-2 w-full bg-black text-white text-center"><b>NanoTerms</b>: Quick Definitions for AI Topics</div>
    <div class="flex flex-col space-y-2">
        {#each terms as term}
            <a class="shadow-lg cursor-pointer border-l-8 border-yellow-500" href="/details/{term.id}">
                <p class="px-2 font-semibold">{term.word}</p>
                <p class="px-2 truncate text-gray-600">{term.one_sentence_definition}</p>
            </a>
        {/each}
    </div>
</main>
<div class="w-full border-t-2 px-2 border-black flex justify-between items-end leading-none">
    <div class="mb-1">Last Updated: <b class="capitalize">{timeAgo(definitions.last_updated)}</b></div>
    <a class="py-1" href="https://github.com/ucffool/nano-terms" aria-label="GitHub Project" title="NanoTerms GitHub Project">
        <img src={imgGithub} alt="GitHub Logo" class="w-5 h-auto"/>
    </a>
</div>