function ControlWeb() {
    this.mostrarAgregarUsuario = function () {
        $('#mAU').remove()
        let cadena = '<div id="mAU" class="form-group">';
        cadena = cadena + '<label for="nick">Nick:</label>';
        cadena = cadena + '<input type="text" class="form-control" id="nick">';
        cadena = cadena + '<button id=”btnAU” type="submit" class="btn btn-primary">Submit</button>';
        cadena = cadena + '</div>';

        $('#au').append(cadena);
        //$(div)
        //$(.mostrar) formas alternativas de busquedas en jquery
        $("#btnAU").on("click", function () {
            let nick = $("#nick").val();
            rest.agregarUsuario(nick);
        });
    }
}
