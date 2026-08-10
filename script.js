const MENU = {"1": [["Roti canai, kuah dal", "Teh O"], ["Karipap ayam", "Susu kotak"], ["Ikan kembung goreng", "Udang sweet sour", "Epal merah"], ["Daging black pepper", "Oren"], ["Roti, bubur kacang hijau", "Minuman bermalta"]], "2": [["Bijirin, susu", "Minuman bermalta"], ["Ban manis", "Soya kotak"], ["Ikan tenggiri kicap", "Telur dadar", "Tembikai susu"], ["Ayam masak kari", "Epal merah"], ["Kek chiffon", "Minuman susu bermalta"]], "3": [["Nasi goreng kampung", "Minuman susu bercoklat"], ["Kek coklat", "Teh O"], ["Nasi beriani", "Daging kurma", "Telur rebus", "Nenas"], ["Bawal masam manis", "Tembikai merah"], ["Apam mekar", "Minuman bermalta"]], "4": [["Mi goreng", "Minuman bermalta"], ["Samosa", "Minuman susu bercoklat"], ["Sup ayam", "Sotong bercili", "Jambu batu"], ["Ikan kembung sambal", "Betik"], ["Mini pizza", "Minuman susu bermalta"]], "5": [["Roti, telur, kacang", "Minuman bermalta"], ["Karipap kentang", "Susu kotak"], ["Ayam berempah", "Tom yam campur", "Pisang"], ["Ikan tenggiri kari", "Tembikai susu"], ["Pau ayam", "Soya kotak"]], "6": [["Bihun goreng", "Minuman susu bermalta"], ["Pulut panggang", "Minuman bermalta"], ["Ikan selar goreng", "Telur masak sambal", "Nenas"], ["Ayam kurma", "Epal merah"], ["Muffin", "Susu kotak"]], "7": [["Spaghetti goreng", "Minuman susu bercoklat"], ["Cucur ikan bilis", "Teh O"], ["Talapia goreng berlada", "Sotong goreng kunyit", "Oren"], ["Nasi ayam", "Tembikai merah"], ["Donat", "Susu kotak"]], "8": [["Nasi goreng cendawan", "Minuman bermalta"], ["Cucur badak", "Minuman susu bermalta"], ["Sup daging", "Tauhu goreng berlada", "Epal merah"], ["Ikan kembung kicap", "Oren"], ["Kek pisang", "Soya kotak"]], "9": [["Bijirin, susu", "Minuman bermalta"], ["Cucur udang", "Susu kotak"], ["Tenggiri lemak cili api", "Sotong goreng bercili", "Jambu batu"], ["Ayam paprik", "Tembikai merah"], ["Ban kacang merah", "Minuman susu bercoklat"]], "10": [["Roti canai, kuah dal", "Minuman bermalta"], ["Cakoi, kaya", "Teh O"], ["Daging black pepper", "Telur sambal", "Nenas"], ["Ikan selar berlada", "Pisang"], ["Samosa", "Minuman susu bermalta"]], "11": [["Kuetiau goreng", "Minuman bermalta"], ["Pau goreng sambal", "Minuman susu bercoklat"], ["Ayam kari", "Udang kunyit", "Epal merah"], ["Daging paprik", "Tembikai susu"], ["Kek chiffon", "Minuman susu bermalta"]], "12": [["Bihun soto, sambal kicap", "Susu kotak"], ["Muffin", "Minuman bermalta"], ["Ikan kembung asam pedas", "Udang celup tepung", "Tembikai merah"], ["Nasi tomato", "Ayam masak merah", "Betik"], ["Mini pizza", "Teh O"]], "13": [["Nasi goreng Cina", "Minuman bermalta"], ["Pau kacang merah", "Minuman susu bercoklat"], ["Ikan selar goreng", "Tomyam campur", "Jambu batu"], ["Ayam halia", "Pisang berangan"], ["Karipap kentang", "Soya kotak"]], "14": [["Nasi lemak", "Teh O"], ["Karipap sardin", "Minuman susu bermalta"], ["Sup ayam", "Tempe berlada", "Betik"], ["Ikan siakap tiga rasa", "Tembikai merah"], ["Roti, sup cendawan berkrim", "Susu kotak"]], "15": [["Bihun goreng", "Teh O"], ["Apam mekar", "Minuman susu bercoklat"], ["Rendang daging", "Telur dadar", "Betik"], ["Ikan kembung kicap", "Oren"], ["Ban manis", "Minuman susu bermalta"]], "16": [["Spaghetti bolognese", "Susu kotak"], ["Mini pizza", "Soya kotak"], ["Ayam kicap", "Telur sambal", "Tembikai merah"], ["Ikan tenggiri asam pedas", "Pisang berangan"], ["Pau kacang merah", "Minuman bermalta"]], "17": [["Roti, telur, kacang", "Minuman susu bermalta"], ["Karipap ayam", "Minuman susu bercoklat"], ["Ikan siakap tiga rasa", "Tauhu berlada", "Nenas"], ["Daging black pepper", "Betik"], ["Kek pisang", "Minuman bermalta"]], "18": [["Mi goreng", "Teh O"], ["Donat", "Susu kotak"], ["Ayam kurma", "Sotong kunyit", "Jambu batu"], ["Ikan selar berlada", "Epal merah"], ["Samosa", "Minuman bermalta"]], "19": [["Makaroni goreng", "Teh O"], ["Pau ayam", "Soya kotak"], ["Ayam berempah", "Udang sweet sour", "Tembikai susu"], ["Ikan tenggiri lemak cili api", "Epal merah"], ["Cucur badak", "Minuman susu bercoklat"]], "20": [["Bijirin, susu", "Minuman susu bermalta"], ["Pulut panggang", "Susu kotak"], ["Daging kicap", "Tempe berlada", "Nenas"], ["Ikan talapia berlada", "Tembikai merah"], ["Ban kacang merah", "Minuman susu bercoklat"]], "21": [["Nasi goreng kampung", "Minuman susu bermalta"], ["Karipap kentang", "Minuman bermalta"], ["Sup ayam", "Telur dadar", "Oren"], ["Ikan bawal masak taucu", "Tembikai merah"], ["Kek coklat", "Minuman susu bercoklat"]], "22": [["Roti canai, kuah dal", "Teh O"], ["Mini pizza", "Susu kotak"], ["Ikan kembung goreng", "Udang paprik", "Pisang berangan"], ["Daging black pepper", "Jambu batu"], ["Cucur ikan bilis", "Minuman bermalta"]], "23": [["Bijirin, susu", "Teh O"], ["Kek chiffon", "Minuman susu bermalta"], ["Ikan tenggiri asam pedas", "Tempe berlada", "Tembikai susu"], ["Ayam kicap", "Epal merah"], ["Sup cendawan berkrim", "Minuman susu bercoklat"]], "24": [["Nasi lemak", "Teh O"], ["Cucur udang", "Susu kotak"], ["Nasi tomato", "Ayam masak merah", "Udang celup tepung", "Betik"], ["Ikan bawal masam manis", "Oren"], ["Cakoi", "Minuman bermalta"]], "25": [["Nasi goreng Cina", "Susu kotak"], ["Cucur badak", "Minuman susu bermalta"], ["Sup ayam", "Sotong bercili", "Pisang berangan"], ["Ikan keli berlada", "Epal merah"], ["Bubur kacang hijau", "Minuman bermalta"]], "26": [["Roti, telur, kacang", "Minuman susu bercoklat"], ["Karipap sardin", "Soya kotak"], ["Ayam goreng berempah", "Tomyam campur", "Oren"], ["Ikan tenggiri kicap", "Jambu batu"], ["Kek pisang", "Susu kotak"]], "27": [["Kuetiau goreng", "Minuman susu bermalta"], ["Pau goreng sambal", "Minuman bermalta"], ["Ayam kurma", "Telur sambal", "Epal merah"], ["Ikan selar berlada", "Tembikai merah"], ["Muffin", "Minuman bermalta"]], "28": [["Spaghetti goreng", "Minuman susu bermalta"], ["Pulut panggang", "Minuman susu bercoklat"], ["Ikan bawal taucu", "Sambal udang", "Nenas"], ["Nasi ayam", "Tembikai susu"], ["Donat", "Minuman bermalta"]], "29": [["Roti canai, kuah dal", "Teh O"], ["Karipap ayam", "Susu kotak"], ["Ikan kembung goreng", "Udang sweet sour", "Epal merah"], ["Daging black pepper", "Oren"], ["Bubur kacang hijau", "Minuman bermalta"]], "30": [["Bijirin, susu", "Minuman bermalta"], ["Ban manis", "Soya kotak"], ["Ikan tenggiri kicap", "Telur dadar", "Tembikai susu"], ["Ayam kari", "Epal merah"], ["Kek chiffon", "Minuman susu bermalta"]], "31": [["Nasi goreng kampung", "Minuman susu bercoklat"], ["Kek coklat", "Teh O"], ["Nasi beriani", "Daging kurma", "Telur rebus", "Tembikai merah"], ["Ikan bawal masam manis", "Tembikai merah"], ["Apam mekar", "Minuman bermalta"]]};
const MEALS = [
  {name:"Sarapan Pagi",icon:"☀️",time:"5:00 pagi"},
  {name:"Minum Pagi",icon:"🥐",time:"9:00 pagi"},
  {name:"Makan Tengah Hari",icon:"🍽️",time:"12:00 tengah hari"},
  {name:"Makan Malam",icon:"🌙",time:"5:00 petang"},
  {name:"Minum Malam",icon:"🥛",time:"9:00 malam"}
];
const MEAL_STARTS = [300, 540, 720, 1020, 1260];

