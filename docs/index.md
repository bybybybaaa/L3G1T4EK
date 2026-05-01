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

<!-- Контейнер с id для навигации -->
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
      <span class="tab-icon">{{ tab.icon }}</span>
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
    title: "Проверка паролей", 
    icon: "🔐", 
    details: "Узнай, насколько надёжен твой пароль. Наш сканер проверяет пароли по базам утечек и сложности взлома.",
    link: "/pass-check"
  },
  { 
    title: "Тренажер L3G1T4EK", 
    icon: "🕵️‍♂️", 
    details: "Практическая отработка навыков: научись отличать реальные сообщения от фишинговых атак.",
    link: "/phishing-quiz" 
  },
  { 
    title: "Гайды по защите", 
    icon: "🛡️", 
    details: "Пошаговые инструкции по настройке приватности в Telegram и VK для студентов УрФУ.",
    link: "#" 
  },
  { 
    title: "Чек-лист защиты", 
    icon: "✅", 
    details: "Проверь свои аккаунты по списку критических настроек безопасности.",
    link: "/checklist" 
  }
]
</script>

<style scoped>
/* УБИРАЕМ ОГРАНИЧЕНИЯ VITEPRESS */
:deep(.VPContent) {
  padding-top: 0 !important;
}

:deep(.VPHome) {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* ПОЛНОЭКРАННЫЙ БЛОК */
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
  overflow: hidden;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}

.hero-title {
  font-size: clamp(4.5rem, 15vw, 8rem);
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: #3b82f6; /* Немного темнее основного синего для заголовка */
  background: none;
  -webkit-text-fill-color: #3b82f6;
  text-shadow: 
    -2px -2px 0 #000,  
     2px -2px 0 #000,
    -2px  2px 0 #000,
     2px  2px 0 #000,
     0 0 20px rgba(59, 130, 246, 0.6),
     0 0 40px rgba(0, 0, 0, 1);
  margin-bottom: 10px;
  letter-spacing: -1px;
  line-height: 1;
}

.hero-subtitle {
  font-size: clamp(1.8rem, 6vw, 3rem);
  color: #fff;
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
}

.hero-tagline {
  font-size: 1.5rem; 
  font-weight: 700; 
  color: #ffffff;
  margin-bottom: 45px;
  max-width: 800px;
  line-height: 1.4;
  text-shadow: 
    0px 2px 4px rgba(0, 0, 0, 0.9), 
    0px 0px 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
  opacity: 1 !important;
}

.action-btn {
  padding: 18px 40px;
  background: #3451b2;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(52, 81, 178, 0.5);
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
  backdrop-filter: blur(20px);
  border: 1px solid var(--vp-c-divider);
  scroll-margin-top: 100px;
}

.tabs-label {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.tabs-label::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: #3451b2; /* Подчеркивание синим */
  margin: 10px auto 0;
  box-shadow: 0 0 10px rgba(52, 81, 178, 0.6);
}

.tabs-header {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.tab-item {
  flex: 1;
  padding: 15px;
  cursor: pointer;
  border-radius: 16px;
  background: var(--vp-c-default-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  color: var(--vp-c-text-2);
}

.tab-item.active {
  background: rgba(52, 81, 178, 0.1);
  border: 1px solid #3451b2;
  color: #3451b2; /* Активный текст синим */
}

.tab-icon { font-size: 2rem; }

.tab-content h3 { 
  color: #3451b2; /* Заголовок контента синим */
}

.tab-content p {
  color: var(--vp-c-text-1);
}

.tab-link { 
  color: #3451b2; 
  text-decoration: none; 
  font-weight: bold; 
}

.tab-link:hover {
  color: #3b82f6;
}

:deep(.VPHero) { display: none !important; }
</style>