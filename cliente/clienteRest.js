function ClienteRest() {
    this.agregarUsuario = function (nick) {
        let cli = this;
        $.getJSON("/agregarUsuario/" + nick, function (data) {
            if (data.nick != -1) {
                console.log("Usuario " + nick + " ha sido registrado")
            }
            else {
                console.log("El nick ya está ocupado");
            } //este código se ejecuta sin esperar a que se resuelva
        })
    }

    this.agregarUsuario2 = function (nick) {
        let cli = this;
        $.ajax({
            type: 'GET',
            url: '/agregarUsuario/' + nick,
            success: function (data) {
                if (data.nick != -1) {
                    console.log("Usuario " + nick + " ha sido registrado")
                }
                else {
                    console.log("El nick ya está ocupado");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            },
            contentType: 'application/json'
        });
    }

    this.obtenerUsuarios = function () {
        let cli = this;
        $.getJSON("/obtenerUsuarios", function (data) {
            console.log("Lista de usuarios: ", data.usuarios);
        });
    };

    this.usuarioActivo = function (nick) {
        let cli = this;
        $.getJSON("/usuarioActivo/" + nick, function (data) {
            if (data.activo) {
                console.log("El usuario " + nick + " está activo");
            } else {
                console.log("El usuario " + nick + " no está activo");
            }
        });
    };

    this.numeroUsuarios = function () {
        let cli = this;
        $.getJSON("/numeroUsuarios", function (data) {
            console.log("Número total de usuarios: " + data.total);
        });
    };

    this.eliminarUsuario = function (nick) {
        let cli = this;
        $.getJSON("/eliminarUsuario/" + nick, function (data) {
            console.log("Usuario " + nick + " ha sido eliminado");
        });
    };

}