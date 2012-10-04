/**
 * Created by PyCharm.
 * User: luna
 * Date: 8/28/12
 * Time: 2:36 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $('div.chapter a[href*="wikipedia"]').attr({
        rel:'external',
        title:function () {
            return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
        },
        id:function (index, oldValue) {
            return 'wikilink-' + index;
        }
    });

    $('<a href="#top">back to top</a>').insertAfter('div.chapter p:gt(3)')
        .click(function () {
            $('<p>You were here</p>').insertAfter('#top');
        });

    $('div#f-author').click(function () {
        //$(this).attr('style','font-weight:bold');
        $('<b id="bold"></b>').insertAfter('#f-author');
        $(this).appendTo('#bold');
    });


    $('div.chapter p').attr('class', 'inhabitants');
    //$('div.chapter p').addClass('inhabitants');


    $('<a id="top"></a>').prependTo('body');

//    var $notes=$('<ol id="notes"></ol>').insertBefore('#footer');
//    $('span.footnote').each(function(index){
//        $(this)
//            .before('<sup>' +(index +1) + '</sup>')
//            .appendTo($notes)
//            .wrap('<li></li>');
//    });

    // Using join();
    var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
    $('span.footnote').each(function (index) {
        $(this)
            .before([
            '<a href="#footnote-',
            index + 1,
            '" id="context-',
            index + 1,
            '" class="context">',
            '<sup>',
            index + 1,
            '</sup>'
        ].join(''))
            .appendTo($notes)
            .append([
            '&nbsp; (<a href="#context-',
            index + 1,
            '">context </a>)'
        ].join(''))
            .wrap('<li id="footnote-' + (index + 1) + '" ></li>');
    });

    $('div.chapter p:eq(0)').clone().insertBefore('div.chapter');

    $('span.pull-quote').each(function (index) {
        var $parentP = $(this).parent('p');
        $parentP.css({position:'relative'});

        var $clonedCopy = $(this).clone();
        $clonedCopy
            .addClass('pulled')
            .find('span.drop')
            .html('&hellip;')
            .end()
            .text($clonedCopy.text())
            .prependTo($parentP)
            .addClass('rounded-top')
            .wrapInner('<div class="rounded-bottom"></div>');

    });


});