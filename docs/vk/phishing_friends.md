---
layout: page
---
<br>
<a href="/vk-info" class="back-link">← Назад к курсу ВКонтакте</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
    <span>🎭</span>
    <span style="background: linear-gradient(120deg, #4c75a3, #2787f5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Взломанные друзья и фишинг
    </span>
  </h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #2787f5; margin-bottom: 25px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;"><strong>Главная опасность:</strong> Заметить обман намного тяжелее, если вам пишет реальный человек из вашего списка контактов. Видя знакомую аватарку, люди перестают напрягаться и начинают слепо доверять ссылкам и просьбам.</p>
  </div>

  <div class="theory-grid">
    <div class="theory-card">
      <h3 style="color: #ef4444; margin-top: 0; font-size: 1.3rem;">💸 «Займи до завтра»</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Классическая схема. Злоумышленник взламывает аккаунт вашего друга и делает массовую рассылку с просьбой перевести деньги. <strong>Золотое правило:</strong> прежде чем переводить деньги, позвоните этому человеку по сотовой связи или напишите в другом мессенджере.</p>
    </div>
    <div class="theory-card">
      <h3 style="color: #f59e0b; margin-top: 0; font-size: 1.3rem;">🎣 Ссылки «Проголосуй / Посмотри»</h3>
      <p style="font-size: 1rem; line-height: 1.5; color: var(--vp-c-text-2); margin-bottom: 0;">Опасную фишинговую ссылку маскируют под голосование, петицию, список пострадавших или фотоальбом. Расчёт простой: вы не хотите пропустить важное от друга. Иногда это фишинговая страница для кражи данных, иногда попытка выбить вход в другой сервис, иногда переход на ресурс, где человека уговаривают скачать вредоносный файл. Сама ссылка не конечная точка, а первая ступень. Проблема в том, что такие ссылки выглядят не как мусор. Они встроены в обычную человеческую переписку.</p>
    </div>
  </div>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## 📝 Тест на бдительность

<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">
  Проверьте, сможете ли вы не попасться на уловки мошенников. Ответьте на 4 вопроса.
</p>

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
    <div v-if="score === 4" class="success-block">
      <p style="color: #10b981; font-weight: 700; font-size: 1.3rem; margin: 15px 0;">✅ Вы успешно прошли тест!</p>
      <div style="text-align: left; background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; color: var(--vp-c-text-1);">
        <p style="font-weight: 700; margin-bottom: 10px; color: #10b981;">🏆 Курс ВКонтакте завершен!</p>
        <p>Теперь вы знаете, что доверять нельзя даже знакомым профилям. Всегда звоните людям для проверки, смотрите на адрес сайта и не вводите свои пароли на сторонних ресурсах.</p>
      </div>
      <button @click="finishLesson" class="next-btn">Завершить курс</button>
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
    text: "Лучший друг пишет вам ВКонтакте: «Привет! Срочно скинь 3000 на пару часов, карта привязана к номеру». Ваши действия?",
    options: [
      "Сразу переведу, это же мой лучший друг, ему нужно помочь.", 
      "Попрошу скинуть фото карты, чтобы убедиться.", 
      "Сразу позвоню ему по телефону или напишу в другом мессенджере (Telegram/WhatsApp), чтобы узнать, он ли это."
    ],
    correct: 2
  },
  {
    text: "Коллега прислал ссылку: «Проголосуй за мою племянницу в конкурсе рисунков, очень нужно!». Что сделаете?",
    options: [
      "Перейду и проголосую, дело на пару секунд.", 
      "Понимаю, что коллегу скорее всего взломали. Не буду переходить по ссылке и свяжусь с ним лично.", 
      "Перейду по ссылке, но введу неправильный пароль на всякий случай."
    ],
    correct: 1
  },
  {
    text: "Какой адрес сайта является единственным официальным для ВКонтакте?",
    options: ["vkontakte.ru", "vk.com", "vk-login-safe.ru", "vk-official.com"],
    correct: 1
  },
  {
    text: "Вы перешли по ссылке, и браузер показывает «замочек» (безопасное соединение). Означает ли это, что сайт не мошеннический?",
    options: [
      "Да, замок значит, что сайт проверен антивирусом.", 
      "Нет, замок лишь шифрует данные. У мошенников тоже есть замки на сайтах. Главное — проверять адрес домена.", 
      "Только если замок зеленого цвета."
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

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_vk_phishing_completed', 'true')
    window.location.href = '/vk-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 1rem; }
.back-link:hover { color: #2787f5; }

.theory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}
.theory-card {
  background: var(--vp-c-bg-alt);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.quiz-container { margin-top: 2rem; }
.question-block { margin-bottom: 20px; padding: 20px; background: var(--vp-c-bg-alt); border-radius: 12px; border: 1px solid var(--vp-c-divider); }
.question-text { font-size: 1.1rem; margin-bottom: 15px; color: var(--vp-c-text-1); }
.options { display: flex; flex-direction: column; gap: 10px; }
.options button { 
  padding: 12px 15px; 
  border: 1px solid var(--vp-c-divider); 
  border-radius: 8px; 
  text-align: left; 
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.options button:hover:not(:disabled) { border-color: #2787f5; background: rgba(39, 135, 245, 0.05); }
.options button.selected { border-color: #2787f5; background: rgba(39, 135, 245, 0.15); }
.options button.correct { background: rgba(16, 185, 129, 0.2) !important; border-color: #10b981 !important; }
.options button.wrong { background: rgba(239, 68, 68, 0.2) !important; border-color: #ef4444 !important; }

.check-btn, .reset-btn, .next-btn { 
  width: 100%; 
  padding: 14px; 
  background: #2787f5; 
  color: white; 
  border-radius: 8px; 
  font-weight: 600;
  cursor: pointer; 
  border: none;
  font-size: 1.05rem;
}
.check-btn:disabled { background: var(--vp-c-divider); cursor: not-allowed; }
.check-btn:hover:not(:disabled), .reset-btn:hover { background: #1c6ad1; }
.next-btn { background: #10b981; }
.next-btn:hover { background: #059669; }

.quiz-result { 
  margin-top: 25px; 
  padding: 20px; 
  border: 2px solid var(--vp-c-divider); 
  border-radius: 12px; 
  text-align: center; 
}
.result-title { margin-top: 0; }
</style>