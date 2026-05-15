---
layout: page
---

<br>
<a href="/max-info" class="back-link">← Назад к курсу МАКС</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
  <span>🏛️</span>
  <span style="background: linear-gradient(120deg, #2563eb, #dc2626); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
    «Служба поддержки» и выплаты
  </span>
</h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 25px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;"><strong>Главная уязвимость:</strong> МАКС — это сервис, связанный с государством. Уровень доверия к нему максимальный (особенно у людей старше 45 лет). Мошенники создают копии профилей с логотипами МАКС и имитируют сотрудников госорганов или техподдержки, чтобы выманивать данные под предлогом защиты или выплат.</p>
  </div>

  <h3 style="margin-top: 0; font-size: 1.4rem; line-height: 1.6; margin-bottom: 15px;">🛡️ 3 правила безопасности:</h3>
  
  <div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 30px;">
    <div class="fact-card">
      <h3 style="color: #2563eb; margin-top: 0; font-size: 1.2rem;">1. Поддержка не пишет первой в личные сообщения</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Настоящая техподдержка или работники органов <strong>никогда</strong> не будут писать вам в личные сообщения с просьбами продиктовать код, пароль или паспортные данные.</p>
    </div>
    <div class="fact-card">
      <h3 style="color: #2563eb; margin-top: 0; font-size: 1.2rem;">2. Проверяйте адрес сайта</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Если вам пишет якобы «служба МАКС», а ссылка в сообщении выглядит как <code>max-support-help.ru</code> или <code>max-gos-uslugi.com</code> — это фишинг.</p>
    </div>
    <div class="fact-card">
      <h3 style="color: #2563eb; margin-top: 0; font-size: 1.2rem;">3. Остерегайтесь «Госпрограмм»</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Если вам предлагают «компенсацию», «госпрограмму выплат» или «пособие» прямо в мессенджере - это 100% обман. Оформление выплат происходит только на официальных порталах.</p>
    </div>
  </div>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## 💬 Интерактив: Входящие сообщения

<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">Вам в МАКС пришло три личных сообщения. Внимательно изучите отправителя и текст. Примите решение: заблокировать этот контакт или довериться ему?</p>

<div style="background: var(--vp-c-bg-soft); border-radius: 12px; overflow: hidden; border: 1px solid var(--vp-c-divider);">
  <div v-for="chat in chats" :key="chat.id" 
       :style="{ 
         padding: '20px', 
         borderBottom: '1px solid var(--vp-c-divider)', 
         display: 'flex', 
         flexDirection: 'column',
         gap: '15px',
         background: chat.processed ? (chat.isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)') : 'transparent',
         transition: '0.3s'
       }">
    <!-- Сообщение -->
    <div style="background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 15px;">
      <div style="font-weight: 800; font-size: 1.1rem; margin-bottom: 8px; color: #2563eb;">
        {{ chat.sender }}
      </div>
      <div style="font-size: 1.05rem; color: var(--vp-c-text-1); line-height: 1.5;">
        {{ chat.message }}
      </div>
      <div v-if="chat.link" style="margin-top: 10px; color: #3b82f6; text-decoration: underline; word-break: break-all;">
        {{ chat.link }}
      </div>
    </div>
    <!-- Кнопки выбора -->
    <div v-if="!chat.processed" style="display: flex; gap: 10px;">
      <button @click="makeDecision(chat.id, false)" 
              style="flex: 1; padding: 12px; border-radius: 8px; border: 2px solid #10b981; background: transparent; color: #10b981; font-weight: 700; cursor: pointer;">
        ✅ Доверять
      </button>
      <button @click="makeDecision(chat.id, true)" 
              style="flex: 1; padding: 12px; border-radius: 8px; border: 2px solid #ef4444; background: #ef4444; color: white; font-weight: 700; cursor: pointer;">
        🚫 Заблокировать
      </button>
    </div>
    <!-- Результат -->
    <div v-if="chat.processed" style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 8px; border-left: 4px solid;"
         :style="{ borderColor: chat.isCorrect ? '#10b981' : '#ef4444' }">
      <div style="font-weight: 800; margin-bottom: 5px;" :style="{ color: chat.isCorrect ? '#10b981' : '#ef4444' }">
        <span v-if="chat.isFake">
            {{ chat.isCorrect ? 'Верно, это мошенник!' : 'Ошибка! Вы доверились мошеннику.' }}
        </span>
        <span v-else>
            {{ chat.isCorrect ? 'Верно, это не мошенник!' : 'Ошибка! Вы заблокировали безопасное системное уведомление.' }}
        </span>
      </div>
      <div style="font-size: 0.95rem; color: var(--vp-c-text-2);">
        {{ chat.explanation }}
      </div>
    </div>
  </div>
