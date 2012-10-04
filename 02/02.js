/**
 * Created by PyCharm.
 * User: luna
 * Date: 8/26/12
 * Time: 6:33 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    $('#selected-plays>li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal').addClass('sub-level');
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');
    $('tr:nth-child(odd)').addClass('alt');
    //$('tr').filter(':even').addClass('alt');

    //$('tr:contains(Henry)').addClass ('highlight');
    $('td:contains(Henry)').parent().find('td:eq(1)').addClass('highlight').end().find('td:eq(2)').addClass('highlight');
    $('ul>li li:nth-child(2)').addClass('special').find('a[href^="http"]').removeClass().addClass('special');
    //$('ul>li li:nth-child(2)').addClass('special').find('ul>li:has(a)').removeClass('henrylink').addClass('special');


    $('td:nth-child(3)').addClass('year');
    $('td:contains(Tragedy)').addClass('special');
    //$('li:has(a)').siblings().addClass('afterlink');
    $('ul').closest('ul').has('a[href$=".pdf"]').addClass('tragedy');
});