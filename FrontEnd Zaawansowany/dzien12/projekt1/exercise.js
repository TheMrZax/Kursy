// let $fontSize = 50;

$('.interface').on('click', function () {
    // console.log("Styka!")
    // console.log(this)
    // console.log($(this))
    // console.log($(this).text())

    // console.log($(this).attr("class"))
    // console.log(this.className)

    if ($(this).hasClass("orange")) {
        // $('body').css("background-color", "orange")
        $('body').attr('class', 'orange')
    }
    if ($(this).hasClass("green")) {
        // $('body').css("background-color", "green")
        $('body').attr('class', 'green')
    }



    if ($(this).hasClass("increase")) {
        // $fontSize++;
        // $('body p').css("font-size", $fontSize + "px")
        $('p').animate({
            "font-size": "+=2"
        }, 500)
    }
    if ($(this).hasClass("move")) {
        // $fontSize++;
        // $('body p').css("font-size", $fontSize + "px")
        $('p').animate({
            "letter-spacing": "+=2",
            'left': "+=10px"
        }, 500)
    }
})