<script setup lang="ts">
import { parseNickname } from './parseNickname';
import type { Beer } from '../../../utils/types';
import FoodPairing from '../../atoms/FoodPairing.vue';
import { useRouter } from 'vue-router';
import Button from '../../atoms/Button.vue';

const props = defineProps<{
  beer?: Beer[number];
}>();

const { back } = useRouter();

const parsedNickname = parseNickname(props.beer?.contributed_by);
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
          <span>ABV: {{ beer?.abv ?? '-' }}</span>
        </div>

        <p>{{ beer?.description }}</p>
      </header>
    </div>

    <Button
      variant="primary"
      aria-label="Redirect to previous page"
      type="button"
      class="h-fit"
      @click="back"
      >Back</Button
    >
  </div>

  <FoodPairing :pairing="beer?.food_pairing" />

  <section>
    <h4>
      Author:
      {{ parsedNickname }}
    </h4>
  </section>
</template>
