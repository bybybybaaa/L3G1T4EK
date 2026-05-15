---
layout: page
---
<br>
<a href="/vk-info" class="back-link">← Назад к курсу ВКонтакте</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
  <span>📱</span>
  <span style="background: linear-gradient(120deg, #4c75a3, #2787f5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
    Активные сессии и 2FA
  </span>
</h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #2787f5; margin-bottom: 25px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;"><strong>Двухфакторная аутентификация (2FA)</strong> — это ваш главный щит. Благодаря ей, даже если мошенники узнают ваш пароль, они не смогут войти в аккаунт без доступа к вашей почте или телефону (SMS-кода).</p>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
    <div style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--vp-c-divider);">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.2rem;">Что такое активные сессии?</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Это список всех устройств (телефонов, компьютеров), с которых прямо сейчас выполнен вход в вашу страницу ВКонтакте.</p>
    </div>
    <div style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.2);">
      <h3 style="color: #ef4444; margin-top: 0; font-size: 1.2rem;">План действий при взломе:</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Если видите в списке незнакомое устройство или странное местоположение: <strong>завершайте сеанс, сразу меняйте пароль и проверяйте резервные коды</strong>.</p>
    </div>
  </div>
</div>

<div style="background: rgba(39, 135, 245, 0.05); padding: 20px; border-radius: 12px; border: 1px dashed #2787f5; margin-bottom: 30px;">
  <h3 style="margin-top: 0; color: #2787f5; font-size: 1.3rem;">🔍 Как вычислить чужого?</h3>
  <br>
  <p style="font-size: 1.1rem; margin-bottom: 10px;">При аудите списка устройств обращайте внимание на три параметра:</p>
  <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 1.6;">
    <li style="margin-bottom: 8px;">📍 <strong>Геолокация:</strong> Вы живете в Екатеринбурге, а сессия открыта в Москве или другой стране? Это повод для тревоги (если вы не используете VPN).</li>
    <li style="margin-bottom: 8px;">📱 <strong>Тип устройства и браузер:</strong> Вы пользуетесь только приложением на iPhone, но в списке внезапно появился вход через «Chrome на Windows»? Завершайте.</li>
    <li>🕒 <strong>Время активности:</strong> Устройство проявляло активность несколько минут назад, хотя вы в это время спали или не открывали ВК? Вас взломали.</li>
  </ul>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## 🕵️ Интерактив: Найдите шпионов
<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">Представьте, что вы (владелец аккаунта) живёте в Екатеринбурге и пользуетесь только iPhone и домашним компьютером на Windows. Проверьте список сессий ВКонтакте и отключите подозрительные устройства.</p>

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
  <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">✅ Аудит успешно пройден!</p>
  <p style="margin: 10px 0 0 0; color: var(--vp-c-text-1);">Вы оставили только свои устройства. Не забудьте, что после удаления шпионов из списка нужно <strong>обязательно сменить пароль ВКонтакте</strong>!</p>
  <button @click="finishLesson" style="margin-top: 15px; width: 100%; padding: 15px; background: #10b981; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
    Завершить урок
  </button>
</div>

<div v-if="isGameOver && !allClean" style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px; margin-top: 25px; text-align: center; color: #ef4444;">
  <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">⚠️ Допущены ошибки в аудите!</p>
  <p style="margin: 10px 0 0 0; font-size: 0.95rem;">Вы либо завершили свою легитимную сессию, либо оставили хакера. Попробуйте еще раз.</p>
  <button @click="resetGame" style="margin-top: 15px; width: 100%; padding: 12px; background: #ef4444; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
    🔄 Попробовать снова
  </button>
</div>

<script setup>
import { ref, computed } from 'vue'

const devices = ref([
  { id: 1, name: 'VK App • iPhone 14', location: 'Екатеринбург, Россия', status: 'Онлайн (Текущее устройство)', suspect: false, processed: false, decision: null },
  { id: 2, name: 'Chrome • Windows 10', location: 'Екатеринбург, Россия', status: 'Активен 3 часа назад', suspect: false, processed: false, decision: null },
  { id: 3, name: 'VK App • Android 12', location: 'Москва, Россия', status: 'Активен 5 минут назад', suspect: true, processed: false, decision: null },
  { id: 4, name: 'Firefox • MacOS', location: 'Амстердам, Нидерланды', status: 'Онлайн', suspect: true, processed: false, decision: null }
])

const makeDecision = (id, choice) => {
  const device = devices.value.find(d => d.id === id)
  if (device) {
    device.processed = true
    device.decision = choice
  }
}

const isGameOver = computed(() => {
  return devices.value.every(d => d.processed)
})

const allClean = computed(() => {
  if (!isGameOver.value) return false
  return devices.value.every(d => {
    if (d.suspect) return d.decision === 'killed'
    return d.decision === 'safe'
  })
})

const resetGame = () => {
  devices.value.forEach(d => {
    d.processed = false
    d.decision = null
  })
}

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_vk_sessions_completed', 'true')
    window.location.href = '/vk-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: #2787f5; }

button:hover:not(:disabled) {
  filter: brightness(0.9);
  transform: translateY(-1px);
}
</style>