import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Безопасность в сети",
  description: "Практический практикум",
  themeConfig: {
    // Это верхнее меню
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Тренажер фишинга', link: '/phishing-quiz' }
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