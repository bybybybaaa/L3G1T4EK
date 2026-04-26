# Проверка пароля на "прочность" 🦾

Введи свой пароль ниже, чтобы узнать, сколько времени потребуется хакеру из соседнего подъезда, чтобы его взломать.

<div style="background: var(--vp-c-bg-soft); padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid var(--vp-c-brand);">
  <input 
    type="text" 
    id="passInput" 
    placeholder="Введи пароль для теста..." 
    style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 15px; color: #000;"
    oninput="analyzePass()"
  />
  
  <div id="meter" style="height: 10px; width: 0%; border-radius: 5px; transition: 0.3s; margin-bottom: 10px;"></div>
  <p id="passResult" style="font-weight: bold; font-size: 1.1em;"></p>
  <p id="passAdvice" style="font-style: italic; opacity: 0.8;"></p>
</div>

<script>
function analyzePass() {
  const pass = document.getElementById('passInput').value;
  const result = document.getElementById('passResult');
  const advice = document.getElementById('passAdvice');
  const meter = document.getElementById('meter');
  
  if (pass.length === 0) {
    result.innerText = "";
    advice.innerText = "";
    meter.style.width = "0%";
    return;
  }

  let score = 0;
  if (pass.length > 8) score++;
  if (pass.length > 12) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;

  const states = [
    { color: '#ff4757', text: 'Ультра-слабо. Взломано за 0.01 сек 🤡', width: '20%' },
    { color: '#ffa502', text: 'Слабовато. Хакер справится за обедом 🍔', width: '40%' },
    { color: '#eccc68', text: 'Нормально, но можно лучше 😐', width: '60%' },
    { color: '#2ed573', text: 'Хороший пароль! Хакер пойдет искать другую жертву 💪', width: '85%' },
    { color: '#1e90ff', text: 'ЛЕГЕНДАРНО! Твой пароль — крепость 🏰', width: '100%' }
  ];

  const current = states[Math.min(score, 4)];
  result.innerText = current.text;
  result.style.color = current.color;
  meter.style.backgroundColor = current.color;
  meter.style.width = current.width;

  if (score < 3) {
    advice.innerText = "Совет: добавь спецсимволы (!@#) и сделай пароль длиннее.";
  } else {
    advice.innerText = "Красавчик! Теперь не забудь включить 2FA в MAX.";
  }
}
</script>