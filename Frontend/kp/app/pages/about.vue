<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="bg-accent text-white py-12 md:py-16">
      <div class="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">О нашем центре</h1>
        <p class="text-lg md:text-xl text-white/90">
          Помогаем животным с 2020 года
        </p>
      </div>
    </section>

    <!-- О центре -->
    <section class="py-12 md:py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Текст -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">О центре</h2>
            <p class="text-lg text-slate-700 leading-relaxed mb-4">
              Мы предоставляем доступные услуги по стерилизации животных с 2020 года.
            </p>
            <p class="text-lg text-slate-700 leading-relaxed">
              Наша миссия — <span class="font-semibold text-accent">гуманный контроль популяции бездомных животных</span>.
            </p>
          </div>

          <!-- Изображение или иконка -->
          <div class="relative">
            <div class="bg-accent/10 rounded-2xl p-8 flex items-center justify-center">
              <svg class="w-48 h-48 text-accent" viewBox="0 0 36 36" fill="currentColor">
                <path d="M16.706 16.113c0 4.483-2.554 2.038-5.706 2.038c-3.151 0-5.706 2.446-5.706-2.038C5.294 13.187 7.849 10 11 10c3.151 0 5.706 3.187 5.706 6.113zM5.074 8.037c.393 1.335.007 2.625-.862 2.881c-.87.256-1.893-.619-2.286-1.955c-.393-1.335-.008-2.625.862-2.881c.87-.256 1.893.619 2.286 1.955zm15 .944c-.407 1.332-1.442 2.196-2.312 1.93c-.87-.266-1.244-1.561-.837-2.893c.407-1.332 1.442-2.196 2.312-1.93c.869.266 1.244 1.561.837 2.893zM9.964 4.122c.366 1.898-.217 3.606-1.302 3.815c-1.084.208-2.26-1.161-2.625-3.059c-.367-1.898.216-3.606 1.301-3.815C8.423.854 9.599 2.224 9.964 4.122zm5.996.778c-.387 1.894-1.578 3.25-2.66 3.029c-1.082-.221-1.646-1.936-1.259-3.83c.387-1.894 1.578-3.25 2.66-3.029c1.082.222 1.645 1.936 1.259 3.83zm14.746 27.213c0 4.483-2.555 2.038-5.706 2.038s-5.706 2.445-5.706-2.038C19.294 29.188 21.849 26 25 26s5.706 3.188 5.706 6.113zm-11.632-8.077c.394 1.336.007 2.626-.862 2.882c-.87.256-1.893-.619-2.286-1.954c-.393-1.336-.007-2.626.862-2.882c.87-.256 1.893.619 2.286 1.954zm15 .945c-.407 1.332-1.442 2.196-2.312 1.93c-.869-.266-1.244-1.561-.837-2.892c.407-1.332 1.442-2.196 2.312-1.93c.869.265 1.244 1.56.837 2.892zm-10.11-4.859c.365 1.897-.218 3.606-1.302 3.814c-1.085.209-2.261-1.16-2.626-3.059c-.365-1.898.218-3.606 1.302-3.815c1.085-.208 2.261 1.162 2.626 3.06zm5.996.778c-.388 1.893-1.578 3.25-2.66 3.029c-1.082-.222-1.647-1.937-1.26-3.83c.388-1.894 1.578-3.25 2.66-3.029c1.082.222 1.647 1.937 1.26 3.83z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Контакты -->
    <section class="py-12 md:py-16 bg-slate-100">
      <div class="max-w-5xl mx-auto px-4 md:px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Контакты</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Контактная информация -->
          <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div class="space-y-6">
              <!-- Телефон -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-slate-600 mb-1">Основной телефон</p>
                  <a href="tel:83532490470" class="text-lg font-semibold text-slate-900 hover:text-accent transition">
                    8(3532)490-470
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-slate-600 mb-1">Электронная почта</p>
                  <a href="mailto:cls-oren@yandex.ru" class="text-lg font-semibold text-slate-900 hover:text-accent transition">
                    cls-oren@yandex.ru
                  </a>
                </div>
              </div>

              <!-- Адрес -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-slate-600 mb-1">Адрес</p>
                  <p class="text-lg font-semibold text-slate-900">г. Оренбург, пер. Свободина, 7</p>
                </div>
              </div>

              <!-- Часы работы -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-slate-600 mb-2">Часы работы</p>
                  <div class="space-y-1 text-sm text-slate-700">
                    <p><span class="font-semibold">Вт, Чт, Пт:</span> 11:00-19:00</p>
                    <p><span class="font-semibold">Сб:</span> 10:00-15:00</p>
                    <p><span class="font-semibold">Пн, Ср, Вс:</span> Выезды в область</p>
                  </div>
                </div>
              </div>

              <!-- Администратор выездов -->
              <div class="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                <p class="text-sm text-slate-600 mb-2">Администратор по выездам в область</p>
                <a href="tel:89033994114" class="text-lg font-semibold text-orange-700 hover:text-orange-800 transition">
                  8(903)399-41-14
                </a>
              </div>
            </div>
          </div>

          <!-- Карта -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9bfd08f599deaf4732073e783c51f251e37e2187158f7ef64105b66ffef6b2e1&amp;source=constructor" 
              width="100%" 
              height="100%" 
              frameborder="0"
              class="min-h-[400px] md:min-h-[500px]">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 md:py-16 bg-accent text-white">
      <div class="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Есть вопросы?</h2>
        <p class="text-lg text-white/90 mb-6">
          Свяжитесь с нами удобным для вас способом
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="tel:83532490470" 
            class="px-8 py-4 bg-white text-accent font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition">
            Позвонить
          </a>
          <NuxtLink to="/#form"
            class="px-8 py-4 bg-white text-accent font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition">
            Записаться онлайн
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'О центре - Центр льготной стерилизации животных',
  meta: [
    { name: 'description', content: 'Центр льготной стерилизации животных в Оренбурге. Работаем с 2020 года. Гуманный контроль популяции бездомных животных.' }
  ]
})
</script>
