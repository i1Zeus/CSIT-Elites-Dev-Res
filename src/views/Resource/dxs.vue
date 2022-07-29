<template>
<div v-if="toogleModal"
              id="authentication-modal"
              tabindex="-1"
              class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
              aria-modal="true"
              role="dialog"
            >
              <div
                class=" relative w-1/3 h-auto bg-primary-500 border border-primary-100 md:h-auto"
              >
                <!-- image -->
                <!-- Modal content -->
                <div class="relative bg-white shadow w-auto h-auto">
                  <button
                    @click="toogleModal = false"
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-primary-500">
                      Edit Resource
                    </h3>
                    <form @submit.prevent="submit" class="space-y-5">
                      <div>
                        <label class="leading-loose">Resource name</label>
                        <input
                          required
                          type="text"
                          name="title"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Resource name"
                        />
                      </div>
                      <div class="flex flex-col gap-1">
                        <label class="leading-loose">Description</label>
                        <div class="relative inline-flex">
                          <textarea
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           cols="30" rows="4"></textarea>
                        </div>
                      </div>
                      <input type="file" @change="handleFileUpload($event)" />
                      <div class="flex">
                        <div></div>

                        <button
                          @click="toogleModal = false"
                          class="flex justify-center items-center w-full border-2 border-transparent border-b-black hover:border-emerald-600 text-gray-900 px-4 py-3 rounded-t-lg rounded-b-sm focus:outline-none mr-6"
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
                          type="submit"
                          class="bg-emerald-600 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 duration-200 justify-center items-center w-full text-white px-4 py-3 rounded-lg"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
</template>