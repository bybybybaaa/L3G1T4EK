---
layout: page
---

<br>
<a href="/vk-info" class="back-link">← Назад к курсу ВКонтакте</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
    <span>👁️</span>
    <span style="background: linear-gradient(120deg, #4c75a3, #2787f5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Настройки приватности
    </span>
  </h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #2787f5; margin-bottom: 30px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;"><strong>Зачем закрывать страницу?</strong> Излишняя публичность ВКонтакте помогает мошенникам. По открытым фото, списку групп и постам злоумышленник <strong>собирает убедительную легенду</strong>. Он может скопировать ваш стиль общения, узнать круг ваших близких и использовать реальные события из вашей жизни, чтобы обмануть ваших знакомых или вас самих.</p>
  </div>
  
  <h2 style="margin-top: 0; margin-bottom: 20px;">🛡️ Что нужно скрыть в первую очередь:</h2>
  
  <div class="theory-grid">
    <div class="theory-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.3rem;">👥 Список друзей</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Если ваши друзья открыты, мошенник может создать копию вашей страницы и начать писать им от вашего имени. Скрывая друзей, вы защищаете их от обмана.</p>
    </div>
    <div class="theory-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.3rem;">📸 Личные фото</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Фотографии — главный инструмент для создания фейков и шантажа. Доступ к альбомам должен быть только у тех, кого вы знаете лично.</p>
    </div>
    <div class="theory-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.3rem;">🗂️ Список сообществ</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Показывает ваши увлечения, место работы или учебы. Это идеальная база для социальной инженерии (например, написать вам якобы от лица вашего начальника).</p>
    </div>
    <div class="theory-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.3rem;">ℹ️ Основная информация</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Дата рождения и телефон — это основа для взлома банковских аккаунтов и подбора паролей. Обязательно скройте эти данные от посторонних.</p>
    </div>
  </div>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## ⚙️ Тренажер: Настрой свою страницу

<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">
  Примените полученные знания: выберите правильные параметры приватности (в разделе «Настройки → Приватность» в ВК), чтобы защитить аккаунт от сбора досье. Шкала безопасности заполнится на 100%, когда вы закроете все уязвимости.
</p>

<div class="security-meter-box">
  <div class="meter-header">
    <span>Уровень защиты профиля:</span>
    <span :style="{ color: meterColor, fontWeight: 'bold' }">{{ securityScore }}%</span>
  </div>
  <div class="meter-track">
    <div class="meter-fill" :style="{ width: securityScore + '%', background: meterColor }"></div>
  </div>
</div>

<div class="settings-simulator">
  <div class="setting-item" v-for="(setting, key) in settingsData" :key="key">
    <div class="setting-info">
      <h3 style="margin: 0; color: var(--vp-c-text-1);">{{ setting.icon }} {{ setting.title }}</h3>
      <p style="margin: 5px 0 0 0; font-size: 0.95rem; color: var(--vp-c-text-2);">{{ setting.desc }}</p>
    </div>
    <div class="options-group">
      <button v-for="opt in setting.options" :key="opt.value" 
              @click="selectOption(key, opt.value)" 
              :class="{ active: currentConfig[key] === opt.value }" 
              class="opt-btn">
        {{ opt.label }}
      </button>
    </div>
  </div>
</div>

<div v-if="isFullySecure" class="success-alert">
  <p style="font-size: 1.2rem; font-weight: 700; margin: 0 0 10px 0;">🎉 Идеальная настройка!</p>
  <p style="margin: 0;">Вы скрыли свои фотографии, увлечения и контакты от посторонних глаз. Теперь злоумышленники не смогут собрать о вас информацию или выйти на ваших друзей.</p>
  <button @click="finishLesson" class="finish-btn">Завершить урок</button>
</div>

<script setup>
import { ref, computed } from 'vue'

