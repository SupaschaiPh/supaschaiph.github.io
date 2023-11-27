<script>
    export const className=""
    export let title=""
    export let desc=""
    export let href = ""
    export let heroImg = ""

</script>
<a href="{href}" class="h-[38vh] overflow-hidden bg-white border rounded-xl shadow-sm flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:shadow-lg transition">
    <div class="w-1/2 p-6 ">
      <img class="w-full h-full object-cover" src="{heroImg}" alt="Image">
    </div>
    <div class="flex flex-wrap w-1/2">
      <div class="p-4 flex flex-col h-full sm:p-7">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p class="mt-1 text-gray-500 dark:text-gray-400 truncate whitespace-pre-line text-base">
          {desc}
        </p>
        <div class="mt-5 sm:mt-auto">
          <p class="text-xs text-gray-500 dark:text-gray-500">
            
          </p>
        </div>
      </div>
    </div>
</a>