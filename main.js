$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();

        const novaMateria = $("#add-nova-materia").val();
        const newRow = $("<tr>").append($("<td>").text(novaMateria));

        $("#tabela").append(newRow);
        $("#add-nova-materia").val("");
        console.log("Nova máteria adicionada: " + novaMateria);

        $(newRow).fadeIn(7000);

        $("#tabela").on("click", "td", function () {
            $(this).toggleClass("effect-risc");
        });
    });
});
