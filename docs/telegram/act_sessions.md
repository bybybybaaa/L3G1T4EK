---
layout: page
---
<br>
<a href="/tg-info" class="back-link">← Назад к Telegram</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
  <span>📱</span>
  <span style="background: linear-gradient(120deg, #3b82f6, #1d4ed8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
    Активные сессии
  </span>
</h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-bottom: 25px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;"><strong>Активная сессия</strong> — это подтвержденное право устройства (телефона, ПК или браузера) на доступ к вашему аккаунту без повторного ввода пароля и SMS-кода.</p>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
    <div style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--vp-c-divider);">
      <h3 style="color: #3b82f6; margin-top: 0;">❓ Как это работает?</h3>
      <p style="font-size: 1rem; line-height: 1.5;">Когда вы вводите код из SMS, Telegram выдает устройству <strong>токен (ключ)</strong>. Пока этот ключ в памяти, вы в системе.</p>
    </div>
    <div style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.2);">
      <h3 style="color: #ef4444; margin-top: 0;">⚠️ Почему это опасно?</h3>
      <p style="font-size: 1rem; line-height: 1.5;">Хакеру не нужен пароль, если он украдет ключ через <strong>фишинг</strong> или <strong>вирусы</strong> (копирование папки <code>tdata</code>).</p>
    </div>
  </div>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; margin-bottom: 30px;">
    <h3 style="margin-top: 0; font-size: 1.4rem; line-height: 1.6;">🛠 Инструменты управления:</h3>
    <br>
    <ul style="list-style: none; padding: 0;">
      <li style="margin-bottom: 10px; font-size: 1.15rem; line-height: 1.6;">🚀 <strong>Завершить другие сеансы:</strong> Мгновенно аннулирует доступ на всех устройствах, кроме вашего.</li>
      <li style="font-size: 1.15rem; line-height: 1.6; display: flex; align-items: flex-start; gap: 10px;">
  <span>🔐</span>
  <span>
    <strong>Облачный пароль (2FA):</strong> 
    Второй слой защиты, который потребует пароль даже при наличии SMS-кода.
  </span>
</li>
    </ul>
  </div>
</div>

<div style="background: rgba(59, 130, 246, 0.05); padding: 20px; border-radius: 12px; border: 1px dashed #3b82f6; margin-bottom: 30px;">
  <h3 style="margin-top: 0; color: #6082df; font-size: 1.3rem;">🔍 Как вычислить чужого?</h3>
  <br>
  <p style="font-size: 1.1rem; margin-bottom: 10px;">При аудите списка устройств обращайте внимание на три параметра:</p>
  <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 1.6;">
    <li style="margin-bottom: 8px;">📍 <strong>Геолокация:</strong> Если вы в Екатеринбурге, а сессия открыта в Амстердаме или Гонконге (и вы не включали VPN) — это повод для тревоги.</li>
    <li style="margin-bottom: 8px;">📱 <strong>Тип устройства:</strong> Вы пользуетесь только iPhone, но в списке внезапно появился «Android 9.0» или «Linux Desktop»? Завершайте не задумываясь.</li>
    <li>🕒 <strong>Время активности:</strong> Неизвестное устройство «В сети сейчас» одновременно с вами — явный признак параллельной сессии взломщика.</li>
  </ul>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">


## 🕵️ Тест: Найдите шпионов
<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">Проверьте каждое устройство и примите решение:</p>

