const url2 = 'http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4';
var wrapper = document.getElementById('content');

fetch(url2)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data);
        var cars = data.data;
        for (var i = 0; i < cars.length; i++) {
            wrapper.innerHTML += '<div class="flip-container">\
                                        <div class="flipper">\
                                            <div class="front">\
                                                <h3>'+ cars[i].name + '</h3>\
                                                <img src="'+ cars[i].image + '">\
                                            </div >\
                                        <div class="back">\
                                            <section>\
                                            <div class="bg" style="background-image: url('+ cars[i].image + ');\
                                                                 background-size:cover;\
                                                                 background-color:#dadada;\
                                                                 background-repeat: no-repeat;\
                                                                 background-position: center;\
                                                                 \
                                                                 "></div>\
                                            <h4> Description:</h4> <p> '+ cars[i].description + '</p>\
                                            <p> Speed: '+ cars[i].speed + '</p>\
                                                <div class="checkboxCon">\
                                                    <span class="circle"></span>\
                                                    <span class="secondLine"></span>\
                                                </div>\
                                            </secton>\
                                        </div>\
                                    </div>\
                                </div>'
        }
        
                $(function () {
            $('.checkboxCon').click(function () {
                $(this).toggleClass('active');
            })
        });
    });
