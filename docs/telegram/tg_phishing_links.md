---
layout: page
---

<a href="/tg-info" class="back-link">← Назад к Telegram</a>

<p style="font-size: 1.7rem; font-weight: 700;">
  🎣 Фишинговые ссылки: Как распознать ловушку
</p>

<br>

<p style="font-size: 1.2rem; font-weight: 500;">
  Фишинг — это основной способ угона аккаунтов. Мошенники создают сайты, которые выглядят точно так же, как официальные страницы Telegram, чтобы вы ввели туда свой номер и код подтверждения.
</p>

<br>

<p style="font-size: 1.7rem; font-weight: 700;">
  💡 На что смотреть в первую очередь:
</p>

<br>

<div class="important-check-list">
  <p style="font-size: 1.2rem; font-weight: 500; margin-bottom: 15px;">
    <strong>• Домен (адрес сайта):</strong> Единственный официальный домен — <code style="font-size: 1.1rem;">telegram.org</code>. Все остальное (<code>tg-premium.ru</code>, <code>telegram-safety.com</code>, <code>telegraam.org</code>) — фейк.
  </p>
  
  <p style="font-size: 1.2rem; font-weight: 500; margin-bottom: 15px;">
    <strong>• Замок в адресной строке:</strong> Его наличие не гарантирует безопасность, так как мошенники тоже ставят SSL-сертификаты.
  </p>
  
  <p style="font-size: 1.2rem; font-weight: 500; margin-bottom: 15px;">
    <strong>• Источник ссылки:</strong> Если ссылку прислал друг, за которого нужно проголосовать, скорее всего, его уже взломали.
  </p>
</div>

---

<br>

<p style="font-size: 1.7rem; font-weight: 700;">
  🔎 Примеры мошенничества
</p>

<br>

### Пример №1: "Голосование за друга"

<p style="font-size: 1.2rem; font-weight: 500; margin-bottom: 20px;">
  Вам пишет знакомый (которого на самом деле уже взломали) и просит поддержать его или его родственника в онлайн-конкурсе.
</p>
<div class="phishing-example">
  <img src="/phishing_screen1.jpg" alt="Фишинг: Голосование" class="screen-img" />
  <div class="analysis-box">
    <p style="font-size: 1.2rem; font-weight: 700;">Почему это ловушка:</p>
    <ul style="font-size: 1.15rem; line-height: 1.6; margin-top: 10px; display: flex; flex-direction: column; gap: 10px;">
    <br>
      <li><strong>Эмоциональный крючок:</strong> Вас просит о помощи близкий человек, из-за чего бдительность снижается.</li>
      <br>
      <li><strong>Механика кражи:</strong> При переходе по ссылке откроется сайт, где предложат «авторизоваться через Telegram». Как только вы введете код из SMS, мошенники получат доступ к вашему аккаунту.</li>
      <br>
      <li><strong>Цепная реакция:</strong> Сразу после вашего взлома такие же сообщения полетят уже вашим контактам от вашего имени.</li>
    </ul>
  </div>
</div>

### Пример №2: "Бесплатный Telegram Premium"

<p style="font-size: 1.2rem; font-weight: 500; margin-bottom: 20px;">
  Мошенники рассылают сообщения о якобы проходящей акции, где можно получить подписку бесплатно на год.
</p>

<div class="phishing-example">
  <img src="/phishing_screen2.jpg" alt="Фишинг: Техподдержка" class="screen-img" />
  <div class="analysis-box">
    <p style="font-size: 1.2rem; font-weight: 700;">Что подозрительного:</p>
    <ul style="font-size: 1.15rem; line-height: 1.6; margin-top: 10px; display: flex; flex-direction: column; gap: 10px;">
    <br>
      <li><strong>Слишком заманчиво:</strong> Telegram никогда не раздает Premium просто так через ссылки в личных сообщениях.</li>
      <br>
      <li><strong>Создание спешки:</strong> Фразы типа «Осталось 247 мест» заставляют вас кликнуть быстрее, не раздумывая.</li>
      <br>
      <li><strong>Левая ссылка:</strong> Адрес <code>telegram-premium.shop</code> не имеет отношения к официальному приложению.</li>
    </ul>
  </div>
</div>

---

<br>

<p style="font-size: 1.7rem; font-weight: 700;">
  📝 Тест на бдительность
</p>

<br>

