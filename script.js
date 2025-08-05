// === Data lomba debat ===
// Tambahkan tanggal dan lomba sesuka kamu
const events = {
  '2025-08-11': {
    name: 'Open Regist EEC',
    url: 'https://linktr.ee/EECUNILA?fbclid=PAZXh0bgNhZW0CMTEAAadj3huNKDV0izGGyaYHdK-soWUkXLOsv_4naV1prMUw8Sq95N1zHLV8swAM6w_aem_e8618a-dxcvth9yodFdvdw'
  },
  '2025-08-03': {
    name: 'Early Bird SMANDA',
    url: 'https://smandaolympic2025.carrd.co'
  },
  '2025-08-25' : {
    name: 'Lately Bird SMANDA',
    url: 'https://smandaolympic2025.carrd.co'
  
  },
  '2025-07-10': {
    name: 'Monaco (late 21 august)',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfqkIt6oIjlCso6LETXnuOEcNiAaZDm5gv1VeuZbVZImfwvgg/viewform'
  }
};

// Tanggal aktif sekarang (bisa digeser)
let currentDate = new Date();

function generateCalendar(date) {
  const month = date.getMonth();
  const year = date.getFullYear();

  const calendarDiv = document.getElementById('calendar');
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  document.getElementById('monthYear').innerText = `${monthNames[month]} ${year}`;

  let table = '<table><tr>';
  for (let i = 0; i < 7; i++) {
    table += `<th>${dayNames[i]}</th>`;
  }
  table += '</tr><tr>';

  for (let i = 0; i < firstDay; i++) {
    table += '<td></td>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
      table += '</tr><tr>';
    }

    if (events[dateStr]) {
      table += `<td class="event" onclick="window.open('${events[dateStr].url}', '_blank')">${day}<br><small>${events[dateStr].name}</small></td>`;
    } else {
      table += `<td>${day}</td>`;
    }
  }

  table += '</tr></table>';
  calendarDiv.innerHTML = table;
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate);
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate);
}

// Inisialisasi pertama
generateCalendar(currentDate);
