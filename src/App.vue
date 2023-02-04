<script setup lang="ts">
import Container from './components/atoms/Container.vue';
import Header from './components/organisms/Header.vue';
</script>

<template>
  <Header />

  <main>
    <Container>
      <router-view></router-view>
    </Container>
  </main>
</template>
