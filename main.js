$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const textoNovaTarefa = $('#texto-nova-tarefa').val();
        const novaTarefa = $('<li style="display: none;"></li>');
        $(`<li>"${textoNovaTarefa}" </li>`).appendTo(novaTarefa);
    })
})