const picker = document.querySelector("#datePicker");
const grid = document.querySelector("#menuGrid");
let selected = new Date();

function localISO(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}

function activeMealIndex(date){
  const now = new Date();
  if(date.toDateString() !== now.toDateString()) return -1;
  const mins = now.getHours()*60 + now.getMinutes();
  let idx = -1;
  MEAL_STARTS.forEach((start,i)=>{ if(mins >= start) idx = i; });
  return idx;
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
  grid.innerHTML = MEALS.map((meal,i)=>`
    <article class="meal-card ${i===active ? "active":""}">
      <span class="meal-icon">${meal.icon}</span>
      <h3>${meal.name}</h3>
      <ul>${items[i].map(food=>`<li>${food}</li>`).join("")}</ul>
    </article>
  `).join("");

  const now = new Date();
  if(selected.toDateString() !== now.toDateString()){
    document.querySelector("#statusLabel").textContent = "TARIKH DIPILIH";
    document.querySelector("#nextMealText").textContent = "Paparan menu untuk tarikh yang dipilih";
    return;
  }
  const mins = now.getHours()*60+now.getMinutes();
  const starts = MEAL_STARTS;
  const next = starts.findIndex(t=>t>mins);
  document.querySelector("#statusLabel").textContent = next === -1 ? "SELESAI" : "SETERUSNYA";
  document.querySelector("#nextMealText").textContent =
    next === -1 ? "Semua hidangan hari ini telah selesai" : `${MEALS[next].name} • ${MEALS[next].time}`;
}

picker.addEventListener("change", e => render(new Date(e.target.value+"T12:00:00")));
document.querySelector("#todayBtn").addEventListener("click",()=>render(new Date()));
document.querySelector("#prevBtn").addEventListener("click",()=>{const d=new Date(selected);d.setDate(d.getDate()-1);render(d);});
document.querySelector("#nextBtn").addEventListener("click",()=>{const d=new Date(selected);d.setDate(d.getDate()+1);render(d);});
render(new Date());
