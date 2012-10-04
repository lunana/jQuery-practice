/**
 * Created by PyCharm.
 * User: luna
 * Date: 8/29/12
 * Time: 10:37 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {

    $.fn.cycle.defaults.timeout = 10000;
    $.fn.cycle.defaults.random = true;

    $('#books').cycle({
        timeout: 2000,
        speed: 200,
        pause: true,
        before: function(){
            $('#slider').slider('value', $('#books li').index(this));
        }
    });

    $('<div id="books-controls"></div>').insertAfter('#books');

    $('<button>Pause</button>').click(function(){
        $('#books').cycle('pause');
        $.cookie('cyclePaused', 'y');
        return false;
    }).button({
            icon:{primary: 'ui-icon-pause'}
        }).appendTo('#books-controls');

    $('<button>Resume</button>').click(function(){
        var $paused=$('ul:paused');
        if($paused.length){
            $paused.cycle('resume');
            $.cookie('cyclePaused', null);
        }else{
            $(this).effect('shake',{
                distance:10,
                duration:80
            });
        }
        return false;
    }).button({
            icon:{primary:'ui-icon-play'}
        }).appendTo('#books-controls');

    $('#books').hover(function(){
        $('#books .title').animate({
            backgroundColor: '#eee',
            color: '#000'
        }, 1000);
    }, function(){
        $('#books .title').animate({
            backgroundColor: '#000',
            color: '#fff'
        }, 1000);
    });

    $('h1').click(function(){
       $(this).toggleClass('highlighted', 'slow', 'easeInExpo');
    });

//    $('ul').click(function(){
//        $(this).effect('bounce');
//    });

    $('#books .title').resizable({
        handles: 's',
        maxHeight: 100


    });

    $('button').button();

    $('<div id="slider"></div>').slider({
       min: 0,
        max: $('#books li').length - 1,
        slide: function(event, ui){
            $('#books').cycle(ui.value);
        }
    }).appendTo('#books-controls');

});