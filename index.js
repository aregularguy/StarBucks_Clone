window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const buttons = document.querySelectorAll('.stars-btn');
const merchandise = document.querySelector('.merchandise');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const stars = button.getAttribute('data-stars');
        merchandise.innerHTML = `
        <img width="375px" height="211px" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="">
            <p>Select Starbucks® merchandise</p>
            <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $${stars}.</p>
        `;
        merchandise.classList.remove('hidden');
    });
});
