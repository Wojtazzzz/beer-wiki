<script setup lang="ts">
import BeerCard from '../atoms/BeerCard.vue';
</script>

<template>
  <div class="container mx-auto my-8">
    <ul role="list" class="flex flex-wrap gap-4">
      <li>
        <BeerCard />
      </li>

      <li>
        <BeerCard />
      </li>

      <li>
        <BeerCard />
      </li>
    </ul>
  </div>
</template>
