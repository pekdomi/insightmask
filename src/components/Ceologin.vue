<script setup>
  import { RouterLink } from "vue-router"
</script>
<template>
  <div class="card w-96  bg-base-100 shadow-xl top-10">
    <figure><img src="/ceobutton.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Céges felület</h2>
      <p>Beérkező visszajelzések listája Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="card-actions justify-end">
        <div>
          <RouterLink to="/login"><button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Megnézem a bejelentéseket
              </span>
            </button></RouterLink>
        </div>
    </div>
  </div>
</div></template>