---
layout: doc
---

# Тренажер: Распознай мошенника 🕵️‍♂️

<div class="scam-ui">
  <div v-if="!isAnswered">
    <div class="platform-badge" :class="currentScenario.platform">
      {{ currentScenario.platform.toUpperCase() }}
    </div>
    <p><b>От кого:</b> {{ currentScenario.from }}</p>
    <div class="msg-box" :class="currentScenario.platform">
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
    <p class="explanation">{{ currentScenario.expl }}</p>
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
    platform: "max",
    from: "Поддержка MAX", 
    text: "Внимание! Ваш аккаунт заблокируют через 1 час. Подтвердите владение по ссылке: http://max-id-login.ru/verify", 
    isScam: true,
    expl: "Угроза блокировки в сжатые сроки и левый домен .ru — явные признаки фишинга. Официальные сервисы так не делают." 
  },
  { 
    platform: "telegram",
    from: "Telegram Security", 
    text: "Ваш код для входа: 882-192. Если это были не вы, перешлите это сообщение администратору @support_security_bot.", 
    isScam: true,
    expl: "Настоящий Telegram никогда не просит пересылать коды. Это способ украсть ваш аккаунт через поддельного бота." 
  },
  { 
    platform: "vk",
    from: "Служба уведомлений", 
    text: "Илья, ваш пароль был успешно изменен. Если вы этого не делали, заблокируйте доступ в настройках своего профиля.", 
    isScam: false,
    expl: "Это стандартное уведомление системы. Оно не содержит ссылок и просит совершить действие внутри официального приложения." 
  },
  { 
    platform: "university",
    from: "Староста (Андрей)", 
    text: "Парни, деканат просит заполнить форму для ведомости. Только реальные ФИО и номера телефонов: https://docs.google.com/forms/d/1abc...", 
    isScam: false,
    expl: "Google-формы часто используются в вузах для сбора данных. Здесь нет запроса паролей или подозрительных сайтов." 
  },
  { 
    platform: "telegram",
    from: "Крипто-Розыгрыш", 
    text: "Поздравляем! Ты выиграл 0.5 BTC. Заполни данные карты для оплаты комиссии за перевод: http://win-crypto-free.com", 
    isScam: true,
    expl: "Любое требование 'оплатить комиссию' для получения приза — это 100% мошенничество." 
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
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.platform-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}

/* Стили под платформы — фундамент для разных API */
.max { background: #007bff; border-left-color: #007bff; }
.telegram { background: #24A1DE; border-left-color: #24A1DE; }
.vk { background: #4C75A3; border-left-color: #4C75A3; }
.university { background: #6c757d; border-left-color: #6c757d; }

.msg-box { 
  background: var(--vp-c-bg); 
  padding: 20px; 
  margin: 15px 0; 
  border-radius: 8px; 
  border-left: 4px solid;
  color: var(--vp-c-text-1);
  font-size: 1.1em;
  line-height: 1.5;
}

.btns { display: flex; gap: 12px; }

button { 
  flex: 1;
  padding: 14px 20px; 
  border: none; 
  border-radius: 8px; 
  cursor: pointer; 
  font-weight: bold;
  font-size: 1rem;
  transition: transform 0.2s, opacity 0.2s;
}

button:active { transform: scale(0.98); }

.scam-btn { background: #ff4757; color: white; }
.safe-btn { background: #2ed573; color: white; }
.next-btn { background: var(--vp-c-brand); color: white; margin-top: 20px; width: 100%; }

.explanation {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  font-style: italic;
}

.result-box { text-align: center; }
</style>