<div style="background: var(--vp-c-bg-soft); border-radius: 12px; overflow: hidden; border: 1px solid var(--vp-c-divider);">
  <div v-for="device in devices" :key="device.id" 
       :style="{ 
         padding: '20px', 
         borderBottom: '1px solid var(--vp-c-divider)', 
         display: 'flex', 
         flexDirection: 'column',
         gap: '15px',
         background: device.decision === 'safe' ? 'rgba(16, 185, 129, 0.05)' : device.decision === 'killed' ? 'rgba(239, 68, 68, 0.05)' : 'transparent',
         transition: '0.3s'
       }">
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <div style="font-weight: 700; font-size: 1.1rem;">{{ device.name }}</div>
        <div style="font-size: 0.95rem; color: var(--vp-c-text-2);">{{ device.location }} • {{ device.status }}</div>
      </div>
      <div v-if="device.processed" 
           :style="{ 
             color: device.decision === 'safe' ? '#10b981' : '#ef4444', 
             border: '1px solid',
             fontWeight: '800', 
             fontSize: '0.8rem', 
             padding: '4px 8px', 
             borderRadius: '4px',
             textTransform: 'uppercase'
           }">
        {{ device.decision === 'safe' ? 'Оставлено' : 'Завершено' }}
      </div>
    </div>
    <div v-if="!device.processed" style="display: flex; gap: 10px;">
      <button @click="makeDecision(device.id, 'safe')" 
              style="flex: 1; padding: 10px; border-radius: 8px; border: 2px solid #10b981; background: transparent; color: #10b981; font-weight: 700; cursor: pointer;">
        ✅ Оставить
      </button>
      <button @click="makeDecision(device.id, 'killed')" 
              style="flex: 1; padding: 10px; border-radius: 8px; border: none; background: #ef4444; color: white; font-weight: 700; cursor: pointer;">
        🚫 Завершить
      </button>
    </div>
  </div>
</div>

<div v-if="allClean" style="background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; padding: 20px; border-radius: 12px; margin-top: 25px; text-align: center; color: #10b981;">
  <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">✅ Тест успешно пройден! Аккаунт в безопасности.</p>
  <button @click="finishLesson" style="margin-top: 15px; width: 100%; padding: 15px; background: #10b981; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
    Завершить урок
  </button>
</div>

<!-- Сообщение об ОШИБКЕ (появится, когда всё нажато, но результат неверный) -->
<div v-if="isGameOver && !allClean" style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px; margin-top: 25px; text-align: center; color: #ef4444;">
  <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">⚠️ Допущены ошибки в аудите!</p>
  <p style="margin: 10px 0 0 0; font-size: 0.95rem;">Вы либо завершили свою сессию, либо оставили шпиона. Попробуйте еще раз.</p>
  <button @click="resetGame" style="margin-top: 15px; width: 100%; padding: 12px; background: #ef4444; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
    🔄 Попробовать снова
  </button>
</div>

<script setup>
import { ref, computed } from 'vue'

const devices = ref([
  { id: 1, name: 'iPhone 15 (Ваш телефон)', location: 'Екатеринбург, Россия', status: 'В сети', suspect: false, processed: false, decision: null },
  { id: 2, name: 'Windows Desktop (Ваш ПК)', location: 'Екатеринбург, Россия', status: 'Активен вчера', suspect: false, processed: false, decision: null },
  { id: 3, name: 'Android 9.0 (Неизвестное)', location: 'Амстердам, Нидерланды', status: 'В сети сейчас', suspect: true, processed: false, decision: null },
  { id: 4, name: 'Linux Server (Cloud)', location: 'Франкфурт, Германия', status: 'В сети сейчас', suspect: true, processed: false, decision: null },
  { id: 5, name: 'Android 10', location: 'Лиссабон, Португалия', status: 'Активен 2 часа назад', suspect: true, processed: false, decision: null }
])

const makeDecision = (id, choice) => {
  const device = devices.value.find(d => d.id === id)
  if (device) {
    device.processed = true
    device.decision = choice
  }
}

// Проверка: завершены ли вообще все карточки
const isGameOver = computed(() => {
  return devices.value.every(d => d.processed)
})

// Проверка: всё ли сделано ПРАВИЛЬНО
const allClean = computed(() => {
  if (!isGameOver.value) return false
  return devices.value.every(d => {
    if (d.suspect) return d.decision === 'killed'
    return d.decision === 'safe'
  })
})

// Сброс игры в начальное состояние
const resetGame = () => {
  devices.value.forEach(d => {
    d.processed = false
    d.decision = null
  })
}

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_sessions_completed', 'true')
    window.location.href = '/tg-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: var(--vp-c-brand); }
</style>