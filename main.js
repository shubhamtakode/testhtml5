/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var site = "https://shubhsblog.com/mobileapp/index.php?forward=";
var scroll_offset = 0;
var page = 1;
jQuery(document).ready(function ($) {
    // Code using $ as usual goes here.



    $.get(site + "get_posts/?page=" + page, function (data) {
        $('#materail-spinner').hide();
        $('#loadmore-button').show();
        // console.log(data);
        var len = data['posts'].length;
        for (i = 0; i < len; i++)
        {
            $('#post-listings').append('<div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__title" style="background: url(\'' + data['posts'][i]['thumbnail_images']['full']['url'] + '\') center / cover;"><h2 class="mdl-card__title-text">' + data['posts'][i]['title'] + '</h2></div><div class="mdl-card__supporting-text excerpt-text" id="post-' + data['posts'][i]['id'] + '-excerpt">' + data['posts'][i]['excerpt'] + '</div><div style="display: none;" class="mdl-card__supporting-text" id="post-' + data['posts'][i]['id'] + '-content">' + data['posts'][i]['content'] + '</div><div class="mdl-card__actions mdl-card--border"><button onclick ="view_more(\'' + data['posts'][i]['id'] + '\',event)" style="float: right;" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">View More</button></div><div class="mdl-card__menu"><a class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">share</i></a></div></div>')
        }
        
        //alert( "Load was performed." );
    });
page = page+1;

});



function send_get()
{
    $.get(site + "get_posts/?page=" + page, function (data) {
//        $('#materail-spinner').hide();
//        $('#loadmore-button').show();
        //console.log(data);
        var len = data['posts'].length;
        for (i = 0; i < len; i++)
        {
            $('#post-listings').append('<div class="demo-card-wide mdl-card mdl-shadow--2dp"><div class="mdl-card__title" style="background: url(\'' + data['posts'][i]['thumbnail_images']['full']['url'] + '\') center / cover;"><h2 class="mdl-card__title-text">' + data['posts'][i]['title'] + '</h2></div><div class="mdl-card__supporting-text excerpt-text" id="post-' + data['posts'][i]['id'] + '-excerpt">' + data['posts'][i]['excerpt'] + '</div><div style="display: none;" class="mdl-card__supporting-text" id="post-' + data['posts'][i]['id'] + '-content">' + data['posts'][i]['content'] + '</div><div class="mdl-card__actions mdl-card--border"><button onclick ="view_more(\'' + data['posts'][i]['id'] + '\',event)" style="float: right;" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">View More</button></div><div class="mdl-card__menu"><a class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i class="material-icons">share</i></a></div></div>')
        }
       
        //alert( "Load was performed." );
    });
     page = page+1;
}





function view_more(id, event)
{
    event.preventDefault();
    //$('#'+id).
    var target = $(event.target);
    if (target.text() == 'View More') {
        target.text('View Less');
    }
    else if (target.text() == 'View Less')
    {
        target.text('View More');
    }
    $("#post-" + id + "-excerpt").toggle("slow");
    $("#post-" + id + "-content").toggle("slow");
    //console.log(id);
    //console.log(event);
    return false;
}