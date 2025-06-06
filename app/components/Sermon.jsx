// components/MusicPlayer.jsx
export default function MusicPlayer() {
    return (
        // <!-- source https://tailwindcss.com/ -->
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
               Read Aritcles from our writers
            </p>
          </div>
        <div class="mt-6 sm:mt-10 relative z-10 max-w-md m-auto w-2/4 rounded-xl shadow-xl">

          
            <div
                class="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800  dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                <div class="flex items-center space-x-4">
                    <img src="https://tailwindcss.com/_next/static/media/full-stack-radio.afb14e4e.png" loading="lazy" decoding="async" alt="" class="flex-none rounded-lg bg-slate-100" width="88" height="88" />
                    <div class="min-w-0 flex-auto space-y-1 font-semibold">
                        <p class="text-cyan-500 transition-all duration-500 dark:text-cyan-400 text-sm leading-6">
                            <abbr title="Episode">Ep.</abbr> 128
                        </p>
                        <h2 class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate">
                            Scaling CSS at Heroku with Utility Classes
                        </h2>
                        <p class="text-slate-900 transition-all duration-500 dark:text-slate-50 text-lg">
                            Full Stack Radio
                        </p>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="relative">
                        <div class="bg-slate-100 transition-all duration-500 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div class="bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar"
                                aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
                        </div>
                        <div
                            class="ring-cyan-500 transition-all duration-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                            <div
                                class="w-1.5 h-1.5 bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5">
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                        <div class="text-cyan-500 transition-all duration-500 dark:text-slate-100">24:16</div>
                        <div class="text-slate-500 transition-all duration-500 dark:text-slate-400">75:50</div>
                    </div>
                </div>
            </div>
            <div
                class="bg-slate-50 text-slate-500 transition-all duration-500 dark:bg-slate-600  dark:text-slate-200 rounded-b-xl flex items-center">
                <div class="flex-auto flex items-center justify-evenly">
                    <button type="button" aria-label="Add to favorites">
              <svg width="24" height="24">
                <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
                    <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
              <svg width="24" height="24" fill="none">
                <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
                    <button type="button" aria-label="Rewind 10 seconds">
              <svg width="24" height="24" fill="none">
                <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
                </div>
                <button type="button" class="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100  dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
            <svg width="30" height="32" fill="currentColor">
              <rect x="6" y="4" width="4" height="24" rx="2"></rect>
              <rect x="20" y="4" width="4" height="24" rx="2"></rect>
            </svg>
          </button>
                <div class="flex-auto flex items-center justify-evenly">
                    <button type="button" aria-label="Skip 10 seconds" class="">
              <svg width="24" height="24" fill="none">
                <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
                    <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
              <svg width="24" height="24" fill="none">
                <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
                    <button type="button" class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500  dark:text-slate-100 transition-all duration-500 dark:ring-0  dark:bg-slate-500">
              1x
            </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
  }
  