<template>
  <div
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <button
              class="h-32 w-32 bg-green-200 hover:bg-green-300 duration-200 rounded-xl flex flex-shrink-0 justify-center items-center text-black text-2xl font-mono"
            >
              Image
            </button>
            <div
              class="block pl-2 font-semibold text-xl self-start text-gray-700"
            >
              <h2 class="leading-relaxed">Add a Resource</h2>
              <p class="text-sm text-gray-500 font-normal leading-relaxed">
                this page were made specifically to add a Resource 💕.
              </p>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="flex flex-col">
                <label class="leading-loose">Resource Title</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Resource title"
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Resource Link</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Add a Link"
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Resource Description</label>
                <textarea
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Remember to add a description"
                ></textarea>
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button
                class="flex justify-center items-center w-full border-2 border-transparent border-b-black hover:border-black duration-1000 text-gray-900 px-4 py-3 rounded-t-lg rounded-b-sm focus:outline-none"
              >
                <svg
                  class="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>
              <button
                class="bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 justify-center items-center w-full text-white px-4 py-3 rounded-t-lg rounded-b-sm"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
