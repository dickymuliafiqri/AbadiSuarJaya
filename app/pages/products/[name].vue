<script setup lang="ts">
const route = useRoute();
const selTitle = route.params.name;

// Ambil data produk berdasarkan path
const { data: post } = (await useAsyncData("products", () =>
  queryCollection("products")
    .path(("/products/" + selTitle) as string)
    .first(),
)) as Record<string, any>;
</script>

<template>
  <UContainer class="py-10">
    <UCard v-if="post" class="max-w-4xl mx-auto p-6 shadow-lg">
      <!-- Gambar Produk -->
      <img
        v-if="post.meta.image"
        :src="post.meta.image"
        :alt="post.title"
        class="w-full h-72 object-cover rounded-lg mb-6"
      />

      <!-- Info Produk -->
      <div class="mb-6 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ post.title }}</h1>
        <p class="text-primary font-semibold text-2xl">{{ post.price }}</p>
      </div>

      <!-- Deskripsi Produk -->
      <div class="prose max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <!-- Tombol WhatsApp -->
      <div class="flex justify-center items-center gap-2 mt-8 text-center">
        <UButton
          size="lg"
          color="primary"
          icon="i-mdi-whatsapp"
          :to="'https://wa.me/+6285294775689?text=Halo, saya ingin membeli produk ' + post.title"
          target="_blank"
        >
          Admin 1
        </UButton>
        <UButton
          size="lg"
          color="primary"
          icon="i-mdi-whatsapp"
          :to="'https://wa.me/+6285129870863?text=Halo, saya ingin membeli produk ' + post.title"
          target="_blank"
        >
          Admin 2
        </UButton>
      </div>
    </UCard>
  </UContainer>
</template>

<style scoped>
.text-primary {
  color: #1e88e5;
}
.prose :where(img) {
  border-radius: 0.5rem;
}
</style>
