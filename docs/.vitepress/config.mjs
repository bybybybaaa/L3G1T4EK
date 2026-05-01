import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Безопасность в сети",
  description: "Практический практикум",

  // Настройка фавикона для вкладки браузера
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }]
  ],

  themeConfig: {
    // Логотип в верхнем левом углу
    logo: '/favicon.jpg',

    // ЭТО ВЕРХНЕЕ МЕНЮ — ТУТ МЫ МЕНЯЕМ ССЫЛКУ
    nav: [
      { text: 'Главная', link: '/' },
      // Текст меняем на «Отдельные темы», а в link добавляем наш якорь #topics
      { text: 'Отдельные темы', link: '/#topics' }
    ],

    // Это боковое меню (Sidebar)
    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'О проекте', link: '/' },
        ]
      },
      {
        text: 'Интерактивное обучение',
        items: [
          { text: '🛡️ Чек-лист защиты', link: '/checklist' },
          { text: '🚀 Проверка пароля', link: '/pass-check' },
          { text: '🕵️ Тренажер фишинга', link: '/phishing-quiz' },
        ]
      },
      {
        text: 'Платформы',
        items: [
          { text: 'Безопасность в MAX', link: '/max-info' },
          { text: 'Telegram и другие', link: '/other-socials' },
        ]
      }
    ]
  }
})