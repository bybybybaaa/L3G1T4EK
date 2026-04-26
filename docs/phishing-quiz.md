---
layout: doc
---

# Тренажер: Распознай мошенника 🕵️‍♂️

<div class="scam-ui">
  <div v-if="!isAnswered">
    <p><b>От кого:</b> {{ currentScenario.from }}</p>
    <div class="msg-box">
      {{ currentScenario.text }}
    </div>
    <div class="btns">
      <button @click="handleAnswer(true)" class="scam-btn">Скам!</button>
      <button @click="handleAnswer(false)" class="safe-btn">Безопасно</button>
    </div>
  </div>

  <div v-else class="result-box">
    <h3 :style="{ color: isCorrect ? '#2ed573' : '#ff4757' }">
      {{ isCorrect ? "✅ Верно!" : "❌ Тебя взломали..." }}
    </h3>
    <p>{{ currentScenario.expl }}</p>
    <button @click="nextStep" class="next-btn">Следующий кейс</button>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue'

const step = ref(0)
const isAnswered = ref(false)
const isCorrect = ref(false)

const scenarios = [
  { 
    from: "Поддержка MAX", 
    text: "Ваш аккаунт будет удален! Срочно подтвердите номер: http://max-id-fix.ru", 
    isScam: true,
    expl: "Официальная поддержка MAX никогда не использует сторонние домены .ru и не торопит с подтверждением под угрозой удаления." 
  },
  { 
    from: "Староста", 
    text: "Ребят, скиньте почты для списка в деканат. Нужно до завтра.", 
    isScam: false,
    expl: "Тут нет подозрительных ссылок или требований пароля. Обычный учебный процесс." 
  }
]

const currentScenario = computed(() => scenarios[step.value])

function handleAnswer(userSaidScam) {
  isCorrect.value = (userSaidScam === currentScenario.value.isScam)
  isAnswered.value = true
}

function nextStep() {
  step.value = (step.value + 1) % scenarios.length
  isAnswered.value = false
}
</script>

<style scoped>
.scam-ui { 
  border: 1px solid var(--vp-c-divider); 
  padding: 25px; 
  border-radius: 12px; 
  background: var(--vp-c-bg-soft); 
  margin: 20px 0;
}
.msg-box { 
  background: var(--vp-c-bg); 
  padding: 15px; 
  margin: 15px 0; 
  border-radius: 8px; 
  border-left: 4px solid #007bff; 
  color: var(--vp-c-text-1);
}
.btns { display: flex; gap: 12px; }
button { 
  flex: 1;
  padding: 12px 20px; 
  border: none; 
  border-radius: 8px; 
  cursor: pointer; 
  font-weight: bold;
  transition: opacity 0.2s;
}
button:hover { opacity: 0.8; }
.scam-btn { background: #ff4757; color: white; }
.safe-btn { background: #2ed573; color: white; }
.next-btn { background: var(--vp-c-brand); color: white; margin-top: 15px; width: 100%; }
.result-box { text-align: center; }
</style>