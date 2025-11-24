<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <section class="relative bg-accent text-white py-12 md:py-20 overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Центр льготной<br />стерилизации животных
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white/90 mb-6">
          г. Оренбург, пер. Свободина, 7
        </p>
        <button @click="scrollToForm"
          class="w-full sm:w-auto px-8 py-4 bg-white text-accent font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          Записаться на операцию
        </button>
      </div>
    </section>

    <!-- Стерилизация - это -->
    <section class="py-12 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 md:mb-12 text-center">
          Стерилизация — это
        </h2>

        <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          <!-- Левая колонка: список с иконками -->
          <div class="space-y-4 md:space-y-6">
            <!-- 1. Здоровье и долголетие -->
            <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div class="text-accent shrink-0">
                <svg class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M128,154.368 L192,282.36945 L226.517333,213.333333 L356.735892,213.332557 C326.677773,271.159881 271.765809,335.16014 192,405.333333 C112.234191,335.16014 57.3222272,271.159881 27.2641079,213.332557 L98.5180584,213.333333 L128,154.368 Z M268.8,1.42108547e-14 C332.423203,1.42108547e-14 384,51.5767968 384,115.2 C384,132.924092 380.921643,151.412754 374.764929,170.665986 L247.850667,170.666667 L224,122.963883 L192,186.944 L128,58.9638831 L72.128,170.666667 L9.23507092,170.665986 C3.07835697,151.412754 1.42108547e-14,132.924092 1.42108547e-14,115.2 C1.42108547e-14,51.5767968 51.5767968,1.42108547e-14 115.2,1.42108547e-14 C144.712861,1.42108547e-14 171.633638,11.098031 192.016682,29.348444 C212.383272,11.091061 239.296408,1.42108547e-14 268.8,1.42108547e-14 Z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-slate-900">Здоровье и долголетие</h3>
                <p class="text-slate-600 text-xs md:text-sm">Увеличение продолжительности жизни животного (снижается
                  риск опасных заболеваний, таких как опухоли и инфекции)</p>
              </div>
            </div>

            <!-- 2. Контроль потомства -->
            <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div class="text-accent shrink-0">
                <svg class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 36 36" fill="currentColor">
                  <path
                    d="M16.706 16.113c0 4.483-2.554 2.038-5.706 2.038c-3.151 0-5.706 2.446-5.706-2.038C5.294 13.187 7.849 10 11 10c3.151 0 5.706 3.187 5.706 6.113zM5.074 8.037c.393 1.335.007 2.625-.862 2.881c-.87.256-1.893-.619-2.286-1.955c-.393-1.335-.008-2.625.862-2.881c.87-.256 1.893.619 2.286 1.955zm15 .944c-.407 1.332-1.442 2.196-2.312 1.93c-.87-.266-1.244-1.561-.837-2.893c.407-1.332 1.442-2.196 2.312-1.93c.869.266 1.244 1.561.837 2.893zM9.964 4.122c.366 1.898-.217 3.606-1.302 3.815c-1.084.208-2.26-1.161-2.625-3.059c-.367-1.898.216-3.606 1.301-3.815C8.423.854 9.599 2.224 9.964 4.122zm5.996.778c-.387 1.894-1.578 3.25-2.66 3.029c-1.082-.221-1.646-1.936-1.259-3.83c.387-1.894 1.578-3.25 2.66-3.029c1.082.222 1.645 1.936 1.259 3.83zm14.746 27.213c0 4.483-2.555 2.038-5.706 2.038s-5.706 2.445-5.706-2.038C19.294 29.188 21.849 26 25 26s5.706 3.188 5.706 6.113zm-11.632-8.077c.394 1.336.007 2.626-.862 2.882c-.87.256-1.893-.619-2.286-1.954c-.393-1.336-.007-2.626.862-2.882c.87-.256 1.893.619 2.286 1.954zm15 .945c-.407 1.332-1.442 2.196-2.312 1.93c-.869-.266-1.244-1.561-.837-2.892c.407-1.332 1.442-2.196 2.312-1.93c.869.265 1.244 1.56.837 2.892zm-10.11-4.859c.365 1.897-.218 3.606-1.302 3.814c-1.085.209-2.261-1.16-2.626-3.059c-.365-1.898.218-3.606 1.302-3.815c1.085-.208 2.261 1.162 2.626 3.06zm5.996.778c-.388 1.893-1.578 3.25-2.66 3.029c-1.082-.222-1.647-1.937-1.26-3.83c.388-1.894 1.578-3.25 2.66-3.029c1.082.222 1.647 1.937 1.26 3.83z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-slate-900">Контроль потомства</h3>
                <p class="text-slate-600 text-xs md:text-sm">Решение проблемы нежелательного потомства</p>
              </div>
            </div>

            <!-- 3. Спокойное поведение -->
            <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div class="text-accent shrink-0">
                <svg class="w-10 h-10 md:w-12 md:h-12" viewBox="-8 0 512 512" fill="currentColor">
                  <path
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM112 223.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5zm250.8 122.8C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.3 24.6 20.5zm6.2-118.3l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5 3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.6 8.6-11 11.9-15.1 4.5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-slate-900">Спокойное поведение</h3>
                <p class="text-slate-600 text-xs md:text-sm">Устранение негативных проявлений полового поведения:
                  пропадает агрессия, метки территории, течки, стремление к побегу</p>
              </div>
            </div>

            <!-- 4. Забота о бездомных -->
            <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div class="text-accent shrink-0">
                <svg class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 512 512" fill="currentColor">
                  <path
                    d="M395.141,193.75V90.781h-47.703v55.266l-53.375-53.391L256,54.625l-38.063,38.031L0,310.609l38.063,38.063 l41.813-41.828v150.531h352.25V306.844l41.813,41.828L512,310.609L395.141,193.75z M245.578,396.719h-54.484v-54.5h54.484V396.719z M245.578,321.063h-54.484v-54.5h54.484V321.063z M320.906,396.719h-54.484v-54.5h54.484V396.719z M320.906,321.063h-54.484v-54.5 h54.484V321.063z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-slate-900">Забота о бездомных</h3>
                <p class="text-slate-600 text-xs md:text-sm">Это гуманное решение проблемы бездомных животных:
                  стерилизуя своего питомца, Вы даете шанс обрести дом тем, кто уже оказался на улице</p>
              </div>
            </div>
          </div>

          <!-- Правая колонка: вертикальный слайдер -->
          <div class="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <div class="relative h-full overflow-hidden rounded-2xl shadow-2xl">
              <div class="h-full transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateY(-${currentSlide * 100}%)` }">
                <!-- Слайд 1: Кошка -->
                <div class="h-full relative">
                  <img src="/land_images/cat1.jpg" alt="Счастливая кошка" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/40 flex items-end p-6 md:p-8">
                    <div>
                      <p class="text-white font-bold text-xl md:text-2xl mb-1 md:mb-2">Здоровые кошки</p>
                      <p class="text-white/90 text-xs md:text-sm">Стерилизация помогает им жить дольше и счастливее</p>
                    </div>
                  </div>
                </div>

                <!-- Слайд 2: Собака -->
                <div class="h-full relative">
                  <img src="/land_images/dog1.jpg" alt="Счастливая собака" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/40 flex items-end p-6 md:p-8">
                    <div>
                      <p class="text-white font-bold text-xl md:text-2xl mb-1 md:mb-2">Счастливые собаки</p>
                      <p class="text-white/90 text-xs md:text-sm">Безопасная операция для здоровья вашего питомца</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Стерилизация в нашем центре -->
    <section class="py-12 md:py-16 bg-slate-100">
      <div class="max-w-5xl mx-auto px-4 md:px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 text-center">
          Стерилизация в нашем центре
        </h2>
        <p class="text-center text-slate-600 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto">
          Мы используем современные методы и технологии для безопасной и эффективной стерилизации
        </p>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <!-- 1. Доступные цены -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Доступные цены</h3>
              <p class="text-xs md:text-sm text-slate-600">Льготные тарифы для всех</p>
            </div>
          </div>

          <!-- 2. Опытные специалисты -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Опытные специалисты</h3>
              <p class="text-xs md:text-sm text-slate-600">Профессиональные ветеринары</p>
            </div>
          </div>

          <!-- 3. Полное удаление -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 9h-4v4h-4v-4H6V8h4V4h4v4h4v4z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Полное удаление</h3>
              <p class="text-xs md:text-sm text-slate-600">Овариогистерэктомия / орхиэктомия</p>
            </div>
          </div>

          <!-- 4. Малоинвазивная хирургия -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Малоинвазивная хирургия</h3>
              <p class="text-xs md:text-sm text-slate-600">Без снятия швов и попон</p>
            </div>
          </div>

          <!-- 5. Быстрое восстановление -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92-.46 3.64-3.32 6.53-6.96 6.96v2.02c5.5-.55 9.5-5.43 8.95-10.93-.45-4.75-4.22-8.5-8.95-8.99zM11 2.06c-5.5.5-9.5 5.36-9 10.86.45 4.79 4.17 8.6 9 9.08v-2.02c-3.64-.43-6.5-3.32-6.96-6.96C3.58 9.63 6.41 6 11 5.66V3.59c-.59-.05-1.02-.06-1.42-.03.4-.03.83-.04 1.42-.03V2.06z" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Быстрое восстановление</h3>
              <p class="text-xs md:text-sm text-slate-600">Современное оборудование</p>
            </div>
          </div>

          <!-- 6. Ранняя кастрация -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Ранняя кастрация</h3>
              <p class="text-xs md:text-sm text-slate-600">С возраста 2 месяцев</p>
            </div>
          </div>
        </div>

        <!-- Информационные блоки -->
        <div class="mt-8 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-6">
          <!-- Важно знать -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-accent shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Важно знать</h3>
              <p class="text-slate-600 text-xs md:text-sm mb-2">
                Нашим методом можно стерилизовать кошек в период течки, а также беременных животных на любом сроке.
              </p>
              <p class="text-slate-600 text-xs md:text-sm">
                Животному <span class="font-semibold text-accent">НЕ НУЖНО</span> рожать 1 раз перед стерилизацией!
              </p>
            </div>
          </div>

          <!-- Работа с волонтёрами -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-green-600 shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Работа с волонтёрами</h3>
              <p class="text-slate-600 text-xs md:text-sm">
                Наш центр ведет активную работу с волонтерами и приютами по стерилизации бездомных животных
              </p>
            </div>
          </div>

          <!-- Выезды по области -->
          <div class="flex gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="text-blue-600 shrink-0">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-sm md:text-base mb-1 md:mb-2 text-slate-900">Выезды по области</h3>
              <p class="text-slate-600 text-xs md:text-sm">
                Мы осуществляем выезды в более <span class="font-semibold">30 городов и поселков</span> области и
                соседних регионов для проведения стерилизации по льготным ценам
              </p>
            </div>
          </div>
        </div>

        <!-- Ссылка на каталог услуг -->
        <div class="mt-8 md:mt-10 text-center">
          <NuxtLink to="/services"
            class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all">
            <span>Смотреть каталог услуг</span>
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Наша миссия -->
    <section class="py-12 md:py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Наша миссия</h2>

            <div class="space-y-3 md:space-y-4 text-slate-700">
              <p class="text-sm md:text-base leading-relaxed">
                Стерилизация — <span class="font-semibold text-accent">единственный гуманный и эффективный
                  способ</span>
                сокращения численности бездомных животных. Наша цель — сделать эту операцию доступной для всех слоев
                населения и безопасной для животных.
              </p>

              <p class="text-sm md:text-base leading-relaxed">
                Мы верим, что <span class="font-semibold">каждое животное заслуживает здоровую и счастливую
                  жизнь</span>. Стерилизация не только помогает контролировать популяцию, но и предотвращает множество
                заболеваний, улучшает поведение и продлевает жизнь питомцев.
              </p>
            </div>
          </div>

          <div class="relative">
            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=900&fit=crop"
              alt="Забота о животных" class="rounded-2xl shadow-2xl" />
            <div
              class="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-accent text-white p-4 md:p-6 rounded-xl shadow-xl">
              <p class="text-3xl md:text-4xl font-bold">30+</p>
              <p class="text-xs md:text-sm">городов и поселков</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section с формой записи -->
    <section ref="formSection" id="form" class="py-12 md:py-16 bg-accent text-white">
      <div class="max-w-4xl mx-auto px-4 md:px-6">
        <div class="text-center mb-8 md:mb-10">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Позаботьтесь о здоровье вашего питомца уже сегодня
          </h2>
          <p class="text-base md:text-lg text-white/90 mb-2">
            Запишитесь на консультацию или операцию
          </p>
          <p class="text-sm md:text-base text-white/80">
            Заполните форму, и мы свяжемся с вами в удобное время
          </p>
        </div>

        <!-- Форма записи -->
        <form @submit.prevent="submitForm"
          class="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-slate-900 max-w-2xl mx-auto">
          <div class="space-y-4 md:space-y-5">

            <!-- ВЫБОР ПИТОМЦА -->
            <div v-if="isAuthenticated && userPets.length > 0">
              <label class="block text-sm font-semibold text-slate-900 mb-2">
                Выберите питомца
              </label>
              <select v-model="form.petId" @change="onPetSelect"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all">
                <option value="">Новый питомец (заполнить данные ниже)</option>
                <option v-for="pet in userPets" :key="pet.id" :value="pet.id">
                  {{ pet.name }} ({{ pet.AnimalType?.name || 'Животное' }})
                </option>
              </select>
              <p class="text-xs text-slate-500 mt-1">
                Или выберите "Новый питомец" для записи другого животного
              </p>
            </div>

            <!-- Кличка питомца -->
            <div>
              <label class="block text-sm font-semibold text-slate-900 mb-2">
                Кличка питомца <span class="text-red-600">*</span>
              </label>
              <input v-model="form.name" type="text" required :disabled="!!form.petId"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all disabled:bg-slate-100"
                placeholder="Кличка вашего питомца" />
            </div>

            <!-- Номер телефона -->
            <div>
              <label class="block text-sm font-semibold text-slate-900 mb-2">
                Номер телефона <span class="text-red-600">*</span>
              </label>
              <input v-model="form.phone" type="tel" required
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="+7 (___) ___-__-__" />
            </div>

            <!-- Вид животного -->
            <div>
              <label class="block text-sm font-semibold text-slate-900 mb-2">
                Вид животного <span class="text-red-600">*</span>
              </label>
              <select v-model="form.animalTypeId" @change="loadBreeds" required :disabled="!!form.petId"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all disabled:bg-slate-100">
                <option value="">Выберите...</option>
                <option v-for="type in animalTypes" :key="type.id" :value="type.id">
                  {{ type.name }}
                </option>
              </select>
            </div>

            <!-- Порода -->
            <div v-if="form.animalTypeId">
              <label class="block text-sm font-semibold text-slate-900 mb-2">
                Порода
              </label>

              <select v-model="form.breedId" @change="onBreedSelect" :disabled="!!form.petId"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all mb-2 disabled:bg-slate-100">
                <option value="">Выберите из списка...</option>
                <option v-for="breed in breeds" :key="breed.id" :value="breed.id">
                  {{ breed.name }}
                </option>
                <option value="custom">🖊️ Ввести свою породу</option>
              </select>

              <input v-if="showCustomBreed" v-model="form.customBreed" type="text"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="Введите породу" />
            </div>

            <!-- Возраст и вес -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2">
                  Возраст (если известен)
                </label>
                <input v-model="form.age" type="text" :disabled="!!form.petId"
                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all disabled:bg-slate-100"
                  placeholder="Например: 2 года" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-900 mb-2">
                  Вес (если известен)
                </label>
                <input v-model="form.weight" type="text" :disabled="!!form.petId"
                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all disabled:bg-slate-100"
                  placeholder="Например: 4 кг" />
              </div>
            </div>

            <!-- Удобное время для звонка -->
            <div>
              <label class="block text-sm font-semibold text-slate-900 mb-2">
                Удобное время для звонка
              </label>
              <input v-model="form.callTime" type="text"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                placeholder="Например: с 10:00 до 18:00" />
            </div>

            <!-- Кнопка отправки -->
            <button type="submit" :disabled="loading"
              class="w-full px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {{ loading ? 'Отправка...' : 'Отправить заявку' }}
            </button>

            <!-- Сообщения -->
            <p v-if="success" class="text-green-600 text-center font-semibold bg-green-50 py-3 rounded-lg">
              ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </p>

            <!-- Сообщение о необходимости авторизации -->
            <div v-if="needsAuth" class="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
              <div class="flex gap-3">
                <div class="text-blue-600 shrink-0">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-blue-900 mb-2">Для записи необходима авторизация</p>
                  <p class="text-blue-800 text-sm mb-3">
                    Спасибо за интерес! Для завершения записи, пожалуйста, войдите в систему или позвоните нам
                    напрямую.
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <NuxtLink to="/auth"
                      class="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all">
                      Войти в систему
                    </NuxtLink>
                    <a href="tel:83532490470"
                      class="inline-block px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 text-sm font-semibold rounded-full hover:bg-blue-50 transition-all">
                      Позвонить: 8(3532)490-470
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p v-if="error && !needsAuth" class="text-red-600 text-center font-semibold bg-red-50 py-3 rounded-lg">
              ❌ {{ error }}
            </p>
          </div>

          <p class="text-xs text-slate-500 text-center mt-4">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </form>

        <!-- Телефон -->
        <div class="text-center mt-8">
          <p class="text-white/90 mb-3">Или позвоните нам прямо сейчас:</p>
          <a href="tel:83532490470"
            class="inline-block px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl bg-white text-accent font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            8(3532)490-470
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'



