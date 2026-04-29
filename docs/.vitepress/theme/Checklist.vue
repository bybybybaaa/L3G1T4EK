<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { text: "Включена 2FA (двухфакторка)", checked: false, info: "Настройки -> Конфиденциальность -> Двухэтапная аутентификация." },
  { text: "Облачный пароль в Telegram", checked: false, info: "Settings -> Privacy -> Two-Step Verification." },
  { text: "Номер телефона скрыт", checked: false, info: "Настройки -> Конфиденциальность -> Номер телефона -> 'Никто'." },
  { text: "Сессии проверены", checked: false, info: "Настройки -> Устройства. Завершите чужие сеансы." }
])

const activeInfo = ref(null)
const progress = computed(() => Math.round((items.value.filter(i => i.checked).length / items.value.length) * 100))
</script>

<template>
  <div class="cl-container">
    <div class="cl-progress-box">
      <div class="cl-progress-text">Ваша защита: {{ progress }}%</div>
      <div class="cl-bar"><div class="cl-fill" :style="{ width: progress + '%' }"></div></div>
    </div>

    <div v-for="(item, i) in items" :key="i" class="cl-card" :class="{ 'cl-done': item.checked }">
      <div class="cl-header">
        <label class="cl-label">
          <input type="checkbox" v-model="item.checked">
          <span class="cl-txt">{{ item.text }}</span>
        </label>
        <button class="cl-btn" @click="activeInfo = activeInfo === i ? null : i">Инфо</button>
      </div>
      <div v-if="activeInfo === i" class="cl-info">{{ item.info }}</div>
    </div>

    <div v-if="progress === 100" class="cl-finish">
      <h3>🎉 Готово, Илья!</h3>
      <a href="/" class="cl-home-btn">Вернуться на главную</a>
    </div>
  </div>
</template>

<style scoped>
.cl-container { padding: 20px; color: #fff; }
.cl-progress-box { background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; margin-bottom: 20px; }
.cl-bar { height: 8px; background: #222; border-radius: 4px; overflow: hidden; margin-top: 10px; }
.cl-fill { height: 100%; background: #00ffff; transition: 0.4s; box-shadow: 0 0 10px #00ffff; }
.cl-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; margin-bottom: 10px; padding: 15px; }
.cl-done { border-color: #00ffff; }
.cl-header { display: flex; justify-content: space-between; align-items: center; }
.cl-label { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.cl-btn { font-size: 0.7rem; color: #00ffff; border: 1px solid #00ffff; background: none; padding: 4px 8px; border-radius: 5px; cursor: pointer; }
.cl-info { margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-left: 2px solid #00ffff; font-size: 0.85rem; }
.cl-finish { margin-top: 30px; text-align: center; border: 2px solid #00ffff; padding: 20px; border-radius: 15px; background: rgba(0,255,255,0.05); }
.cl-home-btn { display: inline-block; margin-top: 10px; background: #00ffff; color: #000; padding: 8px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; }
</style>