<template>
  <div class="w-72 h-72 bg-white rounded-lg border border-secondary-300 shadow-md">
    <a href="#">
      <img class="rounded-lg w-72 h-36" :src="img" alt="" />
    </a>
    <div class="p-2 text-center">
      <h3 class="font-semibold">{{ title }}</h3>

      <div class="grid grid-cols-2">
        <p> {{description}} </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>
