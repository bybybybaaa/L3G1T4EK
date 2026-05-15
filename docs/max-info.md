---
layout: page
---

<div class="hero-section">
  <h1 class="hero-title">Безопасность в МАКС</h1>
  <p class="hero-subtitle">Защита аккаунта в государственном мессенджере</p>
  
  <div class="hero-description">
    Российский сервис МАКС вызывает высокое доверие, особенно у аудитории старше 45 лет, так как ассоциируется с государством. На сегодняшний день в MAКС’е не зафиксировано принципиально новых мошеннических методов. Злоумышленники адаптируют проверенные техники: фишинг, спуфинг, имитацию сотрудников банков и госорганов, поддельные уведомления и манипуляции с переводами через посредников. Единственное, что изменилось — канал коммуникации, теперь это приложение, связанное с государством.
  </div>
  
  <p class="hero-action">Выберите тему ниже, чтобы начать обучение:</p>
</div>

---

<div class="sub-topics-grid">
  
  <!-- Ветка 1: Фейковая поддержка -->
  <a href="/max/fake_support" class="topic-card">
    <div class="topic-icon">🏛️</div>
    <div class="topic-content">
      <h3>
        «Служба поддержки» и выплаты
        <span v-if="isSupportDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Как отличить настоящие аккаунты поддержки.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 2: Файлы и Фейковые приложения -->
  <a href="/max/malware_updates" class="topic-card">
    <div class="topic-icon">📦</div>
    <div class="topic-content">
      <h3>
        Опасные файлы и «обновления»
        <span v-if="isUpdatesDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Вредоносное ПО под видом официального приложения.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

  <!-- Ветка 3: Аренда аккаунтов -->
  <a href="/max/account_rent" class="topic-card">
    <div class="topic-icon">🤝</div>
    <div class="topic-content">
      <h3>
        Ловушка «Аренды аккаунта»
        <span v-if="isRentDone" class="status-badge">✅ Пройдено</span>
      </h3>
      <p>Почему школьники и студенты сдают свои профили за копейки, и почему доступ к вашей «цифровой личности» обернётся катастрофой.</p>
    </div>
    <div class="topic-arrow">→</div>
  </a>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const isSupportDone = ref(false)
const isUpdatesDone = ref(false)
const isRentDone = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    isSupportDone.value = localStorage.getItem('lesson_max_support_completed') === 'true'
    isUpdatesDone.value = localStorage.getItem('lesson_max_updates_completed') === 'true'
    isRentDone.value = localStorage.getItem('lesson_max_rent_completed') === 'true'
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
  background: linear-gradient(120deg, #2563eb, #dc2626); /* Сине-красный градиент */
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
  border-color: #dc2626;
  background: var(--vp-c-bg-alt);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.topic-icon { font-size: 2.8rem; width: 60px; text-align: center; }
.topic-content h3 { margin: 0 0 4px 0; font-size: 1.3rem; color: #dc2626; font-weight: 700; }
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