const settingsData = {
  photos: {
    icon: '📸',
    title: 'Кто видит мои сохранённые фотографии',
    desc: 'Кто сможет просматривать ваши альбомы и сохраненные картинки?',
    options:[
      { label: 'Все пользователи', value: 'all' },
      { label: 'Только друзья', value: 'friends' },
      { label: 'Только я', value: 'nobody' }
    ],
    safeValues:['friends', 'nobody']
  },
  friends: {
    icon: '👥',
    title: 'Кто видит список моих друзей',
    desc: 'Кто сможет изучать ваш круг общения?',
    options:[
      { label: 'Все пользователи', value: 'all' },
      { label: 'Только друзья', value: 'friends' },
      { label: 'Только я', value: 'nobody' }
    ],
    safeValues:['friends', 'nobody']
  },
  groups: {
    icon: '🗂️',
    title: 'Кто видит список моих сообществ',
    desc: 'Кто сможет узнать о ваших увлечениях и работе?',
    options:[
      { label: 'Все пользователи', value: 'all' },
      { label: 'Только друзья', value: 'friends' },
      { label: 'Только я', value: 'nobody' }
    ],
    safeValues: ['friends', 'nobody']
  },
  info: {
    icon: 'ℹ️',
    title: 'Кто видит основную информацию моей страницы?',
    desc: 'Дата рождения, город, номер телефона.',
    options:[
      { label: 'Все пользователи', value: 'all' },
      { label: 'Только друзья', value: 'friends' },
      { label: 'Только я', value: 'nobody' }
    ],
    safeValues:['friends', 'nobody']
  }
}

// По умолчанию у пользователя всё открыто ("Все пользователи")
const currentConfig = ref({
  photos: 'all',
  friends: 'all',
  groups: 'all',
  info: 'all'
})

const selectOption = (settingKey, value) => {
  currentConfig.value[settingKey] = value
}

// Считаем прогресс (по 25% за каждую безопасную настройку)
const securityScore = computed(() => {
  let score = 0;
  const keys = Object.keys(settingsData);
  keys.forEach(key => {
    if (settingsData[key].safeValues.includes(currentConfig.value[key])) {
      score += 25;
    }
  });
  return score;
})

const meterColor = computed(() => {
  if (securityScore.value <= 25) return '#ef4444'; // Красный (Опасно)
  if (securityScore.value <= 75) return '#f59e0b'; // Желтый (Средне)
  return '#10b981'; // Зеленый (Безопасно)
})

const isFullySecure = computed(() => securityScore.value === 100)

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_vk_privacy_completed', 'true')
    window.location.href = '/vk-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: #2787f5; }

.theory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}
.theory-card {
  background: var(--vp-c-bg-alt);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.theory-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  border-color: #2787f5;
}

.security-meter-box {
  background: var(--vp-c-bg-alt);
  padding: 15px 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  border: 1px solid var(--vp-c-divider);
}
.meter-header { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 1.1rem; }
.meter-track { height: 12px; background: var(--vp-c-bg-soft); border-radius: 6px; overflow: hidden; }
.meter-fill { height: 100%; transition: all 0.5s ease; box-shadow: inset 0 0 5px rgba(0,0,0,0.2); }

.settings-simulator {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.setting-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.options-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.opt-btn {
  flex: 1;
  min-width: 120px;
  padding: 10px 15px;
  border: 2px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-1);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.opt-btn:hover {
  border-color: #2787f5;
  background: rgba(39, 135, 245, 0.05);
}

.opt-btn.active {
  border-color: #2787f5;
  background: rgba(39, 135, 245, 0.15);
  color: #2787f5;
}

.success-alert {
  margin-top: 30px;
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid #10b981;
  padding: 25px;
  border-radius: 12px;
  color: #10b981;
  text-align: center;
  animation: fadeIn 0.5s ease-out;
}

.finish-btn {
  margin-top: 20px;
  background: #10b981;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.finish-btn:hover { background: #059669; transform: translateY(-2px); }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>