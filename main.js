$(document).ready(function () {
    function getTeksFromPartOfDay() {
        const partOfDay = getPartOfDay();

        let teks = [];

        if (partOfDay === 'Pagi') {
            teks = [
                'Selamat Pagi Rara',
                'Matahari baru saja menyapa dunia',
                'tetapi sinarnya',
                'tak akan pernah mampu',
                'menandingi kehangatan',
                'yang kau bawa ke dalam hidupku.',
                'Setiap pagi aku bangun',
                'dengan rasa syukur',
                'karena kamu ada di sini,',
                'di hati ini.',
                'Mungkin jarak atau waktu',
                'terkadang memisahkan kita,',
                'tetapi rasa rinduku selalu',
                'menuntun setiap langkahku kepadamu.',
                'Semoga harimu seindah senyummu,',
                'secerah matamu',
                'yang selalu membuatku merasa tenang.',
                'Aku mencintaimu,',
                'lebih dalam dari kata yang pernah ada.',
                '. ^500 . ^500 .',
                'Akmal',
            ];
        }

        if (partOfDay === 'Siang') {
            teks = [
                'Selamat Siang Rara',
                'di tengah panasnya siang ini,',
                'pikiranku selalu terpaut padamu.',
                'Bukan cuaca yang membuat siangku hangat,',
                'tapi bayangan akan senyummu,',
                'sentuhanmu,',
                'dan segala yang membuatmu',
                'begitu istimewa.',
                'Terima kasih',
                'telah menjadi alasan',
                'di balik senyumku,',
                'kekuatanku untuk melalui hari-hari sulit,',
                'dan sumber kebahagiaanku',
                'di tengah hiruk pikuk dunia.',
                'Hanya dengan memikirkanmu,',
                'lelahku seolah hilang,',
                'dan aku siap untuk terus berjalan,',
                'bersama mimpi',
                'yang ingin kita capai bersama.',
                '. ^500 . ^500 .',
                'Akmal',
            ];
        }

        if (partOfDay === 'Sore') {
            teks = [
                'Selamat Sore Rara',
                'Langit sore',
                'selalu mengingatkanku',
                'pada indahnya setiap saat',
                'yang aku habiskan denganmu.',
                'Matahari mungkin akan tenggelam,',
                'tetapi cintaku padamu',
                'tak pernah pudar.',
                'Dalam senja yang perlahan berubah warna,',
                'aku selalu melihat wajahmu,',
                'hangat dan penuh kasih sayang.',
                'Aku harap soremu menyenangkan',
                'dan penuh kehangatan',
                'seperti rasa',
                'yang selalu mengisi hatiku',
                'sejak kamu datang dalam hidupku.',
                '. ^500 . ^500 .',
                'Akmal',
            ];
        }

        if (partOfDay === 'Malam') {
            teks = [
                'Selamat Malam Rara',
                'Di malam yang tenang ini,',
                'bintang-bintang mungkin bersinar,',
                'tetapi tidak ada yang mampu',
                'menyinari hidupku secerah kamu.',
                'Kamu adalah',
                'alasanku tersenyum saat terlelap,',
                'mimpi yang tak ingin aku bangunkan,',
                'dan harapan',
                'yang terus kupeluk',
                'dalam setiap desahan nafasku.',
                'Semoga malam ini',
                'memberimu kedamaian,',
                'dan semoga hatimu merasa aman,',
                'karena selalu ada cintaku',
                'yang akan menjagamu,',
                'menghangatkanmu.',
                'Selamat malam,',
                'Fioravanty Azzahra,',
                'tidurlah dengan tenang,',
                'karena setiap malamku',
                'takkan sempurna',
                'tanpa doa',
                'dan harapan untukmu.',
                '. ^500 . ^500 .',
                'Akmal',
            ];
        }

        return teks;
    }

    getTeksFromPartOfDay();

    // function clicks() {
    $('.tombolAnimasi').click(function () {
        $('#div1').hide();
        $('#div3').hide();
        $('#div2').show();
        $('#div2').addClass('fadeinv2');

        $('#audio').trigger('play');

        var typed = new Typed('.katakata', {
            strings: getTeksFromPartOfDay(),

            typeSpeed: 70,
            startDelay: 1500,
            backSpeed: 70,
            backDelay: 1500,
            onComplete: function () {
                setTimeout(function () {
                    $('#div2').hide();
                    $('#div2').removeClass('fadeinv2');
                    $('#div3').show();
                    $('#div3').addClass('fadeinv2');
                    startHeartsAnimation();
                    startCarousel();
                }, 2000);
            },
        });
    });

    function startHeartsAnimation() {
        setInterval(function () {
            var heart = $('<div class="heart"></div>');
            var leftPosition = Math.random() * 100;
            var animationDuration = Math.random() * 2 + 3;
            var randomRotation = Math.random() * 90 - 45;
            heart.css({
                left: leftPosition + 'vw',
                'animation-duration': animationDuration + 's',
                transform: 'rotate(' + randomRotation + 'deg)',
                position: 'absolute',
            });

            $('#hearts').append(heart);

            setTimeout(function () {
                heart.remove();
            }, animationDuration * 1000);
        }, 500);
    }

    // function startCarousel() {
    //     let $slides = $('.carousel-slide');
    //     let currentIndex = 0;
    //     const totalSlides = $slides.length;

    //     function showSlide(index) {
    //         $slides.fadeOut(1000).eq(index).fadeIn(1000);
    //     }

    //     function nextSlide() {
    //         currentIndex = (currentIndex + 1) % totalSlides;
    //         showSlide(currentIndex);
    //     }

    //     showSlide(currentIndex);
    //     setInterval(nextSlide, 3000);
    // }

    function startCarousel() {
        const $slides = $('.carousel-slide');
        let currentSlide = 0;

        function showSlide(index) {
            $slides.removeClass('active').eq(index).addClass('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % $slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function getPartOfDay() {
        const now = new Date();
        const hours = now.getHours(); // Mendapatkan jam saat ini

        if (hours >= 5 && hours <= 10) {
            return 'Pagi';
        } else if (hours >= 12 && hours <= 14) {
            return 'Siang';
        } else if (hours >= 14 && hours <= 17) {
            return 'Sore';
        } else {
            return 'Malam';
        }
    }

    function updateMetaAndTitle() {
        const partOfDay = getPartOfDay();

        // Update title
        document.title = `Selamat ${partOfDay} Fioravanty Azzahra`;

        // Update meta og-title
        $('meta[name="og-title"]').attr(
            'content',
            `Selamat ${partOfDay} Fioravanty Azzahra`
        );
    }

    updateMetaAndTitle();
});
