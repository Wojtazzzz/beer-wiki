<script setup lang="ts">
defineProps<{
  id: number;
  name: string;
  ibu: number | null;
  food_pairing_count: number;
}>();
</script>

<template>
  <a :href="`/beers/${id}`">
    <article class="w-64 p-3 rounded-md shadow-md bg-[#eeeeee] flex flex-col items-center gap-6">
      <h2 class="text-center text-lg">{{ name }}</h2>

      <div class="w-full flex justify-between items-center text-sm">
        <div>
          <span>IBU: </span>
          <span>{{ ibu ?? '-' }}</span>
        </div>

        <div>
          <span>Food pairing: </span>
          <span>{{ food_pairing_count }}</span>
        </div>
      </div>
    </article>
  </a>
</template>
