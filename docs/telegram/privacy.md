---
layout: page
---

<br>
<a href="/tg-info" class="back-link">← Назад к Telegram</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
    <span>🕵️</span>
    <span style="background: linear-gradient(120deg, #3b82f6, #1d4ed8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Приватность
    </span>
  </h1>
  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-bottom: 30px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;">Многие думают, что Telegram анонимен «из коробки». <strong>Это опасный миф.</strong> По умолчанию ваш аккаунт достаточно открыт: любой участник общего чата может найти вас по номеру или проследить вашу активность. Ваша задача — вручную закрыть эти «двери» для посторонних.</p>
  </div>
  <h2 style="margin-top: 0; margin-bottom: 20px;">🛡️ Главные векторы атак через профиль</h2>
  
  <div class="theory-grid">
    <div class="theory-card">
      <h3 style="color: #ef4444; margin-top: 0; font-size: 1.3rem;">📱 Утечка номера</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Ваш номер телефона — это главный идентификатор. Если он открыт, мошенники могут собрать на вас досье (OSINT), пробить ваши другие соцсети, отправить фишинговое SMS или даже попытаться перевыпустить вашу SIM-карту через оператора (SIM-свопинг).</p>
    </div>
    <div class="theory-card">
      <h3 style="color: #f59e0b; margin-top: 0; font-size: 1.3rem;">↪️ Деанон через пересылку</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Вы оставили гневный комментарий в публичном канале. Кто-то пересылает это сообщение себе или в другую группу. Если у вас не скрыта пересылка, ваше имя над сообщением будет кликабельным — злоумышленник перейдет прямо в ваш профиль.</p>
    </div>
  </div>

  <div class="p2p-warning-box">
    <h3 style="margin-top: 0; color: #6082df; font-size: 1.3rem;">🌐 Скрытая угроза: Кража IP-адреса через звонок</h3>
    <p style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 0;">Для улучшения качества звука при звонках Telegram использует технологию <strong>Peer-to-Peer (P2P)</strong>. Это означает, что ваш телефон соединяется с телефоном звонящего напрямую, минуя серверы Telegram.<br><br><strong>Чем это опасно?</strong> Если вам звонит хакер (например, представившись "Службой безопасности"), он может с помощью сетевого сканера увидеть ваш <strong>реальный IP-адрес</strong>. По IP-адресу легко вычисляется ваш город, район и интернет-провайдер. Обязательно ограничивайте звонки и P2P-соединение!</p>
  </div>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## ⚙️ Тренажер: Настрой свой Telegram

<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">
  Примените полученные знания: выберите правильные параметры, чтобы защитить аккаунт. Шкала безопасности заполнится на 100%, когда вы закроете все уязвимости.
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
      <button v-for="opt in setting.options" :key="opt.value" @click="selectOption(key, opt.value)" :class="{ active: currentConfig[key] === opt.value }" class="opt-btn">
        {{ opt.label }}
      </button>
    </div>
  </div>
</div>

<div v-if="isFullySecure" class="success-alert">
  <p style="font-size: 1.2rem; font-weight: 700; margin: 0 0 10px 0;">🎉 Идеальная настройка!</p>
  <p style="margin: 0;">Вы скрыли номер от мошенников, запретили спам-звонки и защитили пересылаемые сообщения. Теперь собирать на вас досье или узнать ваш IP-адрес стало практически невозможно.</p>
  <button @click="finishLesson" class="finish-btn">Завершить урок</button>
</div>

<script setup>
import { ref, computed } from 'vue'

const settingsData = {
  phone: {
    icon: '📱',
    title: 'Номер телефона',
    desc: 'Защита от сбора данных и SIM-свопинга.',
    options:[
      { label: 'Все', value: 'all' },
      { label: 'Мои контакты', value: 'contacts' },
      { label: 'Никто', value: 'nobody' }
    ],
    safeValues:['nobody']
  },
  lastSeen: {
    icon: '👀',
    title: 'Последняя активность',
    desc: 'Кто видит, когда вы заходили в сеть?',
    options:[
      { label: 'Все', value: 'all' },
      { label: 'Мои контакты', value: 'contacts' },
      { label: 'Никто', value: 'nobody' }
    ],
    safeValues:['contacts', 'nobody']
  },
  calls: {
    icon: '📞',
    title: 'Звонки и P2P-соединение',
    desc: 'Кто может звонить вам и напрямую соединяться с вашим устройством (узнавать IP)?',
    options:[
      { label: 'Все', value: 'all' },
      { label: 'Мои контакты', value: 'contacts' },
      { label: 'Никто', value: 'nobody' }
    ],
    safeValues: ['contacts', 'nobody']
  },
  forwards: {
    icon: '↪️',
    title: 'Пересылка сообщений',
    desc: 'Кто сможет переходить в ваш профиль, кликнув на пересланное сообщение?',
    options:[
      { label: 'Все', value: 'all' },
      { label: 'Мои контакты', value: 'contacts' },
      { label: 'Никто', value: 'nobody' }
    ],
    safeValues:['contacts', 'nobody']
  }
}

const currentConfig = ref({
  phone: 'all',
  lastSeen: 'all',
  calls: 'all',
  forwards: 'all'
})

const selectOption = (settingKey, value) => {
  currentConfig.value[settingKey] = value
}

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
  if (securityScore.value <= 25) return '#ef4444';
  if (securityScore.value <= 75) return '#f59e0b';
  return '#10b981';
})

const isFullySecure = computed(() => securityScore.value === 100)

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_privacy_completed', 'true')
    window.location.href = '/tg-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: var(--vp-c-brand); }

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
  border-color: var(--vp-c-brand);
}

.p2p-warning-box {
  background: rgba(59, 130, 246, 0.05); 
  padding: 25px; 
  border-radius: 12px; 
  border: 1px dashed #3b82f6; 
  margin-bottom: 30px;
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
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.05);
}

.opt-btn.active {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
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
