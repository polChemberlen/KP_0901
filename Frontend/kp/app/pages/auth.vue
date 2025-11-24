<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full">
      <!-- Логотип и заголовок -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-slate-900 mb-2">
          {{ isLogin ? 'Вход' : 'Регистрация' }}
        </h1>
        <p class="text-slate-600">
          {{ isLogin ? 'Войдите в свой аккаунт' : 'Создайте аккаунт для записи на операцию' }}
        </p>
      </div>

      <!-- Переключатель Login / Register -->
      <div class="bg-white rounded-2xl shadow-xl p-2 mb-6">
        <div class="grid grid-cols-2 gap-2">
          <button
            @click="switchToLogin"
            :class="[
              'py-3 rounded-xl font-semibold transition-all',
              isLogin 
                ? 'bg-accent text-white shadow-lg' 
                : 'text-slate-600 hover:bg-slate-50'
            ]"
          >
            Вход
          </button>
          <button
            @click="switchToRegister"
            :class="[
              'py-3 rounded-xl font-semibold transition-all',
              !isLogin 
                ? 'bg-accent text-white shadow-lg' 
                : 'text-slate-600 hover:bg-slate-50'
            ]"
          >
            Регистрация
          </button>
        </div>
      </div>

      <!-- Форма авторизации -->
      <form v-if="isLogin" @submit.prevent="handleLogin" class="bg-white rounded-2xl shadow-xl p-8">
        <div class="space-y-5">
          <!-- Email -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Email <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="loginForm.email" 
              type="email" 
              required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <!-- Пароль -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Пароль <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="loginForm.password" 
              type="password" 
              required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Введите пароль"
            />
          </div>

          <!-- Ошибка -->
          <div v-if="error" class="bg-red-50 border-2 border-red-500 rounded-lg p-3">
            <p class="text-red-800 text-sm">{{ error }}</p>
          </div>

          <!-- Кнопка входа -->
          <button 
            type="submit" 
            :disabled="loading"
            class="w-full px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? 'Вход...' : 'Войти' }}
          </button>
        </div>
      </form>

      <!-- Форма регистрации -->
      <form v-else @submit.prevent="handleRegister" class="bg-white rounded-2xl shadow-xl p-8">
        <div class="space-y-5">
          <!-- Имя -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Имя <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="registerForm.name" 
              type="text" 
              required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Введите ваше имя"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Email <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="registerForm.email" 
              type="email" 
              required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <!-- Телефон -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Телефон <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="registerForm.phone" 
              type="tel" 
              required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <!-- Пароль -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Пароль <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="registerForm.password" 
              type="password" 
              required
              minlength="6"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Минимум 6 символов"
            />
          </div>

          <!-- Подтверждение пароля -->
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Подтвердите пароль <span class="text-red-600">*</span>
            </label>
            <input 
              v-model="registerForm.confirmPassword" 
              type="password" 
              required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Повторите пароль"
            />
          </div>

          <!-- Ошибка -->
          <div v-if="error" class="bg-red-50 border-2 border-red-500 rounded-lg p-3">
            <p class="text-red-800 text-sm">{{ error }}</p>
          </div>

          <!-- Кнопка регистрации -->
          <button 
            type="submit" 
            :disabled="loading"
            class="w-full px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? 'Регистрация...' : 'Зарегистрироваться' }}
          </button>
        </div>
      </form>

      <!-- Ссылка на главную -->
      <div class="mt-6 text-center">
        <NuxtLink to="/" class="text-slate-600 hover:text-accent transition-colors">
          ← Вернуться на главную
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { login, register } = useAuth()

const isLogin = ref(true)

const loginForm = ref({
  email: '',
  password: ''
})

const registerForm = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')

const switchToLogin = () => {
  isLogin.value = true
  error.value = ''
}

const switchToRegister = () => {
  isLogin.value = false
  error.value = ''
}

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  const result = await login({
    email: loginForm.value.email,
    password: loginForm.value.password
  })

  loading.value = false

  if (result.success) {
    navigateTo('/')
  } else {
    error.value = result.error || 'Неверный email или пароль'
  }
}

const handleRegister = async () => {
  error.value = ''
  
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    error.value = 'Пароли не совпадают'
    return
  }

  if (registerForm.value.password.length < 6) {
    error.value = 'Пароль должен содержать минимум 6 символов'
    return
  }

  loading.value = true

  const result = await register({
    name: registerForm.value.name,
    email: registerForm.value.email,
    phone: registerForm.value.phone,
    password: registerForm.value.password
  })

  loading.value = false

  if (result.success) {
    navigateTo('/')
  } else {
    error.value = result.error || 'Ошибка регистрации'
  }
}
</script>
