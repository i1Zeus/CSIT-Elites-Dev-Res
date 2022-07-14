<template>
  <div class="gap-10 bg-blue-900 h-screen">
    <!-- <img
      class="h-screen w-full bg-gray-600 relative flex"
      src="@/assets/img/MainCom.jpg"
    /> -->
    <div>
      <button
        class="bg-transparent border-2 border-white text-white hover:bg-black rounded-md font-semibold mt-3 ml-2 py-1.5 px-8 duration-200"
      >
        <span>Register</span>
      </button>
      <button
        class="bg-transparent border-2 border-transparent hover:border-white text-white rounded-md font-semibold mt-3 ml-2 py-1.5 px-8 duration-200"
      >
        <span>login</span>
      </button>
    </div>
    <div class="flex flex-col gap-40 items-center mt-10">
      <!-- =========> Paragraph  <========= -->
      <div>
        <p class="text-6xl text-white font-semibold">Search,Find & Learn</p>
      </div>
      <div>
        <p class="text-2xl text-white font-thin">
          <font-awesome-icon icon="fa-solid fa-book-open-reader" />12000 Res
          <font-awesome-icon icon="fa-solid fa-users" /> 1000 Users
        </p>
      </div>
      <!-- =========> Search Bar and submit button <========= -->
      <div class="w-1/2">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative">
            <div
              class="flex absolute inset-y-0 left-0 pl-3 pointer-events-none"
            >
              <svg
                class="w-7 h-10 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="5 -10 12 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Resources, Courses..."
              required=""
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
