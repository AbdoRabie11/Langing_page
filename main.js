const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied');

const count = document.getElementById('count')
const total = document.getElementById('total')

const movie = document.getElementById('movie')

let ticktPrice = +movie.value;

populateUi();

function setMvieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovie', movieIndex);
    localStorage.setItem('selectedPrice', moviePrice)
}

// ddkdk
function updateTotal() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    });
localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))

    const numOf = selectedSeats.length;
    count.innerText = numOf;
    total.innerText = numOf * ticktPrice

}

function populateUi() {
    
}

// movie select event
movie.addEventListener('change', (e) => {
    ticktPrice = +e.target.value;
    setMvieData(e.target.selectedIndex, e.target.value)
    updateTotal();
})


container.addEventListener('click', (e) => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
       e.target.classList.toggle('selected')
   }
   updateTotal();
})