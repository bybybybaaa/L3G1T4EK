---
layout: page
---
<br>
<a href="/max-info" class="back-link">← Назад к курсу МАКС</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
  <span>🤝</span>
  <span style="background: linear-gradient(120deg, #2563eb, #dc2626); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
    Ловушка «Аренды аккаунта»
  </span>
</h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 25px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;"><strong>Предупреждение МВД:</strong> Еще в 2025 году полиция зафиксировала всплеск новой схемы. Мошенники предлагают обычным пользователям (чаще школьникам и студентам) сдать свой аккаунт МАКС в аренду за небольшое вознаграждение. Многие соглашаются, считая, что в этом нет ничего страшного.</p>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
    <div style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--vp-c-divider);">
      <h3 style="color: #2563eb; margin-top: 0; font-size: 1.2rem;">Миф мошенников:</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">«Нам просто нужен пустой аккаунт для тестов рекламы. Мы ничего не тронем, ты просто получишь деньги за то, что им не пользуешься».</p>
    </div>
    <div style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.2);">
      <h3 style="color: #ef4444; margin-top: 0; font-size: 1.2rem;">Реальность:</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Аккаунт - это не пустая комната. Это ваша <strong>цифровая личность</strong>. Через арендованный профиль идут массовые рассылки, развод на деньги и кража данных ваших контактов.</p>
    </div>
  </div>

  <div style="background: rgba(37, 99, 235, 0.05); padding: 20px; border-radius: 12px; border: 1px dashed #2563eb; margin-bottom: 30px;">
    <h3 style="margin-top: 0; color: #2563eb; font-size: 1.3rem;">🚨 Последствия «легкого заработка»:</h3>
    <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 1.6; margin-top: 15px;">
      <li style="margin-bottom: 8px;">🔹 <strong>Потеря доверия:</strong> Платформа видит в вас реального пользователя. Ваши друзья и контакты доверяют сообщениям от вас, чем и пользуются хакеры.</li>
      <li style="margin-bottom: 8px;">🔹 <strong>Криминальный след:</strong> Если через ваш аккаунт обманут сотни людей, полиция придет в первую очередь к законному владельцу - то есть к вам.</li>
      <li>🔹 <strong>Угон данных:</strong> Получив доступ для аренды, мошенники забирают ваши переписки, личные фото и доступ ко всем связанным сервисам.</li>
    </ul>
  </div>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## 🕵️ Интерактив

<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">Вам написал человек с заманчивым предложением. Проанализируйте его аргументы и выберите правильную оценку риска:</p>

<div style="background: var(--vp-c-bg-soft); border-radius: 12px; overflow: hidden; border: 1px solid var(--vp-c-divider);">
  <div v-for="offer in offers" :key="offer.id" 
       :style="{ 
         padding: '20px', 
         borderBottom: '1px solid var(--vp-c-divider)', 
         display: 'flex', 
         flexDirection: 'column',
         gap: '15px',
         background: offer.processed ? (offer.isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)') : 'transparent',
         transition: '0.3s'
       }">
    <!-- Аргумент мошенника -->
    <div style="display: flex; gap: 15px; align-items: flex-start;">
      <div style="font-size: 1.5rem;">💬</div>
      <div style="font-style: italic; font-size: 1.05rem; color: var(--vp-c-text-1);">
        «{{ offer.text }}»
      </div>
    </div>
    <!-- Кнопки -->
    <div v-if="!offer.processed" style="display: flex; gap: 10px;">
      <button @click="makeDecision(offer.id, false)" 
              style="flex: 1; padding: 10px; border-radius: 8px; border: 2px solid #10b981; background: transparent; color: #10b981; font-weight: 700; cursor: pointer;">
        🤔 Звучит логично
      </button>
      <button @click="makeDecision(offer.id, true)" 
              style="flex: 1; padding: 10px; border-radius: 8px; border: 2px solid #ef4444; background: transparent; color: #ef4444; font-weight: 700; cursor: pointer;">
        🚩 Это ловушка
      </button>
    </div>
    <!-- Результат -->
    <div v-if="offer.processed" style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 8px; border-left: 4px solid;"
         :style="{ borderColor: offer.isCorrect ? '#10b981' : '#ef4444' }">
      <div style="font-weight: 800; margin-bottom: 5px;" :style="{ color: offer.isCorrect ? '#10b981' : '#ef4444' }">
        {{ offer.isCorrect ? 'Правильно!' : 'Опасно!' }}
      </div>
      <div style="font-size: 0.95rem; color: var(--vp-c-text-2);">
        {{ offer.explanation }}
      </div>
    </div>
  </div>
