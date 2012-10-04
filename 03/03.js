/**
 * Created by PyCharm.
 * User: luna
 * Date: 8/26/12
 * Time: 9:15 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $('#switcher').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    var toggleSwitcher = function (event) {
        if (!$(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    };

    $('#switcher').bind('click', toggleSwitcher);
    $('#switcher').click();

    var setBodyClass = function (className) {
        $('body').removeClass().addClass(className);

        $('#switcher button').removeClass('selected');
        $('#switcher-' + className).addClass('selected');

        $('#switcher').unbind('click', toggleSwitcher);

        if (className == 'default') {
            $('#switcher').bind('click', toggleSwitcher);
        }
    };

    $('#switcher-default').addClass('selected');

    var triggers = {
        D:'default',
        N:'narrow',
        L:'large'

    };

    $('#switcher').click(function (event) {
        if ($(event.target).is('button')) {
            var bodyClass = event.target.id.split('-')[1];
            setBodyClass(bodyClass);
        }
    });

    $(document).keyup(function (event) {
        var key = String.fromCharCode(event.keyCode);
        if (key in triggers) {
            setBodyClass(triggers[key]);
        }
    });

    $('.author').bind('click', function () {
        $(this).addClass('selected');
    });

    $('#chapter-preface p').addClass('hidden');
    $('#chapter-1 p').addClass('hidden');
    $('#chapter-2 p').addClass('hidden');

//    $('.chapter').click(function () {
//        var chapter = $(this);
//        chapter.find('p').toggle();
//        chapter.find('h3').mouseover(function () {
//            chapter.find('p').slideDown();
//      });
//        chapter.find('h3').mouseout(function () {
//            chapter.find('p').slideUp();
//        });
//
//    });

    $('h3.chapter-title').click(function(){
        var $chapter=$(this).parent();
        $chapter.find('p').toggle();
    });



    $(document).keyup(function (event) {
        if (event.keyCode == '39') {
            $('#chapter-preface p').toggleClass('test');
        }
    });



});