<script setup>
import { ref, computed } from 'vue'

const checklist = ref([
  { title: "2FA", text: "Включена двухфакторная аутентификация", checked: false, how: "Настройки -> Конфиденциальность -> Двухэтапная аутентификация." },
  { title: "Пароль", text: "Установлен облачный пароль", checked: false, how: "Settings -> Privacy -> Two-Step Verification." },
  { title: "Приватность", text: "Номер телефона скрыт от всех", checked: false, how: "Настройки -> Конфиденциальность -> Номер телефона -> 'Никто'." },
  { title: "Сессии", text: "Активные сеансы проверены", checked: false, how: "Настройки -> Устройства. Завершите все лишние сеансы." }
])

const openIdx = ref(null)
const progress = computed(() => {
  const done = checklist.value.filter(i => i.checked).length
  return Math.round((done / checklist.value.length) * 100)
})
</script>

<div class="cl-root">
  <h1 class="cl-header">🛡️ Чек-лист безопасности</h1>

  <div class="cl-progress-card">
    <div class="cl-progress-label">
      <span>Защита аккаунта</span>
      <span class="cl-percent">{{ progress }}%</span>
    </div>
    <div class="cl-track">
      <div class="cl-fill" :style="{ width: progress + '%' }"></div>
    </div>
  </div>

  <div class="cl-list">
    <div v-for="(item, i) in checklist" :key="i" class="cl-card" :class="{ 'is-done': item.checked }">
      <div class="cl-main">
        <label class="cl-check-wrap">
          <input type="checkbox" v-model="item.checked">
          <span class="cl-text">{{ item.text }}</span>
        </label>
        <button class="cl-info-btn" @click="openIdx = openIdx === i ? null : i">
          {{ openIdx === i ? 'Закрыть' : 'Инфо' }}
        </button>
      </div>
      <div v-if="openIdx === i" class="cl-details">{{ item.how }}</div>
    </div>
  </div>

  <div v-if="progress === 100" class="cl-success">
    <h3>🔥 Красава! Все настроено.</h3>
    <a href="/" class="cl-back">На главную</a>
  </div>
</div>

<style scoped>
.cl-root { max-width: 600px; margin: 0 auto; color: #eee; }
.cl-header { color: #00ffff; text-align: center; margin-bottom: 1.5rem; }
.cl-progress-card { background: #1e1e20; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem; border: 1px solid #333; }
.cl-progress-label { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: bold; }
.cl-percent { color: #00ffff; }
.cl-track { height: 8px; background: #000; border-radius: 4px; overflow: hidden; }
.cl-fill { height: 100%; background: #00ffff; transition: 0.3s; box-shadow: 0 0 8px #00ffff; }
.cl-card { background: #1e1e20; border: 1px solid #333; border-radius: 10px; margin-bottom: 10px; padding: 1rem; }
.is-done { border-color: rgba(0,255,255,0.4); }
.cl-main { display: flex; justify-content: space-between; align-items: center; }
.cl-check-wrap { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.cl-text { font-size: 0.9rem; }
.is-done .cl-text { color: #666; text-decoration: line-through; }
.cl-info-btn { font-size: 0.7rem; color: #00ffff; border: 1px solid #00ffff; background: none; padding: 3px 8px; border-radius: 4px; cursor: pointer; }
.cl-details { margin-top: 10px; padding: 10px; background: #111; border-left: 2px solid #00ffff; font-size: 0.8rem; color: #bbb; }
.cl-success { text-align: center; margin-top: 2rem; padding: 20px; border: 1px dashed #00ffff; border-radius: 12px; }
.cl-back { display: inline-block; margin-top: 10px; color: #000; background: #00ffff; padding: 8px 20px; border-radius: 6px; font-weight: bold; text-decoration: none; }
</style>