</div>

<div v-if="isGameOver" style="margin-top: 25px;">
  <div v-if="allCorrect" style="background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; padding: 20px; border-radius: 12px; text-align: center; color: #10b981;">
    <p style="font-size: 1.2rem; font-weight: 700; margin: 0;">🎉 Курс по мессенджеру МАКС завершен!</p>
    <p style="margin: 10px 0 0 0; color: var(--vp-c-text-1);">Вы успешно распознали все уловки. Помните: ваша цифровая безопасность дороже любых быстрых денег.</p>
    <button @click="finishLesson" style="margin-top: 20px; width: 100%; padding: 15px; background: #10b981; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
      Завершить обучение
    </button>
  </div>

  <div v-else style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px; text-align: center; color: #ef4444;">
    <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">⚠️ Вы недооцениваете риски аренды.</p>
    <p style="margin: 10px 0 0 0; font-size: 0.95rem;">Прочитайте пояснения к рискам еще раз. Аккаунт — это не просто запись в базе данных.</p>
    <button @click="resetGame" style="margin-top: 15px; width: 100%; padding: 12px; background: #ef4444; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
      🔄 Попробовать снова
    </button>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue'

const offers = ref([
  { 
    id: 1, 
    text: 'Да не бойся, нам просто нужен аккаунт со стажем, чтобы запустить рассылку рекламы товаров. Твои контакты мы не тронем.', 
    isTrap: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Ложь. Платформа доверяет вашему аккаунту именно потому, что он привязан к вашей личности. Реклама товаров быстро превратится в рассылку фишинга вашим же друзьям.'
  },
  { 
    id: 2, 
    text: 'Ты просто дашь нам логин и код, мы зайдем, поменяем пароль на время аренды, а через неделю вернем всё назад и заплатим 2000 рублей.', 
    isTrap: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Это прямой угон. Как только мошенник сменит пароль и почту, вы больше никогда не увидите свой аккаунт. А 2000 рублей вам никто не пришлет.'
  },
  { 
    id: 3, 
    text: 'Если что-то пойдет не так, ты просто напишешь в поддержку, что тебя взломали, и тебе всё вернут. Никаких рисков для тебя нет.', 
    isTrap: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Риски огромны. Если через аккаунт совершено преступление, поддержка передаст ваши данные полиции. Доказать, что вы просто сдали аккаунт в аренду, будет очень сложно.'
  }
])

const makeDecision = (id, choiceIsTrap) => {
  const offer = offers.value.find(o => o.id === id)
  if (offer) {
    offer.decision = choiceIsTrap
    // Правильный ответ: это всегда ловушка (true)
    offer.isCorrect = (choiceIsTrap === true)
    offer.processed = true
  }
}

const isGameOver = computed(() => offers.value.every(o => o.processed))
const allCorrect = computed(() => isGameOver.value && offers.value.every(o => o.isCorrect))

const resetGame = () => {
  offers.value.forEach(o => {
    o.processed = false
    o.decision = null
    o.isCorrect = false
  })
}

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_max_rent_completed', 'true')
    window.location.href = '/max-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: #dc2626; }

button:hover {
  filter: brightness(0.9);
  transform: translateY(-1px);
}
</style>