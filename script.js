const url2 = 'http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4';
var wrapper = document.getElementById('content');

fetch(url2)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log('CAR data', data);
        for (var make in data) {
            console.log('prva petlja', data);
            for (var i = 0; i < data[make].length; i++) {
                console.log('druga petlja', data[make][i]);
                wrapper.innerHTML += '<div class="flip-container">\
                                        <div class="flipper">\
                                            <div class="front">\
                                                <h3>'+ data[make][i].name + '</h3>\
                                                <img src="'+ data[make][i].image + '">\
                                            </div >\
                                        <div class="back" >\
                                            <section>\
                                            <div class="bg" style="background-image: url('+data[make][i].image+');\
                                                                 background-size:cover;\
                                                                 background-color:#dadada;\
                                                                 background-repeat: no-repeat;\
                                                                 background-position: center;\
                                                                 \
                                                                 "></div>\
                                            <h4> Description:</h4> <p> '+ data[make][i].description + '</p>\
                                            <p> Speed: '+ data[make][i].speed + '</p>\
                                                <div class="checkboxCon">\
                                                    <span class="circle"></span>\
                                                    <span class="secondLine"></span>\
                                                </div>\
                                            </secton>\
                                        </div>\
                                    </div>\
                                </div>'
            }
        }

        $(function () {
            $('.checkboxCon').click(function () {
                $(this).toggleClass('active');
            })
        });

    });
