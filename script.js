// URL Web App Google Apps Script
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIuHliMJHCqRlflVln815DoFtvIWC_AE4qyT9KCGhHJjyT_dIAaQrPCZifOaEt9RCCYw/exec";

const MENU = {"1": [["Roti canai, kuah dal", "Teh O"], ["Karipap ayam", "Susu kotak"], ["Ikan kembung goreng", "Udang sweet sour", "Epal merah"], ["Daging black pepper", "Oren"], ["Roti, bubur kacang hijau", "Minuman bermalta"]], "2": [["Bijirin, susu", "Minuman bermalta"], ["Ban manis", "Soya kotak"], ["Ikan tenggiri kicap", "Telur dadar", "Tembikai susu"], ["Ayam masak kari", "Epal merah"], ["Kek chiffon", "Minuman susu bermalta"]], "3": [["Nasi goreng kampung", "Minuman susu bercoklat"], ["Kek coklat", "Teh O"], ["Nasi beriani", "Daging kurma", "Telur rebus", "Nenas"], ["Bawal masam manis", "Tembikai merah"], ["Apam mekar", "Minuman bermalta"]], "4": [["Mi goreng", "Minuman bermalta"], ["Samosa", "Minuman susu bercoklat"], ["Sup ayam", "Sotong bercili", "Jambu batu"], ["Ikan kembung sambal", "Betik"], ["Mini pizza", "Minuman susu bermalta"]], "5": [["Roti, telur, kacang", "Minuman bermalta"], ["Karipap kentang", "Susu kotak"], ["Ayam berempah", "Tom yam campur", "Pisang"], ["Ikan tenggiri kari", "Tembikai susu"], ["Pau ayam", "Soya kotak"]], "6": [["Bihun goreng", "Minuman susu bermalta"], ["Pulut panggang", "Minuman bermalta"], ["Ikan selar goreng", "Telur masak sambal", "Nenas"], ["Ayam kurma", "Epal merah"], ["Muffin", "Susu kotak"]], "7": [["Spaghetti goreng", "Minuman susu bercoklat"], ["Cucur ikan bilis", "Teh O"], ["Talapia goreng berlada", "Sotong goreng kunyit", "Oren"], ["Nasi ayam", "Tembikai merah"], ["Donat", "Susu kotak"]], "8": [["Nasi goreng cendawan", "Minuman bermalta"], ["Cucur badak", "Minuman susu bermalta"], ["Sup daging", "Tauhu goreng berlada", "Epal merah"], ["Ikan kembung kicap", "Oren"], ["Kek pisang", "Soya kotak"]], "9": [["Bijirin, susu", "Minuman bermalta"], ["Cucur udang", "Susu kotak"], ["Tenggiri lemak cili api", "Sotong goreng bercili", "Jambu batu"], ["Ayam paprik", "Tembikai merah"], ["Ban kacang merah", "Minuman susu bercoklat"]], "10": [["Roti canai, kuah dal", "Minuman bermalta"], ["Cakoi, kaya", "Teh O"], ["Daging black pepper", "Telur sambal", "Nenas"], ["Ikan selar berlada", "Pisang"], ["Samosa", "Minuman susu bermalta"]], "11": [["Kuetiau goreng", "Minuman bermalta"], ["Pau goreng sambal", "Minuman susu bercoklat"], ["Ayam kari", "Udang kunyit", "Epal merah"], ["Daging paprik", "Tembikai susu"], ["Kek chiffon", "Minuman susu bermalta"]], "12": [["Bihun soto, sambal kicap", "Susu kotak"], ["Muffin", "Minuman bermalta"], ["Ikan kembung asam pedas", "Udang celup tepung", "Tembikai merah"], ["Nasi tomato", "Ayam masak merah", "Betik"], ["Mini pizza", "Teh O"]], "13": [["Nasi goreng Cina", "Minuman bermalta"], ["Pau kacang merah", "Minuman susu bercoklat"], ["Ikan selar goreng", "Tomyam campur", "Jambu batu"], ["Ayam halia", "Pisang berangan"], ["Karipap kentang", "Soya kotak"]], "14": [["Nasi lemak", "Teh O"], ["Karipap sardin", "Minuman susu bermalta"], ["Sup ayam", "Tempe berlada", "Betik"], ["Ikan siakap tiga rasa", "Tembikai merah"], ["Roti, sup cendawan berkrim", "Susu kotak"]], "15": [["Bihun goreng", "Teh O"], ["Apam mekar", "Minuman susu bercoklat"], ["Rendang daging", "Telur dadar", "Betik"], ["Ikan kembung kicap", "Oren"], ["Ban manis", "Minuman susu bermalta"]], "16": [["Spaghetti bolognese", "Susu kotak"], ["Mini pizza", "Soya kotak"], ["Ayam kicap", "Telur sambal", "Tembikai merah"], ["Ikan tenggiri asam pedas", "Pisang berangan"], ["Pau kacang merah", "Minuman bermalta"]], "17": [["Roti, telur, kacang", "Minuman susu bermalta"], ["Karipap ayam", "Minuman susu bercoklat"], ["Ikan siakap tiga rasa", "Tauhu berlada", "Nenas"], ["Daging black pepper", "Betik"], ["Kek pisang", "Minuman bermalta"]], "18": [["Mi goreng", "Teh O"], ["Donat", "Susu kotak"], ["Ayam kurma", "Sotong kunyit", "Jambu batu"], ["Ikan selar berlada", "Epal merah"], ["Samosa", "Minuman bermalta"]], "19": [["Makaroni goreng", "Teh O"], ["Pau ayam", "Soya kotak"], ["Ayam berempah", "Udang sweet sour", "Tembikai susu"], ["Ikan tenggiri lemak cili api", "Epal merah"], ["Cucur badak", "Minuman susu bercoklat"]], "20": [["Bijirin, susu", "Minuman susu bermalta"], ["Pulut panggang", "Susu kotak"], ["Daging kicap", "Tempe berlada", "Nenas"], ["Ikan talapia berlada", "Tembikai merah"], ["Ban kacang merah", "Minuman susu bercoklat"]], "21": [["Nasi goreng kampung", "Minuman susu bermalta"], ["Karipap kentang", "Minuman bermalta"], ["Sup ayam", "Telur dadar", "Oren"], ["Ikan bawal masak taucu", "Tembikai merah"], ["Kek coklat", "Minuman susu bercoklat"]], "22": [["Roti canai, kuah dal", "Teh O"], ["Mini pizza", "Susu kotak"], ["Ikan kembung goreng", "Udang paprik", "Pisang berangan"], ["Daging black pepper", "Jambu batu"], ["Cucur ikan bilis", "Minuman bermalta"]], "23": [["Bijirin, susu", "Teh O"], ["Kek chiffon", "Minuman susu bermalta"], ["Ikan tenggiri asam pedas", "Tempe berlada", "Tembikai susu"], ["Ayam kicap", "Epal merah"], ["Sup cendawan berkrim", "Minuman susu bercoklat"]], "24": [["Nasi lemak", "Teh O"], ["Cucur udang", "Susu kotak"], ["Nasi tomato", "Ayam masak merah", "Udang celup tepung", "Betik"], ["Ikan bawal masam manis", "Oren"], ["Cakoi", "Minuman bermalta"]], "25": [["Nasi goreng Cina", "Susu kotak"], ["Cucur badak", "Minuman susu bermalta"], ["Sup ayam", "Sotong bercili", "Pisang berangan"], ["Ikan keli berlada", "Epal merah"], ["Bubur kacang hijau", "Minuman bermalta"]], "26": [["Roti, telur, kacang", "Minuman susu bercoklat"], ["Karipap sardin", "Soya kotak"], ["Ayam goreng berempah", "Tomyam campur", "Oren"], ["Ikan tenggiri kicap", "Jambu batu"], ["Kek pisang", "Susu kotak"]], "27": [["Kuetiau goreng", "Minuman susu bermalta"], ["Pau goreng sambal", "Minuman bermalta"], ["Ayam kurma", "Telur sambal", "Epal merah"], ["Ikan selar berlada", "Tembikai merah"], ["Muffin", "Minuman bermalta"]], "28": [["Spaghetti goreng", "Minuman susu bermalta"], ["Pulut panggang", "Minuman susu bercoklat"], ["Ikan bawal taucu", "Sambal udang", "Nenas"], ["Nasi ayam", "Tembikai susu"], ["Donat", "Minuman bermalta"]], "29": [["Roti canai, kuah dal", "Teh O"], ["Karipap ayam", "Susu kotak"], ["Ikan kembung goreng", "Udang sweet sour", "Epal merah"], ["Daging black pepper", "Oren"], ["Bubur kacang hijau", "Minuman bermalta"]], "30": [["Bijirin, susu", "Minuman bermalta"], ["Ban manis", "Soya kotak"], ["Ikan tenggiri kicap", "Telur dadar", "Tembikai susu"], ["Ayam kari", "Epal merah"], ["Kek chiffon", "Minuman susu bermalta"]], "31": [["Nasi goreng kampung", "Minuman susu bercoklat"], ["Kek coklat", "Teh O"], ["Nasi beriani", "Daging kurma", "Telur rebus", "Tembikai merah"], ["Ikan bawal masam manis", "Tembikai merah"], ["Apam mekar", "Minuman bermalta"]]};

