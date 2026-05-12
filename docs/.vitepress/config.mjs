import { defineConfig } from 'vitepress'

export default defineConfig({
  // Название вкладки в браузере
  title: "L3G1T4EK",
  
  // 1. ПОЛНОСТЬЮ ОТКЛЮЧАЕМ ТЕМНУЮ ТЕМУ (убирает Appearance)
  appearance: false,

  themeConfig: {
    // 2. Текст в верхнем левом углу
    siteTitle: 'Главное меню L3G1T4EK', 

    // 3. Только кнопка "О проекте" в меню
    nav: [
      { text: 'О проекте', link: '/about' }
    ],

    // 4. Убираем оглавление (On this page) со всех страниц
    outline: false,

    // 5. Убираем надпись "Edit this page" и время обновления, если они есть
    editLink: false,
    lastUpdated: false
  }
})