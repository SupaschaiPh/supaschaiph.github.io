<script>
    import { slide } from 'svelte/transition';
    export const className=""
    export let title=""
    export let desc=""
    export let href = ""
    export let heroImg = ""

    //desc = desc.length > 80 ? desc.slice(0,80)+"..." : desc
</script>

<a class="h-[38vh] overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" href={href}>
  <div class="relative w-full h-3/5 pt-4 px-4 overflow-hidden">
    <img class="w-full h-full object-cover rounded-xl" src={heroImg} alt="HeroImage">
  </div>
  <div class="p-4 h-2/5">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <p class="mt-1 text-gray-500 dark:text-gray-400 text-base truncate whitespace-pre-line">
      {desc}
    </p>
  </div>
</a>