const MEALS = [
  {name:"Sarapan Pagi",icon:"☀️"},
  {name:"Minum Pagi",icon:"🥐"},
  {name:"Makan Tengah Hari",icon:"🍽️"},
  {name:"Makan Malam",icon:"🌙"},
  {name:"Minum Malam",icon:"🥛"}
];
const MEAL_STARTS = [300, 540, 720, 1020, 1260];

const picker = document.querySelector("#datePicker");
const grid = document.querySelector("#menuGrid");
const mealSelect = document.querySelector("#mealSelect");
let selected = new Date();

function localISO(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}

function activeMealIndex(date){
  const now = new Date();
  if(date.toDateString() !== now.toDateString()) return -1;
  const mins = now.getHours()*60 + now.getMinutes();
  let idx = 0;
  MEAL_STARTS.forEach((start,i)=>{ if(mins >= start) idx = i; });
  return idx;
}

function updateMealSelect(items, activeIndex){
  if(!mealSelect) return;
  mealSelect.innerHTML = MEALS.map((meal, i) => {
    const dishList = (items[i] || []).join(", ");
    return `<option value="${meal.name} - ${dishList}">${meal.name} </option>`;
  }).join("");

  // Default kepada hidangan semasa yang aktif jika hari ini, atau hidangan pertama
  const defaultIdx = (activeIndex >= 0 && activeIndex < MEALS.length) ? activeIndex : 0;
  const defaultMeal = MEALS[defaultIdx];
  const defaultDishes = (items[defaultIdx] || []).join(", ");
  mealSelect.value = `${defaultMeal.name} - ${defaultDishes}`;
}

