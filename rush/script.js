$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
  });
});

function addToCart(productName) {
  alert("Added " + productName + " to cart!");
}
