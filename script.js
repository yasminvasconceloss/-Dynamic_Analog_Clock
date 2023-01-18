const pontHours = document.querySelector('.pont.hours')
const pontMinutes = document.querySelector('.pont.minutes')
const pontSeconds = document.querySelector('.pont.seconds')

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);

};

// ex
// se Date = 5s  => 5/60 = 0,08
// convert para rotation -> 0,08 * 360 = 30


const setClock = () => {
  const currentDate = new Date();

  const PorcentSeconds = currentDate.getSeconds() / 60;
  const PorcentMinutes = (PorcentSeconds + currentDate.getMinutes()) / 60;
  const PorcentHours = (PorcentMinutes + currentDate.getHours()) / 12;

  setRotation(pontSeconds, PorcentSeconds);
  setRotation(pontMinutes, PorcentMinutes);
  setRotation(pontHours, PorcentHours);

};

setClock();

setInterval(setClock, 1000);