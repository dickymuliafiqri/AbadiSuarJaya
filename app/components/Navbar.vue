<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { ref } from "vue";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Produk",
    to: "/catalog",
    external: true,
  },
  {
    label: "Cara Pemesanan",
    to: "/order",
  },
]);
</script>

<template>
  <header class="nav-shell sticky top-0 z-20">
    <UContainer class="py-4">
      <div class="w-full flex flex-col items-center gap-3">
        <UNavigationMenu
          :items="items"
          color="neutral"
          variant="link"
          :highlight="false"
          :ui="{
            list: 'gap-5',
          }"
          class="w-full justify-center min-h-12"
        />
      </div>
    </UContainer>
  </header>
</template>

<style scoped>
img {
  filter: none;
}
</style>
