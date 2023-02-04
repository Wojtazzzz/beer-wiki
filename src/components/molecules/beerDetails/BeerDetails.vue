<script setup lang="ts">
import { parseNickname } from './parseNickname';
import { Beer } from '../../../utils/types';
import GoBackButton from '../../atoms/GoBackButton.vue';
import FoodPairing from '../../atoms/FoodPairing.vue';

defineProps<{
  beer?: Beer[0];
}>();
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-8">
      <img :src="beer?.image_url" alt="" class="h-[500px] w-auto" />

      <header class="flex flex-col gap-2">
        <h2 class="text-4xl font-semibold">{{ beer?.name }}</h2>

        <div class="flex gap-3">
          <span class="italic font-medium">{{ beer?.tagline }}</span>
          <span>IBU: {{ beer?.ibu ?? '-' }}</span>
          <span>IBV: {{ beer?.ibv ?? '-' }}</span>
        </div>

        <p>{{ beer?.description }}</p>
      </header>
    </div>

    <GoBackButton />
  </div>

  <FoodPairing :pairing="beer?.food_pairing" />

  <section>
    <h4>
      Author:
      {{ parseNickname(beer?.contributed_by) }}
    </h4>
  </section>
</template>
