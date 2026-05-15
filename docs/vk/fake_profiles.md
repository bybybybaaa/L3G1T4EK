---
layout: page
---
<br>
<a href="/vk-info" class="back-link">← Назад к курсу ВКонтакте</a>

<div class="theory-section">
  <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.3; padding-bottom: 10px; margin-bottom: 20px;">
  <span>🕵️</span>
  <span style="background: linear-gradient(120deg, #4c75a3, #2787f5); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
    Распознавание мошенника
  </span>
</h1>

  <div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border-left: 4px solid #2787f5; margin-bottom: 25px;">
    <p style="font-size: 1.15rem; line-height: 1.6; margin: 0;">ВКонтакте — это не только мессенджер, но и полноценная личная страница. Первый рубеж вашей защиты - научиться с первого взгляда вычислять фейковые аккаунты мошенников.</p>
  </div>

  <h3 style="margin-top: 0; font-size: 1.4rem; line-height: 1.6; margin-bottom: 15px;">🔍 4 признака фейковой страницы:</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
    <div class="fact-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.2rem;">1. Аватарка</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">На фотографии не видно лица (снято со спины/сбоку) или фото выглядит постановочно-студийным.</p>
    </div>
    <div class="fact-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.2rem;">2. Личные фото</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Кроме аватарки, в профиле почти нет фотографий. Ничего с семьей, детьми, друзьями или из путешествий.</p>
    </div>
    <div class="fact-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.2rem;">3. Стена</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">В записях в основном репосты из сообществ. Сделаны они в небольшом промежутке времени, зачастую несколько лет назад.</p>
    </div>
    <div class="fact-card">
      <h3 style="color: #2787f5; margin-top: 0; font-size: 1.2rem;">4. Друзья</h3>
      <p style="font-size: 1rem; line-height: 1.5; margin: 0;">Их либо почти нет, либо <strong>около ста человек</strong> (почему-то мошенники любят это число). Все они с такими же полупустыми страничками.</p>
    </div>
  </div>
</div>

<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 40px 0;">

## 🎯 Интерактив

<p style="font-size: 1.1rem; color: var(--vp-c-text-2); margin-bottom: 20px;">Вам в личные сообщения написал незнакомый человек. Перед вами факты из его профиля. Оцените каждый факт: это нормальное поведение живого человека или признак мошенника?</p>

<div style="background: var(--vp-c-bg-soft); border-radius: 12px; overflow: hidden; border: 1px solid var(--vp-c-divider);">
  <div v-for="fact in facts" :key="fact.id" 
       :style="{ 
         padding: '20px', 
         borderBottom: '1px solid var(--vp-c-divider)', 
         display: 'flex', 
         flexDirection: 'column',
         gap: '15px',
         background: fact.processed ? (fact.isCorrect ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)') : 'transparent',
         transition: '0.3s'
       }">
    <!-- Текст факта -->
    <div style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">
      {{ fact.id }}. {{ fact.text }}
    </div>
    <!-- Кнопки выбора (показываются до ответа) -->
    <div v-if="!fact.processed" style="display: flex; gap: 10px;">
      <button @click="makeDecision(fact.id, false)" 
              style="flex: 1; padding: 10px; border-radius: 8px; border: 2px solid #10b981; background: transparent; color: #10b981; font-weight: 700; cursor: pointer;">
        ✅ Живой человек
      </button>
      <button @click="makeDecision(fact.id, true)" 
              style="flex: 1; padding: 10px; border-radius: 8px; border: 2px solid #ef4444; background: transparent; color: #ef4444; font-weight: 700; cursor: pointer;">
        🚩 Мошенник
      </button>
    </div>
    <!-- Результат (показывается после ответа) -->
    <div v-if="fact.processed" style="background: var(--vp-c-bg-alt); padding: 15px; border-radius: 8px; border-left: 4px solid;"
         :style="{ borderColor: fact.isCorrect ? '#10b981' : '#ef4444' }">
      <div style="font-weight: 800; margin-bottom: 5px;" :style="{ color: fact.isCorrect ? '#10b981' : '#ef4444' }">
        {{ fact.isCorrect ? 'Верно!' : 'Ошибка!' }}
      </div>
      <div style="font-size: 0.95rem; color: var(--vp-c-text-2);">
        {{ fact.explanation }}
      </div>
    </div>
  </div>
