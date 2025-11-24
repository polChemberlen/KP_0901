<template>
  <div v-if="!user" class="min-h-screen bg-slate-50 flex items-center justify-center">
    <div class="text-center">
      <p class="text-slate-600">Загрузка...</p>
    </div>
  </div>

  <div v-else class="min-h-screen bg-slate-50 py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Шапка профиля -->
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {{ user.name?.charAt(0).toUpperCase() }}
            </div>
            
            <div>
              <h1 class="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{{ user.name }}</h1>
              <p class="text-slate-600">{{ user.email }}</p>
              <p class="text-slate-600">{{ user.phone }}</p>
              <span v-if="user.role === 'ADMIN'" 
                class="inline-block mt-2 py-1 text-orange-500  text-xs font-semibold rounded-full">
                Администратор
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <NuxtLink v-if="user.role === 'ADMIN'" to="/admin/services"
              class="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-500 transition text-center">
              Панель администратора
            </NuxtLink>

            <button @click="handleLogout"
              class="px-6 py-3 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>

      <!-- Табы -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="flex border-b border-slate-200">
          <button
            @click="activeTab = 'appointments'"
            :class="[
              'flex-1 px-4 md:px-6 py-4 font-semibold transition-colors',
              activeTab === 'appointments'
                ? 'bg-accent text-white'
                : 'text-slate-600 hover:bg-slate-50'
            ]">
            Мои записи
          </button>
          <button
            @click="activeTab = 'pets'"
            :class="[
              'flex-1 px-4 md:px-6 py-4 font-semibold transition-colors',
              activeTab === 'pets'
                ? 'bg-accent text-white'
                : 'text-slate-600 hover:bg-slate-50'
            ]">
            Мои питомцы
          </button>
        </div>

        <div class="p-6 md:p-8">
          <!-- Таб: Мои записи -->
          <div v-if="activeTab === 'appointments'">
            <div v-if="loadingAppointments" class="text-center py-8">
              <p class="text-slate-600">Загрузка записей...</p>
            </div>

            <div v-else-if="appointments.length === 0" class="text-center py-12">
              <svg class="w-16 h-16 mx-auto text-slate-300 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm7 11h5v-5h-5v5z"/>
              </svg>
              <h3 class="text-lg font-semibold text-slate-900 mb-2">У вас пока нет записей</h3>
              <p class="text-slate-600 mb-4">Запишитесь на операцию на главной странице</p>
              <NuxtLink to="/#form"
                class="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                Записаться
              </NuxtLink>
            </div>

            <div v-else class="space-y-4">
              <div v-for="appointment in appointments" :key="appointment.id"
                class="border-2 border-slate-200 rounded-xl p-4 md:p-6 hover:border-accent transition-colors">
                <div class="flex flex-col gap-3">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-slate-900">Запись №{{ appointment.id }}</h3>
                    <span class="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {{ appointment.Status?.name || 'Новая' }}
                    </span>
                  </div>

                  <div class="text-sm text-slate-600 space-y-1">
                    <p v-if="appointment.Pet"><span class="font-semibold">Питомец:</span> {{ appointment.Pet.name }}</p>
                    <p v-if="appointment.appointmentDateTime"><span class="font-semibold">Дата:</span> {{ formatDate(appointment.appointmentDateTime) }}</p>
                    <p v-if="appointment.totalCost"><span class="font-semibold">Стоимость:</span> {{ appointment.totalCost }} ₽</p>
                  </div>

                  <p class="text-xs text-slate-500">
                    Создана: {{ formatDate(appointment.createdAt) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Таб: Мои питомцы -->
          <div v-if="activeTab === 'pets'">
            <div v-if="loadingPets" class="text-center py-8">
              <p class="text-slate-600">Загрузка питомцев...</p>
            </div>

            <div v-else-if="pets.length === 0" class="text-center py-12">
              <svg class="w-16 h-16 mx-auto text-slate-300 mb-4" viewBox="0 0 36 36" fill="currentColor">
                <path d="M16.706 16.113c0 4.483-2.554 2.038-5.706 2.038c-3.151 0-5.706 2.446-5.706-2.038C5.294 13.187 7.849 10 11 10c3.151 0 5.706 3.187 5.706 6.113zM5.074 8.037c.393 1.335.007 2.625-.862 2.881c-.87.256-1.893-.619-2.286-1.955c-.393-1.335-.008-2.625.862-2.881c.87-.256 1.893.619 2.286 1.955zm15 .944c-.407 1.332-1.442 2.196-2.312 1.93c-.87-.266-1.244-1.561-.837-2.893c.407-1.332 1.442-2.196 2.312-1.93c.869.266 1.244 1.561.837 2.893zM9.964 4.122c.366 1.898-.217 3.606-1.302 3.815c-1.084.208-2.26-1.161-2.625-3.059c-.367-1.898.216-3.606 1.301-3.815C8.423.854 9.599 2.224 9.964 4.122zm5.996.778c-.387 1.894-1.578 3.25-2.66 3.029c-1.082-.221-1.646-1.936-1.259-3.83c.387-1.894 1.578-3.25 2.66-3.029c1.082.222 1.645 1.936 1.259 3.83zm14.746 27.213c0 4.483-2.555 2.038-5.706 2.038s-5.706 2.445-5.706-2.038C19.294 29.188 21.849 26 25 26s5.706 3.188 5.706 6.113zm-11.632-8.077c.394 1.336.007 2.626-.862 2.882c-.87.256-1.893-.619-2.286-1.954c-.393-1.336-.007-2.626.862-2.882c.87-.256 1.893.619 2.286 1.954zm15 .945c-.407 1.332-1.442 2.196-2.312 1.93c-.869-.266-1.244-1.561-.837-2.892c.407-1.332 1.442-2.196 2.312-1.93c.869.265 1.244 1.56.837 2.892zm-10.11-4.859c.365 1.897-.218 3.606-1.302 3.814c-1.085.209-2.261-1.16-2.626-3.059c-.365-1.898.218-3.606 1.302-3.815c1.085-.208 2.261 1.162 2.626 3.06zm5.996.778c-.388 1.893-1.578 3.25-2.66 3.029c-1.082-.222-1.647-1.937-1.26-3.83c.388-1.894 1.578-3.25 2.66-3.029c1.082.222 1.647 1.937 1.26 3.83z"/>
              </svg>
              <h3 class="text-lg font-semibold text-slate-900 mb-2">У вас пока нет питомцев</h3>
              <p class="text-slate-600 mb-4">Добавьте информацию о своих питомцах</p>
              <button @click="showAddPetModal = true"
                class="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                Добавить питомца
              </button>
            </div>

            <div v-else>
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-slate-900">Мои питомцы ({{ pets.length }})</h2>
                <button @click="showAddPetModal = true"
                  class="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition text-sm">
                  + Добавить
                </button>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="pet in pets" :key="pet.id"
                  class="border-2 border-slate-200 rounded-xl p-6 hover:border-accent transition-colors">
                  <div class="flex items-start justify-between mb-4">
                    <div>
                      <h3 class="text-lg font-semibold text-slate-900">{{ pet.name }}</h3>
                    </div>
                    <button @click="deletePet(pet.id)" 
                      class="text-red-600 hover:text-red-700 transition">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                      </svg>
                    </button>
                  </div>

                  <div class="space-y-2 text-sm">
                    <p v-if="pet.Breed || pet.customBreed" class="text-slate-600">
                      <span class="font-semibold">Порода:</span> 
                      {{ pet.Breed?.name || pet.customBreed }}
                    </p>
                    <p v-if="pet.age" class="text-slate-600">
                      <span class="font-semibold">Возраст:</span> {{ pet.age }} лет
                    </p>
                    <p v-if="pet.weight" class="text-slate-600">
                      <span class="font-semibold">Вес:</span> {{ pet.weight }} кг
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модалка добавления питомца -->
    <div v-if="showAddPetModal" @click.self="closeAddPetModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl font-bold text-slate-900 mb-6">Добавить питомца</h2>

        <form @submit.prevent="addPet" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Кличка <span class="text-red-600">*</span>
            </label>
            <input v-model="newPet.name" type="text" required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Например: Мурка" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">
              Тип <span class="text-red-600">*</span>
            </label>
            <select v-model="newPet.animalTypeId" @change="loadBreeds" required
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all">
              <option value="">Выберите...</option>
              <option v-for="type in animalTypes" :key="type.id" :value="type.id">
                {{ type.name }}
              </option>
            </select>
          </div>

          <!-- Порода - СЕЛЕКТ ИЛИ ТЕКСТ -->
          <div v-if="newPet.animalTypeId">
            <label class="block text-sm font-semibold text-slate-900 mb-2">Порода</label>
            
            <!-- Селект пород -->
            <select v-model="newPet.breedId" @change="onBreedSelect"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all mb-2">
              <option value="">Выберите из списка...</option>
              <option v-for="breed in breeds" :key="breed.id" :value="breed.id">
                {{ breed.name }}
              </option>
              <option value="custom">🖊️ Ввести свою породу</option>
            </select>

            <!-- Текстовое поле (если выбрано "Ввести свою породу") -->
            <input v-if="showCustomBreed" v-model="newPet.customBreed" type="text"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Введите породу" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">Возраст (лет)</label>
            <input v-model="newPet.age" type="number" min="0"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Например: 2" />
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-900 mb-2">Вес (кг)</label>
            <input v-model="newPet.weight" type="number" step="0.1" min="0"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              placeholder="Например: 4.5" />
          </div>

          <p v-if="petError" class="text-red-600 text-sm">{{ petError }}</p>

          <div class="flex gap-3 pt-4">
            <button type="button" @click="closeAddPetModal"
              class="flex-1 px-4 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition">
              Отмена
            </button>
            <button type="submit" :disabled="addingPet"
              class="flex-1 px-4 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition disabled:opacity-50">
              {{ addingPet ? 'Добавление...' : 'Добавить' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, token, logout, checkAuth, isAuthenticated } = useAuth()

const activeTab = ref('appointments')
const showAddPetModal = ref(false)
const showCustomBreed = ref(false)

// Записи
const appointments = ref<any[]>([])
const loadingAppointments = ref(true)

// Питомцы
const pets = ref<any[]>([])
const loadingPets = ref(true)
const animalTypes = ref<any[]>([])
const breeds = ref<any[]>([])

// Новый питомец
const newPet = ref({
  name: '',
  animalTypeId: '',
  breedId: '',
  customBreed: '',
  age: '',
  weight: ''
})
const addingPet = ref(false)
const petError = ref('')

// Загрузка записей
const loadAppointments = async () => {
  try {
    loadingAppointments.value = true
    const response = await $fetch('http://localhost:5000/api/appointment', {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
    appointments.value = response.filter((apt: any) => apt.userId === user.value.id) || []
  } catch (error) {
    console.error('Ошибка загрузки записей:', error)
    appointments.value = []
  } finally {
    loadingAppointments.value = false
  }
}

// Загрузка питомцев
const loadPets = async () => {
  try {
    loadingPets.value = true
    const response = await $fetch('http://localhost:5000/api/pets/my', {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
    pets.value = response || []
  } catch (error) {
    console.error('Ошибка загрузки питомцев:', error)
    pets.value = []
  } finally {
    loadingPets.value = false
  }
}

// Загрузка типов животных
const loadAnimalTypes = async () => {
  try {
    const response = await $fetch('http://localhost:5000/api/types')
    animalTypes.value = response || []
  } catch (error) {
    console.error('Ошибка загрузки типов:', error)
  }
}

// Загрузка пород по типу животного
const loadBreeds = async () => {
  if (!newPet.value.animalTypeId) {
    breeds.value = []
    return
  }

  try {
    const selectedType = animalTypes.value.find(t => t.id == newPet.value.animalTypeId)
    if (!selectedType) return

    const response = await $fetch(`http://localhost:5000/api/breeds?speciesId=${selectedType.speciesId}`)
    breeds.value = response || []
    newPet.value.breedId = ''
    newPet.value.customBreed = ''
    showCustomBreed.value = false
  } catch (error) {
    console.error('Ошибка загрузки пород:', error)
    breeds.value = []
  }
}

// Обработка выбора породы
const onBreedSelect = () => {
  if (newPet.value.breedId === 'custom') {
    showCustomBreed.value = true
    newPet.value.breedId = ''
  } else {
    showCustomBreed.value = false
    newPet.value.customBreed = ''
  }
}

// Добавление питомца
const addPet = async () => {
  try {
    petError.value = ''
    addingPet.value = true
    
    const petData = {
      ...newPet.value,
      breedId: newPet.value.breedId || null,
    }
    
    await $fetch('http://localhost:5000/api/pets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: petData
    })

    closeAddPetModal()
    await loadPets()
  } catch (error: any) {
    console.error('Ошибка добавления питомца:', error)
    petError.value = error.data?.message || 'Ошибка при добавлении питомца'
  } finally {
    addingPet.value = false
  }
}

// Закрытие модалки с очисткой
const closeAddPetModal = () => {
  showAddPetModal.value = false
  newPet.value = { name: '', animalTypeId: '', breedId: '', customBreed: '', age: '', weight: '' }
  breeds.value = []
  showCustomBreed.value = false
}

// Удаление питомца
const deletePet = async (petId: number) => {
  if (!confirm('Вы уверены, что хотите удалить этого питомца?')) return

  try {
    await $fetch(`http://localhost:5000/api/pets/${petId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
    await loadPets()
  } catch (error) {
    console.error('Ошибка удаления питомца:', error)
    alert('Ошибка при удалении питомца')
  }
}

// Форматирование даты
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Выход
const handleLogout = () => {
  logout()
}

onMounted(async () => {
  await checkAuth()
  
  if (!isAuthenticated.value) {
    navigateTo('/auth')
    return
  }
  
  await Promise.all([
    loadAppointments(),
    loadPets(),
    loadAnimalTypes()
  ])
})
</script>
