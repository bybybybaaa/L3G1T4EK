<script setup>
import { ref, computed } from 'vue'

const password = ref('')

// Логика анализа вынесена в вычисляемое свойство
const analysis = computed(() => {
  const p = password.value
  if (p.length === 0) return null

  let score = 0
  if (p.length > 8) score++
  if (p.length > 12) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++

  const states = [
    { color: '#ff4757', text: 'Ультра-слабо. Взломано за 1 сек ', width: '20%' },
    { color: '#ffa502', text: 'Слабовато. Хакер справится быстро', width: '40%' },
    { color: '#eccc68', text: 'Нормально, но можно лучше 😐', width: '60%' },
    { color: '#2ed573', text: 'Хороший пароль! Хакер пойдет искать другую жертву 💪', width: '85%' },
    { color: '#1e90ff', text: 'ЛЕГЕНДАРНО! Твой пароль - крепость ', width: '100%' }
  ]
  
  const current = states[Math.min(score, 4)]
  return {
    ...current,
    advice: score < 3 ? "Совет: добавь спецсимволы (!@#) и сделай пароль длиннее." : "Красавчик! Теперь не забудь включить 2FA в MAX."
  }
})

// Функция для обработки Enter
const onEnter = () => {
  if (password.value) {
    alert(`Анализ завершен: ${analysis.value?.text}`)
  }
}
</script>

# Проверка пароля на прочность🦾

Введи свой пароль ниже, чтобы узнать, сколько времени потребуется хакеру.

<div class="pass-card">
  <input 
    v-model="password"
    @keyup.enter="onEnter"
    type="text" 
    placeholder="Введи пароль для теста..." 
    class="custom-input"
  />
  
  <div v-if="analysis">
    <div class="meter-container">
      <div class="meter-bar" :style="{ width: analysis.width, backgroundColor: analysis.color }"></div>
    </div>
    <p class="result-text" :style="{ color: analysis.color }">{{ analysis.text }}</p>
    <p class="advice-text">{{ analysis.advice }}</p>
  </div>
</div>

<style scoped>
.pass-card {
  background: var(--vp-c-bg-soft);
  padding: 25px;
  border-radius: 12px;
  margin: 20px 0;
  border: 1px solid var(--vp-c-brand);
}

.custom-input {
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid var(--vp-c-brand);
  background: transparent;
  color: #ffffff !important; /* Белый цвет текста */
  font-size: 1.5rem; /* Крупный шрифт */
  font-weight: bold;
  text-align: center;
  outline: none;
}

.meter-container {
  height: 10px;
  width: 100%;
  background: #333;
  border-radius: 5px;
  margin: 20px 0 10px 0;
  overflow: hidden;
}

.meter-bar {
  height: 100%;
  transition: all 0.4s ease;
}

.result-text {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 10px;
}

.advice-text {
  font-style: italic;
  opacity: 0.8;
  margin-top: 5px;
}
</style>