---
layout: page
---

<div class="hero-section">
  <h1 class="hero-title">Безопасность ВКонтакте</h1>
  <p class="hero-subtitle">Интерактивный курс по защите вашей личной страницы</p>
  
  <div class="hero-description">
    В этом году ВКонтакте исполняется 20 лет. За столь долгое пользование сервисом люди к нему привыкли и перестали ожидать угрозы. Однако ВКонтакте это не только мессенджер, но и ваша личная страница, на которой можно посмотреть ваши фотографии, увлечения, место работы/учёбы и многое другое. Всё это помогает мошенникам найти персонализированный подход к жертве, войти в доверие, заинтересовать, запугать.
  </div>
  
  <p class="hero-action">Выберите тему ниже, чтобы начать обучение:</p>
</div>

---

<div class="sub-topics-grid">
  
  <!-- Ветка 1: Распознавание мошенника -->
  <a href="/vk/fake_profiles" class="topic-card">
    <div class="topic-icon">🕵️</div>
    <div class="topic-content">
      <h3>
        Как распознать мошенника 
        <span v-if="isFakeProfileDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Учимся вычислять злоумышленников по постановочным фото, странным репостам и списку друзей.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 2: Настройки приватности -->
  <a href="/vk/privacy" class="topic-card">
    <div class="topic-icon">👁️</div>
    <div class="topic-content">
      <h3>
        Настройки приватности
        <span v-if="isPrivacyDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Как скрыть фото, друзей и активность, чтобы лишить злоумышленника возможности собрать о вас информацию.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 3: Сессии и 2FA -->
  <a href="/vk/sessions" class="topic-card">
    <div class="topic-icon">📱</div>
    <div class="topic-content">
      <h3>
        Активные сессии и 2FA
        <span v-if="isSessionsDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Настройка двухфакторной аутентификации и контроль устройств, с которых входили в ваш аккаунт.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 4: Фишинг и друзья -->
  <a href="/vk/phishing_friends" class="topic-card">
    <div class="topic-icon">🎭</div>
    <div class="topic-content">
      <h3>
        Взломанные друзья и фишинг
        <span v-if="isPhishingDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Самые популярные способы мошенничества (подставные ссылки и схемы с просьбой занять денег от имени реального человека)</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const isFakeProfileDone = ref(false)
const isPrivacyDone = ref(false)
const isSessionsDone = ref(false)
const isPhishingDone = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    isFakeProfileDone.value = localStorage.getItem('lesson_vk_fake_completed') === 'true'
    isPrivacyDone.value = localStorage.getItem('lesson_vk_privacy_completed') === 'true'
    isSessionsDone.value = localStorage.getItem('lesson_vk_sessions_completed') === 'true'
    isPhishingDone.value = localStorage.getItem('lesson_vk_phishing_completed') === 'true'
  }
})

</script>

<style scoped>
.hero-section { padding: 2rem 0; margin-left: 20px; }
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  background: linear-gradient(120deg, #4c75a3, #2787f5);
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
  border-color: #2787f5;
  background: var(--vp-c-bg-alt);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.topic-icon { font-size: 2.8rem; width: 60px; text-align: center; }
.topic-content h3 { margin: 0 0 4px 0; font-size: 1.3rem; color: #2787f5; font-weight: 700; }
.topic-content p { margin: 0; font-size: 1rem; color: var(--vp-c-text-2); }

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
</style>
