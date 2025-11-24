<template>
  <header class="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
    <!-- Десктоп версия -->
    <div class="hidden lg:block">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <img src="/KP_logo.svg" alt="Логотип" class="h-16 w-16 object-contain" />
          <div class="text-base font-bold tracking-wide text-slate-900 whitespace-nowrap">
            Центр льготной стерилизации г. Оренбург
          </div>
        </NuxtLink>

        <div class="text-xs italic text-slate-600 whitespace-nowrap hidden xl:block">
          Добрых рук на всех не хватит…. Если действительно любишь – стерилизуй
        </div>

        <div class="flex-grow"></div>

        <div class="flex items-center gap-3 shrink-0">
          <a href="tel:83532490470"
            class="text-base font-semibold text-slate-900 hover:text-accent transition whitespace-nowrap">
            8(3532)490-470
          </a>

          <button @click="scrollToForm"
            class="px-4 py-1.5 rounded-full bg-accent text-white text-sm font-semibold shadow-sm hover:bg-orange-600 active:scale-95 transition whitespace-nowrap">
            Записаться
          </button>

          <NuxtLink v-if="!isAuthenticated" to="/auth"
            class="px-4 py-1.5 rounded-full bg-accent text-white text-sm font-semibold shadow-sm hover:bg-orange-600 active:scale-95 transition whitespace-nowrap">
            Войти
          </NuxtLink>

          <NuxtLink v-else to="/profile"
            class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition">
            <svg class="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            <span class="text-sm font-semibold text-slate-900">{{ user?.name || 'Профиль' }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center border-t border-slate-100">
        <nav class="flex items-center gap-2">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
            class="px-4 py-2 rounded-full text-sm text-slate-600 hover:bg-orange-50 hover:text-slate-900 transition whitespace-nowrap"
            active-class="bg-accent text-white">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Мобильная версия -->
    <div class="lg:hidden">
      <div class="flex items-center justify-between px-4 py-3">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/KP_logo.svg" alt="Логотип" class="h-12 w-12 object-contain" />
          <div class="text-sm font-bold text-slate-900">
            Центр стерилизации
          </div>
        </NuxtLink>

        <button @click="toggleMobileMenu" class="p-2 hover:bg-slate-100 rounded-lg transition">
          <svg v-if="!showMobileMenu" class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <Transition enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
        <div v-if="showMobileMenu" class="border-t border-slate-200 bg-white">
          <nav class="px-4 py-3 space-y-1">
            <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="closeMobileMenu"
              class="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 transition"
              active-class="bg-accent text-white">
              {{ link.label }}
            </NuxtLink>
          </nav>

          <hr class="border-slate-200">

          <div class="px-4 py-3 space-y-2">
            <a href="tel:83532490470"
              class="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-200 transition">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              8(3532)490-470
            </a>

            <button @click="scrollToFormAndClose"
              class="w-full px-4 py-3 bg-accent text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-orange-600 transition">
              Записаться на операцию
            </button>

            <NuxtLink v-if="!isAuthenticated" to="/auth" @click="closeMobileMenu"
              class="block w-full px-4 py-3 bg-slate-900 text-white text-sm font-semibold text-center rounded-lg hover:bg-slate-800 transition">
              Войти в аккаунт
            </NuxtLink>

            <NuxtLink v-else to="/profile" @click="closeMobileMenu"
              class="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition">
              <svg class="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
              <span class="font-semibold text-slate-900">{{ user?.name || 'Профиль' }}</span>
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
interface NavLink {
  label: string
  to: string
}

const links: NavLink[] = [
  { label: 'Главная', to: '/' },
  { label: 'Услуги', to: '/services' },
  { label: 'Статьи', to: '/articles' },
  { label: 'О нас', to: '/about' },
]

const { isAuthenticated, user, checkAuth } = useAuth()

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

onMounted(async () => {
  await checkAuth()
})

const scrollToForm = () => {
  if (process.client) {
    if (window.location.pathname === '/') {
      const formSection = document.querySelector('[data-form-section]')
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigateTo('/#form')
    }
  }
}

const scrollToFormAndClose = () => {
  closeMobileMenu()
  setTimeout(() => {
    scrollToForm()
  }, 300)
}
</script>
