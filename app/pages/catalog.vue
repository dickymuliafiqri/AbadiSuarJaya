<script setup lang="ts">
const { data: posts } = await useAsyncData("products", () => queryCollection("products").all(), {
  server: false,
});
</script>

<template>
  <div class="page-shell">
    <section class="section-gap">
      <UContainer>
        <div class="text-center space-y-3">
          <div class="section-kicker">Katalog</div>
          <h1 class="section-title">Temukan furnitur yang sesuai kebutuhan ruang Anda.</h1>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Pilih desain dan material terbaik, lalu lihat detail produk untuk informasi ukuran, harga, dan opsi custom.
          </p>
          <div class="text-sm text-gray-500">Total produk: {{ posts?.length || 0 }}</div>
        </div>
      </UContainer>
    </section>

    <section class="section-gap pt-0">
      <UContainer>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="post in posts" :key="post.id" class="card-soft group overflow-hidden rounded-2xl ring-0">
            <div class="relative rounded-md overflow-hidden">
              <img :src="post.image.src as string" :alt="post.title" class="h-56 w-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
            </div>
            <div class="p-5 space-y-3">
              <div class="text-sm text-gray-500">Kategori: Furniture</div>
              <h3 class="text-lg font-semibold">{{ post.title }}</h3>
              <div class="flex items-center justify-between">
                <p class="text-primary font-semibold">Rp. {{ post.price }}</p>
                <NuxtLink :external="true" :to="`${post.path}`" class="text-sm font-semibold text-slate-700">
                  Lihat detail →
                </NuxtLink>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="section-gap pt-0">
      <UContainer>
        <div
          class="card-soft rounded-2xl p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <div class="section-kicker">Custom Order</div>
            <h2 class="section-title">Butuh ukuran khusus atau desain tertentu?</h2>
            <p class="text-gray-600 max-w-xl">
              Kirim referensi atau ukuran ruangan Anda, tim kami akan bantu memberikan solusi terbaik.
            </p>
          </div>
          <UButton size="lg" to="/order" variant="solid" class="brand-button">Konsultasi Pemesanan</UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
.text-primary {
  color: #1e88e5;
}
</style>
