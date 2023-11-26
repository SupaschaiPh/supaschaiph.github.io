<script>
    export let className=""
    export let title=""
</script>

<a class="max-h-[45vh] overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
  <div class="w-full h-3/5 rounded-t-xl overflow-hidden">
    <img class="w-full h-full" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description">
  </div>
  <div class="p-4 h-2/5">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      {title}
    </h3>
    <p class="mt-1 text-gray-500 dark:text-gray-400">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
  </div>
</a>