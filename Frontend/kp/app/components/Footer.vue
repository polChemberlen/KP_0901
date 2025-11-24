<template>
    <footer class="mt-10 bg-slate-950 text-slate-200">
        <div class="h-1 bg-gradient-to-r from-accent to-orange-400"></div>

        <div class="max-w-5xl mx-auto px-6 py-8 flex flex-wrap gap-8">
            <!-- О центре -->
            <div class="flex-1 min-w-[220px]">
                <h2 class="text-lg font-semibold mb-1">Центр льготной стерилизации</h2>
                <p class="text-sm text-slate-400">
                    Мы предоставляем доступные услуги по стерилизации животных с 2020 года. Наша миссия — гуманный
                    контроль популяции бездомных животных.
                </p>
            </div>

            <!-- Навигация -->
            <div class="flex-1 min-w-[220px] space-y-1">
                <h3 class="text-sm font-semibold mb-1">Навигация</h3>
                <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
                    class="block text-sm text-slate-400 hover:text-accent transition">
                    {{ link.label }}
                </NuxtLink>
            </div>

            <!-- Режим работы -->
            <div class="flex-1 min-w-[220px]">
                <h3 class="text-sm font-semibold mb-2">Режим работы</h3>
                <div class="space-y-1.5 text-sm text-slate-400">
                    <!-- Основное расписание -->
                    <div class="flex items-start gap-2">
                        <span class="text-accent">•</span>
                        <div>
                            <div class="font-medium text-slate-300">Вт, Чт, Пт</div>
                            <div>11:00 — 19:00</div>
                        </div>
                    </div>

                    <div class="flex items-start gap-2">
                        <span class="text-accent">•</span>
                        <div>
                            <div class="font-medium text-slate-300">Суббота</div>
                            <div>10:00 — 15:00</div>
                        </div>
                    </div>

                    <div class="flex items-start gap-2">
                        <span class="text-accent">•</span>
                        <div>
                            <div class="font-medium text-slate-300">Пн, Ср, Вс</div>
                            <div>Выезды в область</div>
                        </div>
                    </div>

                    <!-- Разделитель -->
                    <div class="border-t border-slate-700 pt-2 mt-3">
                        <div class="text-xs text-slate-500 mb-1">Администратор по выездам:</div>
                        <a href="tel:89033994114" class="text-slate-300 hover:text-accent transition font-medium">
                            8(903)399-41-14
                        </a>
                    </div>
                </div>
            </div>

            <!-- Контакты -->
            <div class="flex-1 min-w-[220px] space-y-1">
                <h3 class="text-sm font-semibold mb-1">Контакты</h3>
                <p class="text-sm text-slate-400">г. Оренбург, пер. Свободина, 7</p>
                <a href="tel:83532490470" class="block text-sm text-slate-400 hover:text-accent transition">
                    8(3532)490-470
                </a>
                <a href="mailto:cls-oren@yandex.ru" class="block text-sm text-slate-400 hover:text-accent transition">
                    cls-oren@yandex.ru
                </a>

                <!-- Социальные сети -->
                <div class="pt-3">
                    <h4 class="text-xs font-semibold mb-2">Мы в соцсетях</h4>
                    <div class="flex items-center gap-3">
                        <!-- ВКонтакте -->
                        <a href="https://vk.com/cls_orenburg" target="_blank" rel="noopener noreferrer"
                            class="text-white hover:text-accent transition-colors">
                            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.802 12.298s1.617 1.597 2.017 2.336a.127.127 0 0 1 .018.035c.163.273.203.487.123.645-.135.261-.592.392-.747.403h-2.858c-.199 0-.613-.052-1.117-.4-.385-.269-.768-.712-1.139-1.145-.554-.643-1.033-1.201-1.518-1.201a.548.548 0 0 0-.18.03c-.367.116-.833.639-.833 2.032 0 .436-.344.684-.585.684H9.674c-.446 0-2.768-.156-4.827-2.327C2.324 10.732.058 5.4.036 5.353c-.141-.345.155-.533.475-.533h2.886c.387 0 .513.234.601.444.102.241.48 1.205 1.1 2.288 1.004 1.762 1.621 2.479 2.114 2.479a.527.527 0 0 0 .264-.07c.644-.354.524-2.654.494-3.128 0-.092-.001-1.027-.331-1.479-.236-.324-.638-.45-.881-.496.065-.094.203-.238.38-.323.441-.22 1.238-.252 2.029-.252h.439c.858.012 1.08.067 1.392.146.628.15.64.557.585 1.943-.016.396-.033.842-.033 1.367 0 .112-.005.237-.005.364-.019.711-.044 1.512.458 1.841a.41.41 0 0 0 .217.062c.174 0 .695 0 2.108-2.425.62-1.071 1.1-2.334 1.133-2.429.028-.053.112-.202.214-.262a.479.479 0 0 1 .236-.056h3.395c.37 0 .621.056.67.196.082.227-.016.92-1.566 3.016-.261.349-.49.651-.691.915-1.405 1.844-1.405 1.937.083 3.337z">
                                </path>
                            </svg>
                        </a>

                        <!-- Telegram -->
                        <a href="https://t.me/CLSOrenburg" target="_blank" rel="noopener noreferrer"
                            class="text-white hover:text-accent transition-colors">
                            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Нижняя часть -->
        <div class="border-t border-slate-800 bg-black/80">
            <div class="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-2">
                <span class="text-xs text-slate-500">
                    © {{ new Date().getFullYear() }} Центр льготной стерилизации. Все права защищены.
                </span>
            </div>
        </div>
    </footer>
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
</script>
