<template>
  <div class="min-h-screen bg-slate-50 py-12 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Полезные статьи
        </h1>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Всё, что нужно знать о стерилизации животных
        </p>
      </div>

      <!-- Список статей -->
      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink v-for="article in articles" :key="article.id" 
          :to="article.link"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
          <div class="p-6">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition">
                <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition">
                  {{ article.title }}
                </h3>
                <p class="text-slate-600 text-sm line-clamp-2">{{ article.excerpt }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between text-sm text-slate-500">
              <span>{{ article.readTime }} мин чтения</span>
              <span class="text-accent font-semibold group-hover:translate-x-1 transition">
                Читать →
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: 'Преимущества малоинвазивной хирургии',
    excerpt: 'Современные методы стерилизации обеспечивают быстрое восстановление и минимум дискомфорта для животного.',
    readTime: 5,
    link: '#'
  },
  {
    id: 2,
    title: 'Стерилизованное животное – здоровое животное',
    excerpt: 'Научно доказано: стерилизация значительно снижает риск онкологических и других заболеваний.',
    readTime: 7,
    link: '#'
  },
  {
    id: 3,
    title: 'Как подготовить животное к стерилизации',
    excerpt: 'Простые рекомендации для безопасной подготовки вашего питомца к операции.',
    readTime: 4,
    link: '#'
  },
  {
    id: 4,
    title: 'С какого возраста можно стерилизовать животных',
    excerpt: 'Оптимальный возраст для стерилизации и преимущества ранней кастрации.',
    readTime: 6,
    link: '#'
  },
  {
    id: 5,
    title: 'Стерилизация – гуманный способ сокращения численности',
    excerpt: 'Единственный эффективный метод контроля популяции бездомных животных.',
    readTime: 5,
    link: '#'
  },
  {
    id: 6,
    title: 'О вреде гормональной контрацепции животных',
    excerpt: 'Почему гормональные препараты опасны для здоровья ваших питомцев.',
    readTime: 6,
    link: '#'
  }
]

useHead({
  title: 'Статьи - Центр льготной стерилизации животных',
  meta: [
    { name: 'description', content: 'Полезные статьи о стерилизации животных: преимущества, подготовка, возраст, здоровье питомцев.' }
  ]
})
</script>