</div>

<!-- Финальный блок (появляется когда всё решено) -->
<div v-if="isGameOver" style="margin-top: 25px;">
  <div v-if="allCorrect" style="background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; padding: 20px; border-radius: 12px; text-align: center; color: #10b981;">
    <p style="font-size: 1.2rem; font-weight: 700; margin: 0;">🎉 Отличная работа! Вы раскусили мошенника.</p>
    <p style="margin: 10px 0 0 0; color: var(--vp-c-text-1);">Теперь вы знаете, как быстро вычислять фейковые аккаунты. Никогда не доверяйте пустым профилям.</p>
    <button @click="finishLesson" style="margin-top: 20px; width: 100%; padding: 15px; background: #10b981; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
      Завершить урок
    </button>
  </div>

  <div v-else style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; padding: 20px; border-radius: 12px; text-align: center; color: #ef4444;">
    <p style="font-size: 1.15rem; font-weight: 700; margin: 0;">⚠️ Вы допустили ошибки.</p>
    <p style="margin: 10px 0 0 0; font-size: 0.95rem;">Прочитайте пояснения к ответам и попробуйте проанализировать профиль ещё раз.</p>
    <button @click="resetGame" style="margin-top: 15px; width: 100%; padding: 12px; background: #ef4444; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
      🔄 Попробовать снова
    </button>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue'

const facts = ref([
  { 
    id: 1, 
    text: 'У пользователя 106 друзей. Вы открыли их список и увидели, что у большинства нет аватарок.', 
    isFake: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Это типичный фейк. Мошенники часто накручивают около ста друзей-ботов, чтобы страница казалась активной, но не заморачиваются с их оформлением.'
  },
  { 
    id: 2, 
    text: 'В альбомах более 200 фотографий: с выпускного, застолий, отдыха на природе с семьей.', 
    isFake: false, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Это живой человек. Злоумышленники используют левые снимки из интернета и редко загружают настоящие семейные фото.'
  },
  { 
    id: 3, 
    text: 'На стене 5 записей — это репосты философских цитат из сообществ. Все они опубликованы в один день 3 года назад.', 
    isFake: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Это мошенник! Страницу заполнили репостами за пару минут и оставили отлеживаться, чтобы сейчас использовать её для обмана.'
  },
  { 
    id: 4, 
    text: 'На аватарке профессиональное студийное фото девушки, лица почти не видно (отвернута к окну).', 
    isFake: true, 
    processed: false, 
    decision: null,
    isCorrect: false,
    explanation: 'Мошенники обожают постановочные студийные кадры без лица - они не вызывают подозрений при поиске по фото и привлекают внимание.'
  }
])

const makeDecision = (id, choiceIsFake) => {
  const fact = facts.value.find(f => f.id === id)
  if (fact) {
    fact.decision = choiceIsFake
    fact.isCorrect = (choiceIsFake === fact.isFake)
    fact.processed = true
  }
}

// Проверяем, на все ли вопросы дан ответ
const isGameOver = computed(() => {
  return facts.value.every(f => f.processed)
})

// Проверяем, нет ли ошибок
const allCorrect = computed(() => {
  if (!isGameOver.value) return false
  return facts.value.every(f => f.isCorrect)
})

const resetGame = () => {
  facts.value.forEach(f => {
    f.processed = false
    f.decision = null
    f.isCorrect = false
  })
}

const finishLesson = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lesson_vk_fake_completed', 'true')
    window.location.href = '/vk-info'
  }
}
</script>

<style scoped>
.back-link { text-decoration: none; color: var(--vp-c-text-2); display: inline-block; margin-bottom: 20px; font-weight: 500; }
.back-link:hover { color: #2787f5; }

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