<div class="quiz-container">
  <div v-for="(q, index) in quiz" :key="index" class="question-block">
    <p class="question-text"><strong>{{ index + 1 }}. {{ q.text }}</strong></p>
    <div class="options">
      <button 
        v-for="(opt, optIdx) in q.options" 
        :key="optIdx"
        @click="selectAnswer(index, optIdx)"
        :class="{ 
          selected: answers[index] === optIdx,
          correct: showResults && optIdx === q.correct,
          wrong: showResults && answers[index] === optIdx && optIdx !== q.correct
        }"
        :disabled="showResults"
      >
        {{ opt }}
      </button>
    </div>
  </div>

  <button v-if="!showResults" @click="checkQuiz" class="check-btn" :disabled="answers.includes(null)">
    Проверить результат
  </button>

  <div v-if="showResults" class="quiz-result">
    <h3 class="result-title">Результат: {{ score }} из {{ quiz.length }}</h3>
    <div v-if="score === 5" class="success-block">
      <p style="color: #10b981; font-weight: 700; font-size: 1.3rem; margin: 15px 0;">✅ Вы успешно прошли тест!</p>
      <div style="text-align: left; background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; color: var(--vp-c-text-1);">
        <p style="font-weight: 700; margin-bottom: 10px; color: #10b981;">🏆 Вывод по теме:</p>
        <p>Теперь вы знаете, что фишинг строится на невнимательности и спешке. Главное правило: сразу звонить людям и спрашивать, точно ли они это писали, всегда смотреть на адрес в строке браузера и не вводить коды подтверждения на сторонних ресурсах.</p>
      </div>
      <a href="/tg-info" class="next-btn" style="text-decoration: none; display: block; text-align: center;">Перейти к следующему уроку</a>
    </div>
    <div v-else class="error-block">
      <p style="color: #ef4444; font-weight: 700; margin: 15px 0;">⚠️ Чтобы пройти дальше, нужно ответить правильно на все вопросы.</p>
      <button @click="resetQuiz" class="reset-btn">Попробовать снова</button>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const quiz = [
  {
    text: "Какой адрес сайта является единственным официальным для Telegram?",
    options: ["t.me", "telegram.org", "tg-official.ru", "telegram-app.com"],
    correct: 1
  },
  {
    text: "Друг прислал ссылку с просьбой проголосовать за него в конкурсе. Ваши действия?",
    options: [
      "Сразу проголосую, это же мой друг", 
      "Перейду по ссылке, но не буду вводить данные", 
      "Свяжусь с другом другим способом и уточню, он ли это прислал"
    ],
    correct: 2
  },
  {
    text: "Вам пришло сообщение: «Вы получили Telegram Premium бесплатно на год! Нажмите, чтобы активировать». Что это?",
    options: [
      "Удача, нужно скорее активировать", 
      "Официальная акция от Павла Дурова", 
      "Типичный фишинг для угона аккаунта"
    ],
    correct: 2
  },
  {
    text: "Замок в адресной строке браузера гарантирует, что сайт безопасен?",
    options: [
      "Да, это значит, что сайту можно доверять", 
      "Нет, это лишь значит, что соединение зашифровано, замок бывает и у мошенников", 
      "Только если замок зеленого цвета"
    ],
    correct: 1
  },
  {
    text: "Что самое важное нужно сделать, чтобы фишинг не помог мошенникам украсть аккаунт?",
    options: [
      "Часто менять аватарку", 
      "Установить Облачный пароль (двухэтапную аутентификацию)", 
      "Никому не показывать свой номер телефона"
    ],
    correct: 1
  }
]

const answers = ref(new Array(quiz.length).fill(null))
const showResults = ref(false)
const score = ref(0)

const selectAnswer = (qIdx, optIdx) => { answers.value[qIdx] = optIdx }
const checkQuiz = () => {
  score.value = answers.value.reduce((acc, curr, idx) => acc + (curr === quiz[idx].correct ? 1 : 0), 0)
  showResults.value = true
}
const resetQuiz = () => {
  answers.value = new Array(quiz.length).fill(null)
  showResults.value = false
  score.value = 0
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 1rem; }
.phishing-example { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 20px; 
  background: var(--vp-c-bg-soft); 
  padding: 1.5rem; 
  border-radius: 12px; 
  margin: 1.5rem 0; 
}
.screen-img { 
  max-width: 250px; 
  height: auto; 
  border-radius: 8px; 
  border: 1px solid var(--vp-c-divider); 
}
.analysis-box { flex: 1; min-width: 200px; }
.quiz-container { margin-top: 2rem; }
.question-block { margin-bottom: 20px; padding: 20px; background: var(--vp-c-bg-alt); border-radius: 12px; }
.question-text { font-size: 1.1rem; margin-bottom: 15px; }
.options { display: flex; flex-direction: column; gap: 10px; }
.options button { 
  padding: 12px 15px; 
  border: 1px solid var(--vp-c-divider); 
  border-radius: 8px; 
  text-align: left; 
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
}
.options button:hover:not(:disabled) { border-color: var(--vp-c-brand); }
.options button.selected { border-color: var(--vp-c-brand); background: var(--vp-c-brand-soft); }
.options button.correct { background: rgba(16, 185, 129, 0.2); border-color: #10b981; color: var(--vp-c-text-1); }
.options button.wrong { background: rgba(239, 68, 68, 0.2); border-color: #ef4444; }
.check-btn, .reset-btn, .next-btn { 
  width: 100%; 
  padding: 14px; 
  background: var(--vp-c-brand); 
  color: white; 
  border-radius: 8px; 
  font-weight: 600;
  cursor: pointer; 
  border: none;
}
.next-btn { background: #10b981; }
.quiz-result { 
  margin-top: 25px; 
  padding: 20px; 
  border: 2px solid var(--vp-c-divider); 
  border-radius: 12px; 
  text-align: center; 
}
</style>