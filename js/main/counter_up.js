////////////////Start Statistics Counter Up////////////////
let a = 0;
$(window).scroll(function () {
    let oTop = $('.statistics').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.totals-number').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
        a = 1;
    }
});
////////////////End Statistics Counter Up////////////////