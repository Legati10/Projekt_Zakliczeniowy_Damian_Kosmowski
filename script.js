const carsDiv = document.getElementById('cars');
const buyBtns = document.getElementsByClassName('buy-btn');
const formDiv = document.getElementById('form');
const resultDiv = document.getElementById('result');
const selectedCarDiv = document.getElementById('selected-car');
let selectedCar = null;

for (let btn of buyBtns) {
  btn.onclick = function() {
    const carDiv = btn.parentElement;
    selectedCar = {
      brand: carDiv.getAttribute('data-brand'),
      model: carDiv.getAttribute('data-model'),
      price: parseInt(carDiv.getAttribute('data-price'))
    };
    carsDiv.style.display = 'none';
    formDiv.style.display = 'block';
    resultDiv.style.display = 'none';
    selectedCarDiv.innerHTML = 'Wybrano: <b>' + selectedCar.brand + ' ' + selectedCar.model + '</b> (' + selectedCar.price + ' PLN)';
    const dateInput = document.getElementById('date');
    const d = new Date();
    d.setDate(d.getDate() + 14);
    dateInput.value = d.toISOString().split('T')[0];
  };
}

document.getElementById('buy').onclick = function() {
  const name = document.getElementById('name').value;
  const fin = document.getElementById('fin').value;
  const date = document.getElementById('date').value;
  const acc1 = document.getElementById('acc1').checked ? 200 : 0;
  const acc2 = document.getElementById('acc2').checked ? 500 : 0;
  const suma = selectedCar.price + acc1 + acc2;
  const akcesoria = [];
  if (acc1) akcesoria.push('Dywaniki');
  if (acc2) akcesoria.push('GPS');
  formDiv.style.display = 'none';
  resultDiv.style.display = 'block';
  resultDiv.innerHTML =
    "Dziękujemy za zakup!<br><br>" +
    "Samochód: <b>" + selectedCar.brand + " " + selectedCar.model + "</b><br>" +
    "Imię i nazwisko: <b>" + name + "</b><br>" +
    "Forma płatności: <b>" + fin + "</b><br>" +
    "Data odbioru: <b>" + date + "</b><br>" +
    "Akcesoria: <b>" + (akcesoria.length ? akcesoria.join(', ') : "Brak") + "</b><br>" +
    "Łączna cena: <b>" + suma + " PLN</b><br><br>" +
    "<button onclick='location.reload()' style='margin-top:14px;padding:10px 30px;background:#fff;border-radius:16px;border:1px solid #70c1ff;color:#0a6fa3;font-size:1em;cursor:pointer;'>Powrót</button>";
};

document.getElementById('search').oninput = function() {
  const s = this.value.toLowerCase();
  const cars = document.getElementsByClassName('car');
  for (let car of cars) {
    const brand = car.getAttribute('data-brand').toLowerCase();
    car.style.display = brand.includes(s) ? '' : 'none';
  }
};
