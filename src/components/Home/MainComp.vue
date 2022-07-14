<template>
  <!-- =====> Image <====== -->
  <div
    class="bg-[url('../src/assets/img/MainCom.jpg')] gap-10 h-screen bg-cover bg-center object-cover relative"
  >
    <!-- ======> Buttons <======  -->
    <div>
      <button
        class="border-2 border-white text-white hover:bg-black rounded-md font-semibold mt-3 ml-2 py-1.5 px-8 duration-200"
      >
        <span>Register</span>
      </button>
      <button
        class="bg-transparent border-2 border-transparent hover:border-white text-white rounded-md font-semibold mt-3 ml-2 py-1.5 px-8 duration-200"
      >
        <span>login</span>
      </button>
    </div>
    <div class="flex flex-col gap-36 items-center mt-10">
      <!-- =========> Paragraph  <========= -->
      <div>
        <p class="text-6xl text-white font-semibold">Search,Find & Learn</p>
      </div>
      <!-- =========> Users / Resources  <========= -->
      <div>
        <p class="text-2xl text-white font-thin">
          <font-awesome-icon icon="fa-solid fa-book-open-reader" />12000 Res
          <font-awesome-icon icon="fa-solid fa-users" /> 1000 Users
        </p>
      </div>
      <!-- =========> Search Bar and submit button & Table <========= -->
      <div class="flex flex-col w-1/2 gap-16">
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
              <font-awesome-icon
                icon="fa-solid fa-pen"
                class="mt-5"
                size="xl"
              />
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-5 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-green-500"
              placeholder="Search Resources, Courses..."
              required=""
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-3"
            >
              Search
            </button>
          </div>
        </form>
        <!--========> Tags/Res Table <======== -->
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center bg-white rounded-2xl">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium border-b-2 border-green-400 text-gray-900 px-6 py-4"
                      >
                        Tags
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium border-b-2 border-green-400 text-gray-900 px-6 py-4"
                      >
                        Certified Resources
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        HTML
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        CSS
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        Tailwind CSS
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        JavaScript
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        HTML
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        CSS
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        Tailwind CSS
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        JavaScript
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        HTML
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        CSS
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        Tailwind CSS
                      </td>
                      <td
                        class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                      >
                        JavaScript
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