function render(date){
  selected = new Date(date);
  const day = selected.getDate();
  const items = MENU[day] || MENU[1];
  picker.value = localISO(selected);
  document.querySelector("#dayNumber").textContent = day;
  document.querySelector("#fullDate").textContent = selected.toLocaleDateString("ms-MY", {
    weekday:"long", day:"numeric", month:"long", year:"numeric"
  });

  const active = activeMealIndex(selected);
  const order = active === -1 ? [0, 1, 2, 3, 4] : [active, ...[0, 1, 2, 3, 4].filter(i => i !== active)];

  if(active !== -1){
    grid.classList.add("has-active");
  } else {
    grid.classList.remove("has-active");
  }

  grid.innerHTML = order.map(i => {
    const meal = MEALS[i];
    const isActive = i === active;
    return `
    <article class="meal-card ${isActive ? "active" : ""}">
      <div class="meal-card-header">
        <div class="meal-meta">
          <span class="meal-icon">${meal.icon}</span>
          <div>
            <span class="meal-time">${meal.time}</span>
            <h3>${meal.name}</h3>
          </div>
        </div>
        ${isActive ? `<span class="serving-badge"><span class="pulse-dot"></span>SEDANG DIHIDANG</span>` : ""}
      </div>
      <ul>${items[i].map(food => `<li>${food}</li>`).join("")}</ul>
    </article>
  `;
  }).join("");

  updateMealSelect(items, active);
}

