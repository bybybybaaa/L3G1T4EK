---
layout: home
---

<div class="hero-clean">
  <div class="hero-content">
    <div class="main-header">
      <h1 class="hero-title">L3G1T4EK</h1>
      <p class="hero-subtitle">Безопасность в соцсетях</p>
      <p class="hero-tagline">Интерактивный курс по защите аккаунтов</p>
      <div class="hero-actions">
        <a href="/tg-info" class="action-btn">Начать обучение →</a>
      </div>
    </div>
    <div id="topics" class="tabs-container">
      <p class="choose-text">Если хотите выбрать определенную тему:</p>
      <div class="tabs-header">
        <div 
          v-for="(tab, index) in tabs" 
          :key="index"
          class="tab-item"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          <img v-if="tab.icon.startsWith('/')" :src="tab.icon" class="tab-icon-img" />
          <span v-else class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-title">{{ tab.title }}</span>
        </div>
      </div>
      <div class="tab-content">
        <h3>{{ tabs[activeTab].title }}</h3>
        <p>{{ tabs[activeTab].details }}</p>
        <a v-if="tabs[activeTab].link !== '#'" :href="tabs[activeTab].link" class="tab-link">Перейти к модулю →</a>
        <span v-else class="coming-soon">Раздел в разработке...</span>
      </div>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'
const activeTab = ref(0)
const tabs = [
  { 
    title: "Telegram", 
    icon: "/Telegram_logo.png",
    details: "Настройка конфиденциальности, защита от спама и проверка активных сессий в самом популярном мессенджере.",
    link: "/tg-info" 
  },
  { 
    title: "ВКонтакте", 
    icon: "/vk-logo.png", 
    details: "Как скрыть свои данные от посторонних, защитить профиль от взлома и правильно настроить двухфакторную аутентификацию.",
    link: "/vk-info"
  },
  { 
    title: "MAX", 
    icon: "/logo-max.webp", 
    details: "Специфические советы по безопасности для учебной платформы нашего университета. Защита личного кабинета и данных.",
    link: "/max-info" 
  }
]
</script>

<style scoped>
/* СБРОС СТИЛЕЙ VITEPRESS */
:deep(.VPContent) { padding-top: 0 !important; }
:deep(.VPHome) { background: #ffffff !important; }
:deep(.VPHero) { display: none !important; }

.hero-clean {
  background: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  color: #1a1a1a;
}

.hero-content {
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: #000;
  letter-spacing: -1px;
  margin-bottom: 8px;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
}

.hero-tagline {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
}

.action-btn {
  display: inline-block;
  padding: 14px 32px;
  background: #7c4dff; /* Фиолетовый акцент как на твоем скрине */
  color: #fff !important;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 77, 255, 0.3);
}

/* СТИЛИ ТАБОВ */
.tabs-container {
  margin-top: 80px;
  text-align: left;
}

.choose-text {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
  text-align: center;
}

.tabs-header {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.tab-item {
  flex: 1;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
  background: #f9f9f9;
}

.tab-item.active {
  background: #fff;
  border-color: #7c4dff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.tab-icon-img { width: 32px; height: 32px; margin-bottom: 8px; }
.tab-title { font-size: 0.9rem; font-weight: 600; color: #444; }

.tab-content {
  padding: 24px;
  background: #fcfcfc;
  border-radius: 16px;
  border: 1px solid #eee;
}

.tab-content h3 { margin: 0 0 10px 0; color: #000; }
.tab-content p { color: #555; line-height: 1.6; margin-bottom: 15px; }
.tab-link { color: #7c4dff; font-weight: 700; text-decoration: none; }
</style>