'use strict';
//// Variable
var form, commentSection, pseudo, content;

//// Fonction 
function onPostComment(event) {

    event.preventDefault();
    var comments = $(this).serializeArray();
    console.log($(this).serializeArray());
    $.post('../php/blogJu/addCommentaire.php', {
        data: {
            post_id: comments[0].value,
            pseudo: comments[1].value,
            content: comments[2].value
        }
    }, callback);

}

function callback(data) {

    /*console.log(data)*/
    commentSection.append(data);
    content.val("");
    pseudo.val("");

}

/** Code au chargement */

$(function () {

    form = $("#formComment").on('submit', onPostComment);
    commentSection = $('#theComments');
    content = $('#content');
    pseudo = $('#pseudo');


});
