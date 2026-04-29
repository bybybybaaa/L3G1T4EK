---
layout: home

hero:
  name: "L3G1T4EK"
  text: "Безопасность в соцсетях"
  tagline: "Интерактивный курс в стиле Tame Impala"
  actions:
    - theme: brand
      text: Начать обучение 🚀
      link: /pass-check

---

<div class="tabs-container">
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
.tabs-container {
  margin: 40px 0;
  background: rgba(30, 30, 30, 0.4);
  padding: 25px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tabs-header {
  display: flex;
  gap: 12px; /* Чуть уменьшил зазор для 4-х вкладок */
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
  overflow-x: auto; /* На случай узкого экрана */
}

.tab-item {
  flex: 1;
  min-width: 120px; /* Чтобы текст не слипался */
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.tab-item.active {
  background: rgba(52, 81, 178, 0.3);
  border: 1px solid #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

.tab-icon { font-size: 1.6em; }
.tab-title { font-weight: 600; font-size: 0.85em; text-align: center; }

.tab-content h3 { margin-top: 0; color: #00ffff; }
.tab-link { color: #00ffff; font-weight: bold; text-decoration: none; display: block; margin-top: 15px; }
.coming-soon { color: #888; font-style: italic; display: block; margin-top: 15px; }

/* Твой Hero стиль */
:deep(.VPHero) {
  background-image: url('/background.jpg') !important;
  background-size: cover !important;
  background-position: center !important;
  background-blend-mode: overlay !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  border-radius: 20px;
}

:deep(.VPHero .name) {
  background: linear-gradient(120deg, #3451b2 0%, #00ffff 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-family: 'Courier New', monospace !important;
  font-weight: 900 !important;
}
</style>