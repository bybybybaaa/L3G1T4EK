---
layout: page
---

<div class="hero-section">
  <h1 class="hero-title">Безопасность в Telegram</h1>
  <p class="hero-subtitle">Интерактивный курс по защите вашего аккаунта</p>
  
  <div class="hero-description">
    Telegram — один из самых защищенных мессенджеров, но только если вы сами настроите его правильно. 
    По умолчанию многие функции безопасности отключены.
  </div>
  
  <p class="hero-action">Выберите тему ниже, чтобы начать обучение:</p>
</div>

---

<div class="sub-topics-grid">
  
  <!-- Ветка 1: Фишинг -->
  <a href="/telegram/tg_phishing_links" class="topic-card">
    <div class="topic-icon">🎣</div>
    <div class="topic-content">
      <h3>
        Фишинговые ссылки 
        <span v-if="isPhishingDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Разбор реальных примеров мошенничества и интерактивный тест на бдительность.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 2 -->
  <a href="/telegram/sessions" class="topic-card coming-soon">
    <div class="topic-icon">📱</div>
    <div class="topic-content">
      <h3>Активные сессии</h3>
      <p>Узнайте, кто еще залогинен в вашем аккаунте, и как завершить чужие сеансы.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 3 -->
  <a href="/telegram/privacy" class="topic-card coming-soon">
    <div class="topic-icon">🕵️</div>
    <div class="topic-content">
      <h3>Настройки приватности</h3>
      <p>Как скрыть номер телефона, скрыть время захода и защититься от спам-звонков.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

</div>

<script setup>
import { ref, onMounted } from 'vue'

// Переменная для отслеживания статуса
const isPhishingDone = ref(false)

onMounted(() => {
  // Проверяем ключ, который мы сохранили в конце теста
  if (typeof window !== 'undefined') {
    isPhishingDone.value = localStorage.getItem('lesson_phishing_completed') === 'true'
  }
})
</script>

<style scoped>
/* Твои существующие стили */
.hero-section { padding: 2rem 0; margin-left: 20px; }
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  background: linear-gradient(120deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle { font-size: 1.5rem; font-weight: 600; color: var(--vp-c-text-1); margin-bottom: 1.5rem; }
.hero-description { font-size: 1.2rem; line-height: 1.6; max-width: 800px; color: var(--vp-c-text-2); margin-bottom: 1rem; }
.hero-action { font-weight: 700; color: var(--vp-c-brand); text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem; }

.sub-topics-grid { display: flex; flex-direction: column; gap: 20px; margin-top: 1rem; }
.topic-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.topic-card:hover:not(.coming-soon) {
  border-color: #3b82f6;
  background: var(--vp-c-bg-alt);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.topic-icon { font-size: 2.8rem; width: 60px; text-align: center; }
.topic-content h3 { margin: 0 0 4px 0; font-size: 1.3rem; color: #3b82f6; font-weight: 700; }
.topic-content p { margin: 0; font-size: 1rem; color: var(--vp-c-text-2); }

/* Стиль для плашки "Пройдено" */
.status-badge {
  font-size: 0.8rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 10px;
  vertical-align: middle;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .hero-subtitle { font-size: 1.2rem; }
  .topic-icon { font-size: 2.2rem; }
}

.topic-card.coming-soon { opacity: 0.5; filter: grayscale(0.8); cursor: not-allowed; }
</style>