<script setup lang="ts">
const route = useRoute();
const selTitle = route.params.name;

// Ambil data produk berdasarkan path
const { data: post } = (await useAsyncData(
  "products",
  () =>
    queryCollection("products")
      .path(("/products/" + selTitle) as string)
      .first(),
  {
    server: false,
  },
)) as Record<string, any>;
</script>

<template>
  <div class="page-shell">
    <UContainer class="section-gap">
      <div v-if="post" class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div class="space-y-6">
          <div class="rounded-2xl overflow-hidden card-soft">
            <img v-if="post.image?.src" :src="post.image?.src" :alt="post.title" class="w-full h-80 object-cover" />
          </div>
          <div class="card-soft rounded-2xl p-6">
            <div class="section-kicker">Deskripsi</div>
            <h2 class="section-title mb-4">Detail Produk</h2>
            <div class="prose max-w-none">
              <ContentRenderer :value="post" />
            </div>
          </div>
        </div>

        <div class="space-y-6 lg:sticky lg:top-24">
          <div class="card-soft rounded-2xl p-6 space-y-4">
            <div>
              <div class="section-kicker">Produk</div>
              <h1 class="section-title">{{ post.title }}</h1>
            </div>
            <p class="text-primary font-semibold text-2xl">{{ post.meta.price }}</p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <span class="text-lg">✅</span>
                <span>Bisa custom ukuran dan warna sesuai ruang Anda.</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-lg">✅</span>
                <span>Finishing rapi, tahan lama, mudah dibersihkan.</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-lg">✅</span>
                <span>Konsultasi desain sebelum produksi dimulai.</span>
              </div>
            </div>
          </div>

          <div class="card-soft rounded-2xl p-6 text-center">
            <div class="section-kicker">Konsultasi</div>
            <p class="text-gray-600 mb-4">Tanyakan stok, estimasi produksi, dan jadwal pengiriman melalui WhatsApp.</p>
            <div class="flex flex-col gap-3">
              <UButton
                size="lg"
                icon="i-mdi-whatsapp"
                variant="solid"
                class="brand-button"
                :to="'https://wa.me/+6285294775689?text=Halo, saya ingin membeli produk ' + post.title"
                target="_blank"
              >
                Admin 1
              </UButton>
              <UButton
                size="lg"
                icon="i-mdi-whatsapp"
                variant="solid"
                class="brand-button"
                :to="'https://wa.me/+6285129870863?text=Halo, saya ingin membeli produk ' + post.title"
                target="_blank"
              >
                Admin 2
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.text-primary {
  color: #1e88e5;
}
.prose :where(img) {
  border-radius: 0.5rem;
}
</style>
