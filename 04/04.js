/**
 * Created by PyCharm.
 * User: luna
 * Date: 8/27/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
//    // Using if...else
//    var $speech=$('div.speech');
//    $('#switcher button').click(function(){
//       var num=parseFloat($speech.css('fontSize'));
//        console.log($speech.css('fontSize'));
//        console.log(num);
//        if(this.id=='switcher-large'){
//            num*=1.4;
//            console.log(num);
//         }else if(this.id=='switcher-small'){
//            num/=1.4;
//            console.log(num);
//        }
//        $speech.css('fontSize', num + 'px');
//    });

    $('body')
        .css({display:'none'})
        .fadeIn('slow');

    // Using switch
    var $speech = $('div.speech');
    var defaultSize = $speech.css('fontSize');

    $('#switcher button').click(function () {
        var num = parseFloat($speech.css('fontSize'));
        switch (this.id) {
            case 'switcher-large':
                num *= 1.4;
                break;

            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize);
        }
        $speech.css('fontSize', num + 'px');
    });

    var triggers = {
        L:'switcher-large',
        S:'switcher-small',
        D:'switcher-default'
    };

    $(document).keyup(function (event) {
        var num = parseFloat($speech.css('fontSize'));
        var key = String.fromCharCode(event.keyCode);
        console.log(key);
        switch (triggers[key]) {
            case 'switcher-large':
                num *= 1.4;
                break;
            case 'switcher-small':
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize);
        }
        $speech.css('fontSize', num + 'px');
    });

    $('p').eq(1).hide();

    var $firstPara = $('p').eq(1);
    var sth = $('p').eq(1).text();
    console.log(sth);

    // Mathod 1
//    $('a.more').click(function(){
//        if($firstPara.is(':hidden')){
//            $firstPara.fadeIn('slow');
//            $(this).text('read less');
//        }else{
//            $firstPara.fadeOut('slow');
//            $(this).text('read more');
//        }
//         return false;
//    });

    // Mathod 2
    $firstPara.hide();
    $('a.more').click(function () {
        $firstPara.animate({height:'toggle'}, 'slow');
        var $link = $(this);
        if ($link.text() == 'read more') {
            $link.text('read less');
        } else {
            $link.text('read more');
        }
        return false;
    });

    //Mathod 1
//    $('div.label').click(function () {
//        var paraWidth = $('div.speech p').outerWidth();
//        console.log(paraWidth);
//        var $switcher = $(this).parent();
//        var switcherWidth=$switcher.outerWidth();
//        console.log(switcherWidth);
//
//        $switcher.css({position:'relative'}).animate({
//            borderWidth: '5px',
//            left: paraWidth -switcherWidth,
//            height: '+=20px'
//        }, 'slow');
//    });

    //Mathod2
    $('div.label').click(function () {
        var paraWidth = $('div.speech p').outerWidth();
        console.log(paraWidth);
        var $switcher = $(this).parent();
        var switcherWidth = $switcher.outerWidth();
        console.log(switcherWidth);

        $switcher
            .css({position:'relative'})
            .fadeTo('fast', 0.5)
            .animate({borderWidth:'5px'}, 'slow')
            .animate({left:paraWidth - switcherWidth}, {duration:'slow', queue:true})
            .fadeTo('slow', 1.0)
            .slideUp('slow', function () {
                $switcher.css({backgroundColor:'#f00'});
            })
//            .queue(function (next) {
//                $switcher.css({backgroundColor:'#f00'});
//                next();
//            })
            .slideDown('slow')
            .animate({height:'+=20px'}, 'slow');
    });

    $('p').eq(2)
        .css('border', '1px solid #333')
        .click(function () {
//            $(this).slideUp('slow').next().slideDown('slow');
//            $(this).next().slideDown('slow', function () {
//                $(this).slideUp('slow');
            var $clickItem = $(this);
            $clickItem.next().slideDown('slow', function () {
                $clickItem.slideUp('slow');
            });
        })
    $('p').eq(3).css('backgroundColor', '#ccc').hide();

    $('p').mouseover(function () {
        $(this).css({backgroundColor:'yellow'});
    });
    $('p').mouseout(function () {
        $(this).css({backgroundColor:'white'});
    });


    $('h2').click(function () {
        var $this = $(this);
        var $speech = $this.parent().children().eq(2);
        $this
            .css({left:'20px'})
            .fadeTo('slow', 0.25, function () {
                $speech.fadeTo('slow', 0.5);
            });
    });

    var arrows = {
        L:'37',
        U:'38',
        R:'39',
        D:'40'
    };

    $(document).keyup(function (event) {
        var num = parseFloat(event.keyCode);
        switch (num) {
            case 37:
                $('div#switcher')
                    .css({backgroundColor:'#00f'});
                break;
            case 38:
                $('div#switcher')
                    .css({backgroundColor:'#eee'});
                break;
            case 39:
                $('div#switcher')
                    .css({backgroundColor:'#f00'});
                break;
            case 40:
                $('div#switcher')
                    .css({backgroundColor:'#bbb'});
                break;
        }
    });

    $(document).keyup(function (event) {
        var num = parseFloat(event.keyCode);
        var newPos= $('div#switcher').position();
        switch (num) {
            case 37:
                newPos.left -=20;
                break;
            case 38:
                newPos.top-=20;
                break;
            case 39:
                newPos.left+=20;
                break;
            case 40:
                newPos.top+=20;
                break;
        }
        $('div#switcher').offset(newPos).fadeTo('slow', 0.5);
        console.log(newPos);

    });



//        if(event.keyCode == '37'){
//            $('div#switcher')
//                .css({backgroundColor: '#00f'});
//        }
//        else if(event.keyCode == '38'){
//            $('div#switcher')
//                .css({backgroundColor: '#eee'});
//        }
//        else if(event.keyCode == '39'){
//            $('div#switcher')
//                .css({backgroundColor: '#f00'});
//        }
//        else if(event.keyCode == '40'){
//            $('div#switcher')
//                .css({backgroundColor: '#bbb'});
//        }

});