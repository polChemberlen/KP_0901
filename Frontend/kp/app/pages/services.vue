<template>
  <div class="min-h-screen bg-slate-50 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Наши услуги
        </h1>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Профессиональная ветеринарная помощь по доступным ценам
        </p>
      </div>

      <!-- Загрузка -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-slate-600">Загрузка услуг...</p>
      </div>

      <!-- Список услуг -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <!-- Изображение -->
          <div class="h-48 bg-slate-200 overflow-hidden">
            <img v-if="service.image" :src="`http://localhost:5000/${service.image}`" :alt="service.name"
              class="w-full h-full object-cover" />
            <div v-else class="w-full h-full flex items-center justify-center bg-accent/10">
              <svg class="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 9h-4v4h-4v-4H6V8h4V4h4v4h4v4z" />
              </svg>
            </div>
          </div>

          <!-- Контент -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-2">{{ service.name }}</h3>
            <p class="text-slate-600 text-sm mb-4 line-clamp-3">{{ service.description }}</p>
            
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-accent">{{ service.price }} ₽</span>
              <NuxtLink to="/#form"
                class="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition text-sm">
                Записаться
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Пустое состояние -->
      <div v-if="!loading && services.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-slate-300 mb-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 9h-4v4h-4v-4H6V8h4V4h4v4h4v4z" />
        </svg>
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Услуги пока не добавлены</h3>
        <p class="text-slate-600">Скоро здесь появятся наши услуги</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = ref<any[]>([])
const loading = ref(true)

const loadServices = async () => {
  try {
    loading.value = true
    const response = await $fetch('http://localhost:5000/api/services')
    services.value = response.filter((s: any) => s.isActive) || []
  } catch (error) {
    console.error('Ошибка загрузки услуг:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadServices()
})
</script>
