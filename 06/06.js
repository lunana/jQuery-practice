/**
 * Created by PyCharm.
 * User: luna
 * Date: 8/28/12
 * Time: 9:28 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    $('<div id="loading">Loading...</div>')
        .insertBefore('#dictionary')
        .ajaxStart(function(){
           $(this).show();
        }).ajaxStop(function(){
           $(this).hide();
        });

//    $('#letter-a').click(function(){
//        $('#dictionary').hide().load('a.html', function(){
//           $(this).fadeIn();
//        });
//        return false;
//    });

    //Using JAJX;
    $('#letter-a').click(function(){
        $.ajaxSetup({
            url: 'a.html',
            type:'POST',
            dataType: 'html'
        });
        $.ajax({
            type: 'GET',
            success: function(data){
                $('#dictionary').html(data);
            }
        });
    });

   $('.letters').children().mouseover(function(){
        var id=$(this).attr('id').split('-')[1];
        $('#dictionary').load('exercises-content.html #letter-' + id).show();
    });

    // Using data()
//   $(".letter").mouseover(function(){
//        $('#dictionary').load('exercises-content.html #letter-' + $(this).data('letter')).show();
//    });
//    $(".letter").mouseout(function(){
//        $('#dictionary').load('exercises-content.html #letter-' + $(this).data('letter')).hide();
//    });

    $('#letter-d').click(function(){
        $.get('d.xml', function(data){
            $('#dictionary').empty();
            $(data).find('entry').each(function(){
                var $entry=$(this);
                var html='<div class="entry">';
                html += '<h3 class="=term">' + $entry.attr('term');
                    html +='</h3>';
                html +='<div class="part">' + $entry.attr('part');
                    html +='</div>';
                html +='<div class="definition">';
                html += $entry.find('definition').text();
                var $quote=$entry.find('quote');
                if($quote.length){
                    html +='<div class="quote">';
                    $quote.find('line').each(function(){
                       html +='<div class="quote-line">';
                        html +=$(this).text() + '</div>';
                    });
                    if($quote.attr('author')){
                        html += '<div class="quote-author">';
                        html +=  $quote.attr('author') + '</div>';
                    }
                    html += '</div>';
                }
                html += '</div>';
                html += '</div>';
                $('#dictionary').append($(html));
            });
       });
        return false;
    });

    $('#letter-h a').click(function(){
       $('#dictionary').load('h.html #dictionary');
        return false;
    });



    $('h3.term').live('click', function(){
       $(this).siblings('.definition').slideToggle();
    });



});