const { isAuthenticated, token, user, checkAuth } = useAuth()

const currentSlide = ref(0)
let intervalId: number | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 2
}

const formSection = ref<HTMLElement | null>(null)

const scrollToForm = () => {
  formSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const animalTypes = ref<any[]>([])
const breeds = ref<any[]>([])
const showCustomBreed = ref(false)
const userPets = ref<any[]>([])

const form = ref({
  petId: '',
  name: '',
  phone: '',
  animalTypeId: '',
  breedId: '',
  customBreed: '',
  age: '',
  weight: '',
  callTime: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')
const needsAuth = ref(false)

const loadAnimalTypes = async () => {
  try {
    const response = await $fetch('http://localhost:5000/api/types')
    animalTypes.value = response || []
  } catch (err) {
    console.error('Ошибка загрузки типов:', err)
  }
}

const loadUserPets = async () => {
  try {
    const response = await $fetch('http://localhost:5000/api/pets/my', {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
    userPets.value = response || []
  } catch (err) {
    console.error('Ошибка загрузки питомцев:', err)
  }
}

const loadBreeds = async () => {
  if (!form.value.animalTypeId) {
    breeds.value = []
    return
  }

  try {
    const selectedType = animalTypes.value.find((t: any) => t.id == form.value.animalTypeId)
    if (!selectedType) return

    const response = await $fetch(`http://localhost:5000/api/breeds?speciesId=${selectedType.speciesId}`)
    breeds.value = response || []
    form.value.breedId = ''
    form.value.customBreed = ''
    showCustomBreed.value = false
  } catch (error) {
    console.error('Ошибка загрузки пород:', error)
    breeds.value = []
  }
}

const onBreedSelect = () => {
  if (form.value.breedId === 'custom') {
    showCustomBreed.value = true
    form.value.breedId = ''
  } else {
    showCustomBreed.value = false
    form.value.customBreed = ''
  }
}

const onPetSelect = () => {
  if (form.value.petId) {
    const selectedPet = userPets.value.find((p: any) => p.id == form.value.petId)
    if (selectedPet) {
      form.value.name = selectedPet.name
      form.value.animalTypeId = selectedPet.animalTypeId
      form.value.breedId = selectedPet.breedId || ''
      form.value.customBreed = selectedPet.customBreed || ''
      form.value.age = selectedPet.age ? `${selectedPet.age} лет` : ''
      form.value.weight = selectedPet.weight ? `${selectedPet.weight} кг` : ''
      loadBreeds()
    }
  } else {
    form.value.name = ''
    form.value.animalTypeId = ''
    form.value.breedId = ''
    form.value.customBreed = ''
    form.value.age = ''
    form.value.weight = ''
    breeds.value = []
    showCustomBreed.value = false
  }
}

const submitForm = async () => {
  console.log('🔍 Token:', token.value);
  console.log('🔍 User:', user.value);
  console.log('🔍 isAuthenticated:', isAuthenticated.value);

  if (!isAuthenticated.value) {
    needsAuth.value = true
    return
  }

  loading.value = true
  error.value = ''
  success.value = false
  needsAuth.value = false

  try {
    await $fetch('http://localhost:5000/api/appointment', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      body: {
        petId: form.value.petId || null,
        name: form.value.name,
        phone: form.value.phone,
        animalTypeId: form.value.animalTypeId,
        breedId: form.value.breedId || null,
        customBreed: form.value.customBreed || null,
        age: form.value.age,
        weight: form.value.weight,
        callTime: form.value.callTime
      }
    })

    success.value = true

    form.value = {
      petId: '',
      name: '',
      phone: user.value?.phone || '',
      animalTypeId: '',
      breedId: '',
      customBreed: '',
      age: '',
      weight: '',
      callTime: ''
    }
    breeds.value = []
    showCustomBreed.value = false

  } catch (err: any) {
    console.error('Ошибка отправки:', err)
    error.value = 'Ошибка отправки. Попробуйте позже или позвоните нам.'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await checkAuth()

  intervalId = window.setInterval(() => {
    nextSlide()
  }, 5000)

  await loadAnimalTypes()

  if (isAuthenticated.value) {
    await loadUserPets()
    if (user.value?.phone) {
      form.value.phone = user.value.phone
    }
  }
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
