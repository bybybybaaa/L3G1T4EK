---
layout: home
---

<div class="hero-fullscreen">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">L3G1T4EK</h1>
    <p class="hero-subtitle">Безопасность в соцсетях</p>
    <p class="hero-tagline">Интерактивный курс по защите аккаунтов</p>
    <div class="hero-actions">
      <a href="/pass-check" class="action-btn brand">Начать обучение 🚀</a>
    </div>
  </div>
</div>

<div id="topics" class="tabs-container">
  <h2 class="tabs-label">Отдельные темы:</h2>

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
/* СБРОС СТАНДАРТНЫХ ОТСТУПОВ */
:deep(.VPContent) { padding-top: 0 !important; }
:deep(.VPHome) { margin-top: 0 !important; padding-top: 0 !important; }
:deep(.VPHero) { display: none !important; }

/* ГЛАВНЫЙ ЭКРАН */
.hero-fullscreen {
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -var(--vp-nav-height); 
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
  z-index: 1;
}

.hero-content { position: relative; z-index: 2; text-align: center; padding: 20px; }

.hero-title {
  font-size: clamp(4.5rem, 15vw, 8rem);
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: #3b82f6;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 20px rgba(59, 130, 246, 0.6);
  line-height: 1;
  margin-bottom: 15px;
}

/* ЖИРНЫЙ ПОДЗАГОЛОВОК */
.hero-subtitle {
  font-size: clamp(1.8rem, 6vw, 3rem);
  color: #fff;
  font-weight: 900; 
  margin-bottom: 15px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 1), 0 0 25px rgba(59, 130, 246, 0.4);
}

/* ЖИРНЫЙ ТЕГЛАЙН С ОБВОДКОЙ */
.hero-tagline {
  font-size: 1.6rem; 
  font-weight: 800; 
  color: #ffffff;
  margin-bottom: 45px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 1), 
    -1px -1px 0 rgba(0, 0, 0, 1),
    1px -1px 0 rgba(0, 0, 0, 1),
    -1px 1px 0 rgba(0, 0, 0, 1),
    1px 1px 0 rgba(0, 0, 0, 1);
  letter-spacing: 0.5px;
}

.action-btn {
  padding: 18px 40px;
  background: #3451b2;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 0 20px rgba(52, 81, 178, 0.5);
  transition: 0.3s;
}

.action-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

/* КОНТЕЙНЕР ТАБОВ */
.tabs-container {
  max-width: 1100px;
  margin: -50px auto 100px auto;
  position: relative;
  z-index: 10;
  background: var(--vp-c-bg-soft); 
  padding: 40px 30px; 
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  backdrop-filter: blur(20px);
}

.tabs-header {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.tab-item {
  flex: 1;
  padding: 20px 10px;
  cursor: pointer;
  border-radius: 16px;
  background: var(--vp-c-default-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  min-height: 120px;
  border: 1px solid transparent;
}

.tab-item.active {
  background: rgba(52, 81, 178, 0.1);
  border: 1px solid #3451b2;
  color: #3451b2;
}

/* ИКОНКИ */
.tab-icon-img {
  width: 45px;
  height: 45px;
  object-fit: contain;
  margin-bottom: 12px;
}

.tab-title {
  font-weight: 600;
  font-size: 1rem;
}

.tab-content h3 { color: #3451b2; margin-top: 0; }
.tab-link { color: #3451b2; font-weight: bold; text-decoration: none; }
</style>