</div>

<!-- Финальный блок -->
<div v-if="isGameOver" style="margin-top: 25px;">
  <div v-if="allCorrect" style="background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; padding: 20px; border-radius: 12px; text-align: center; color: #10b981;">
    <p style="font-size: 1.2rem; font-weight: 700; margin: 0;">🎉 Отличная работа!</p>
    <p style="margin: 10px 0 0 0; color: var(--vp-c-text-1);">Вы успешно заблокировали все мошеннические контакты. Помните: настоящие аккаунты поддержки не пишут в личные сообщения с требованиями и угрозами.</p>
    <button @click="finishLesson" style="margin-top: 20px; width: 100%; padding: 15px; background: #10b981; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
      Завершить урок
    </button>
  </div>

  <div v-else style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px; text-align: center; color: #ef4444;">
    <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">⚠️ Ваш аккаунт под угрозой.</p>
    <p style="margin: 10px 0 0 0; font-size: 0.95rem;">Вы поверили мошенникам. Внимательно прочитайте пояснения к ошибкам и попробуйте пройти тест заново.</p>
    <button @click="resetGame" style="margin-top: 15px; width: 100%; padding: 12px; background: #ef4444; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
      🔄 Попробовать снова
    </button>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue'

const chats = ref([
  { 
    id: 1, 
    sender: 'Служба МАКС', 
    message: 'Уважаемый пользователь! Ваш аккаунт подозревается в мошенничестве и будет заблокирован через 2 часа. Для отмены блокировки перейдите по безопасной ссылке техподдержки:', 
    link: 'https://max-support-help.ru/auth',
    isFake: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Классический фишинг! Домен max-support-help.ru — поддельный. Кроме того, мошенники создают искусственную спешку ("заблокирован через 2 часа"), чтобы вы запаниковали и не стали проверять адрес.'
  },
  { 
    id: 2, 
    sender: 'Системное уведомление', 
    message: 'В ваш аккаунт выполнен вход с нового устройства (Windows, Chrome, Москва). Если это были вы, никаких действий не требуется. Если нет — завершите сеанс в настройках безопасности.', 
    link: '',
    isFake: false,
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Это безопасное системное уведомление. Оно просто информирует вас о факте входа, не просит переходить по ссылкам, не требует паролей или кодов из SMS.'
  },
  { 
    id: 3, 
    sender: 'Техподдержка МАКС ✔️', 
    message: 'Мы зафиксировали попытку входа в ваш аккаунт с нового устройства. Если это были не вы, пожалуйста, продиктуйте код из SMS, который мы вам только что отправили, чтобы отменить вход.', 
    link: '',
    isFake: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Обратите внимание на галочку! Мошенники часто добавляют эмодзи галочки (✔️) прямо в своё имя, чтобы казаться верифицированными. И главное: настоящая поддержка никогда не просит коды из SMS.'
  },
  { 
    id: 4, 
    sender: 'Госпрограмма Выплат 2026', 
    message: 'Вам одобрена социальная выплата в размере 14 500 рублей. Для получения перевода ответьте на это сообщение, прикрепив номер банковской карты и фото паспорта.', 
    link: '',
    isFake: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Сотрудники госорганов никогда не запрашивают паспорта и банковские реквизиты в личных сообщениях мессенджера. Любые государственные услуги оформляются строго через официальные порталы.'
  }
])

const makeDecision = (id, choiceIsFake) => {
  const chat = chats.value.find(c => c.id === id)
  if (chat) {
    chat.decision = choiceIsFake;
    if (chat.isFake) {
      chat.isCorrect = (choiceIsFake === true)
    } else {
      chat.isCorrect = (choiceIsFake === false)
    }
    
    chat.processed = true
  }
}

const isGameOver = computed(() => {
  return chats.value.every(c => c.processed)
})

const allCorrect = computed(() => {
  if (!isGameOver.value) return false
  return chats.value.every(c => c.isCorrect)
})

const resetGame = () => {
  chats.value.forEach(c => {
    c.processed = false
    c.decision = null
    c.isCorrect = false
  })
}

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_max_support_completed', 'true')
    window.location.href = '/max-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: #dc2626; }

.fact-card {
  background: var(--vp-c-bg-alt); 
  padding: 15px; 
  border-radius: 10px; 
  border: 1px solid var(--vp-c-divider);
}

button:hover {
  filter: brightness(0.9);
  transform: translateY(-1px);
}
</style>