picker.addEventListener("change", e => render(new Date(e.target.value+"T12:00:00")));
document.querySelector("#todayBtn").addEventListener("click",()=>render(new Date()));
document.querySelector("#prevBtn").addEventListener("click",()=>{const d=new Date(selected);d.setDate(d.getDate()-1);render(d);});
document.querySelector("#nextBtn").addEventListener("click",()=>{const d=new Date(selected);d.setDate(d.getDate()+1);render(d);});
render(new Date());
setInterval(()=>render(selected), 60000);

// --- LOGIK RATING & MAKLUM BALAS GOOGLE SHEETS ---
const starBtns = document.querySelectorAll(".star-btn");
const ratingValueInput = document.querySelector("#ratingValue");
const ratingLabel = document.querySelector("#ratingLabel");
const feedbackForm = document.querySelector("#feedbackForm");
const reporterInput = document.querySelector("#reporterInput");
const suggestionInput = document.querySelector("#suggestionInput");
const submitFeedbackBtn = document.querySelector("#submitFeedbackBtn");
const feedbackStatus = document.querySelector("#feedbackStatus");

const RATING_TEXTS = {
  1: "1 Bintang (Sangat Kurang)",
  2: "2 Bintang (Kurang Memuaskan)",
  3: "3 Bintang (Biasa)",
  4: "4 Bintang (Sedap / Baik)",
  5: "5 Bintang (Sangat Sedap / Terbaik!)"
};

function setRating(val){
  if(!ratingValueInput || !ratingLabel) return;
  ratingValueInput.value = val;
  if(val > 0){
    ratingLabel.textContent = RATING_TEXTS[val] || `${val} Bintang`;
    ratingLabel.style.color = "var(--green)";
    ratingLabel.style.fontWeight = "700";
  } else {
    ratingLabel.textContent = "Sila pilih rating";
    ratingLabel.style.color = "var(--muted)";
    ratingLabel.style.fontWeight = "600";
  }
  starBtns.forEach(btn => {
    const btnVal = parseInt(btn.dataset.value, 10);
    btn.classList.toggle("selected", btnVal <= val);
  });
}

starBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = parseInt(btn.dataset.value, 10);
    setRating(val);
  });
  btn.addEventListener("mouseenter", () => {
    const val = parseInt(btn.dataset.value, 10);
    starBtns.forEach(b => {
      b.classList.toggle("hovered", parseInt(b.dataset.value, 10) <= val);
    });
  });
  btn.addEventListener("mouseleave", () => {
    starBtns.forEach(b => b.classList.remove("hovered"));
  });
});

if(feedbackForm){
  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const reporter = reporterInput.value.trim();
    const rating = parseInt(ratingValueInput.value, 10);
    const selectedMenu = mealSelect ? mealSelect.value : "-";
    const suggestion = suggestionInput.value.trim();

    if(!reporter){
      feedbackStatus.className = "feedback-status error";
      feedbackStatus.textContent = "⚠️ Sila masukkan Nama & Kelas anda (contoh: Anaqi 4IQ).";
      reporterInput.focus();
      return;
    }

    if(!rating || rating < 1){
      feedbackStatus.className = "feedback-status error";
      feedbackStatus.textContent = "⚠️ Sila klik bintang untuk memilih penilaian anda (1 hingga 5).";
      return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("ms-MY", { day: "2-digit", month: "2-digit", year: "numeric" });
    const timeStr = now.toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit", hour12: true });

    const payload = {
      date: dateStr,
      time: timeStr,
      menu: selectedMenu,
      rating: `${rating} / 5`,
      reporter: reporter,
      suggestion: suggestion || "-"
    };

    submitFeedbackBtn.disabled = true;
    submitFeedbackBtn.classList.add("loading");
    feedbackStatus.className = "feedback-status";
    feedbackStatus.style.display = "none";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });

      feedbackStatus.className = "feedback-status success";
      feedbackStatus.textContent = `✅ Terima kasih ${reporter}! Penilaian dan maklum balas anda telah berjaya disimpan terus ke Google Sheet.`;

      suggestionInput.value = "";
      setRating(0);
    } catch(err){
      feedbackStatus.className = "feedback-status error";
      feedbackStatus.textContent = "⚠️ Ralat semasa menghantar maklum balas. Sila periksa sambungan internet atau tetapan Google Apps Script.";
    } finally {
      submitFeedbackBtn.disabled = false;
      submitFeedbackBtn.classList.remove("loading");
    }
  });
}

