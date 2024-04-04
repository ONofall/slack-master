$('.nav-icon').on('click', function () {
    $('.nav-menu').toggle();
});

// $(document).on("click", function(event){
//     var $trigger = $(".menu-item");
//     if (!$trigger.is(event.target) && $trigger.has(event.target).length === 0) {
//         $(".close-m").hide(200);
//     }
// });
$(document).on("click", function(event){
    if ($(event.target).closest(".close").length === 0) {
        $(".close-m").hide(200);
    }
});
$('.menu').on('click',function () {
    $('.h-menu').toggle()
})

$('.Pizza').on('click',function () {
    $('.h-Pizza').toggle()
})

$('.Pasta').on('click',function () {
    $('.h-Pasta').toggle()
})

$('.Juice').on('click',function () {
    $('.h-Juice').toggle()
})

// price section
$(document).ready(function() {
    const pizzaSizeInput = $('#pizza-size');
    const numberInput = $('.btn-number');
    const priceInput = $('.btn-price');
    const getPriceBtn = $('.btn-get');
    const pizzaButtons = $('.pizza-size');

    // Event listener for pizza buttons to set pizza size input value
    pizzaButtons.on('click', function() {
        const pizzaName = $(this).data('name');
        pizzaSizeInput.val(pizzaName);
    });

    // Event listener for Get Price button
    getPriceBtn.on('click', function() {
        const pizzaSize = pizzaSizeInput.val();
        const pizzaNumber = parseInt(numberInput.val());
        let pizzaPrice = 0;

        if (pizzaSize === "Pizza Small") {
            pizzaPrice = 20;
        } else if (pizzaSize === "Pizza Medium") {
            pizzaPrice = 30;
        } else if (pizzaSize === "Pizza Large") {
            pizzaPrice = 40;
        }

        if (!isNaN(pizzaNumber) && pizzaNumber > 0) {
            const totalPrice = pizzaPrice * pizzaNumber;
            priceInput.val(`${totalPrice}$`);
        } else {
            alert('Please enter a valid number of pizzas.');
        }
    });
});