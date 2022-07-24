<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{
      'text-[#fff] border-[#fff] bg-[#41b883]': active,
    }"
    class="flex flex-col h-48 bg-gray-200 justify-center items-center gap-y-4 border-2 border-primary-500 border-dashed bg-[#fff] duration-300 ease-linear"
  >
    <span>Drag or Drop Image</span>
    <span>OR</span>
    <label
      for="dropzoneFile"
      :class="{
        'text-[#41b883] bg-[#fff]': active,
      }"
      class="px-4 py-2 text-[#fff] bg-primary-500 hover:bg-primary-700 duration-300 ease-linear"
      >Select Image</label
    >
    <input type="file" id="dropzoneFile" class="dropzoneFile hidden" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return {
      active,
      toggleActive,
    };
  },
};
</script>