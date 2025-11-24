<template>
    <div class="min-h-screen bg-slate-50 py-8 px-4">
        <div class="max-w-7xl mx-auto">
            <!-- Заголовок -->
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-3xl font-bold text-slate-900">Управление услугами</h1>
                <button @click="showAddModal = true"
                    class="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                    + Добавить услугу
                </button>
            </div>

            <!-- Загрузка -->
            <div v-if="loading" class="text-center py-12">
                <p class="text-slate-600">Загрузка...</p>
            </div>

            <!-- Таблица услуг -->
            <div v-else class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table class="w-full">
                    <thead class="bg-slate-100">
                        <tr>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">ID</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Изображение</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Название</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Цена</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Статус</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="service in services" :key="service.id"
                            class="border-b border-slate-200 hover:bg-slate-50">
                            <td class="px-6 py-4 text-slate-900">{{ service.id }}</td>
                            <td class="px-6 py-4">
                                <img v-if="service.image" :src="`http://localhost:5000/${service.image}`" alt=""
                                    class="w-16 h-16 object-cover rounded" />
                                <div v-else class="w-16 h-16 bg-slate-200 rounded"></div>
                            </td>
                            <td class="px-6 py-4 text-slate-900 font-medium">{{ service.name }}</td>
                            <td class="px-6 py-4 text-slate-900">{{ service.price }} ₽</td>
                            <td class="px-6 py-4">
                                <span
                                    :class="service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                    class="px-3 py-1 rounded-full text-xs font-semibold">
                                    {{ service.isActive ? 'Активна' : 'Неактивна' }}
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex gap-2">
                                    <button @click="deleteService(service.id)"
                                        class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-sm">
                                        Удалить
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Модалка добавления/редактирования -->
            <div v-if="showAddModal" @click.self="closeModal"
                class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div class="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <h2 class="text-2xl font-bold text-slate-900 mb-6">
                        {{ editingService ? 'Редактировать услугу' : 'Добавить услугу' }}
                    </h2>

                    <form @submit.prevent="saveService" class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Название</label>
                            <input v-model="form.name" type="text" required
                                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent" />
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Описание</label>
                            <textarea v-model="form.description" rows="4"
                                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"></textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Цена (₽)</label>
                            <input v-model="form.price" type="number" step="0.01" required
                                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent" />
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-slate-900 mb-2">Изображение</label>
                            <input type="file" @change="onFileChange" accept="image/*"
                                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg" />
                        </div>

                        <div class="flex items-center gap-2">
                            <input v-model="form.isActive" type="checkbox" id="isActive" class="w-4 h-4" />
                            <label for="isActive" class="text-sm font-semibold text-slate-900">Активна</label>
                        </div>

                        <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>

                        <div class="flex gap-3 pt-4">
                            <button type="button" @click="closeModal"
                                class="flex-1 px-4 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200">
                                Отмена
                            </button>
                            <button type="submit" :disabled="saving"
                                class="flex-1 px-4 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50">
                                {{ saving ? 'Сохранение...' : 'Сохранить' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { token } = useAuth()

const services = ref<any[]>([])
const loading = ref(true)
const showAddModal = ref(false)
const editingService = ref<any>(null)
const saving = ref(false)
const error = ref('')

const form = ref({
    name: '',
    description: '',
    price: '',
    isActive: true
})

const selectedFile = ref<File | null>(null)

const loadServices = async () => {
    try {
        loading.value = true
        const response = await $fetch('http://localhost:5000/api/services')
        services.value = response || []
    } catch (err) {
        console.error('Ошибка загрузки:', err)
    } finally {
        loading.value = false
    }
}

const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (target.files && target.files[0]) {
        selectedFile.value = target.files[0]
    }
}

const saveService = async () => {
    try {
        saving.value = true
        error.value = ''

        const formData = new FormData()
        formData.append('name', form.value.name)
        formData.append('description', form.value.description)
        formData.append('price', form.value.price)
        formData.append('isActive', form.value.isActive.toString())

        if (selectedFile.value) {
            formData.append('image', selectedFile.value)
        }

        if (editingService.value) {
            await $fetch(`http://localhost:5000/api/services/${editingService.value.id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: formData
            })
        } else {
            await $fetch('http://localhost:5000/api/services', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: formData
            })
        }

        closeModal()
        await loadServices()
    } catch (err: any) {
        error.value = err.data?.message || 'Ошибка при сохранении'
    } finally {
        saving.value = false
    }
}


const toggleActive = async (service: any) => {
    try {
        await $fetch(`http://localhost:5000/api/services/${service.id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token.value}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...service,
                isActive: !service.isActive
            })
        })
        await loadServices()
    } catch (err) {
        console.error('Ошибка:', err)
    }
}

const deleteService = async (id: number) => {
    if (!confirm('Удалить услугу?')) return

    try {
        await $fetch(`http://localhost:5000/api/services/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
        await loadServices()
    } catch (err) {
        console.error('Ошибка:', err)
    }
}

const closeModal = () => {
    showAddModal.value = false
    editingService.value = null
    form.value = { name: '', description: '', price: '', isActive: true }
    selectedFile.value = null
    error.value = ''
}

onMounted(() => {
    loadServices()
})
</script>
