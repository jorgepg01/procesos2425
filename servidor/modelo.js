function Sistema() {
    this.usuarios = {}; // que tipo coleccion???
    //operaciones sobre la colección
    this.agregarUsuario = function (nick) {
        let res = {"nick":- 1
    };
    if (!this.usuarios[nick]) {
        this.usuarios[nick] = new Usuario(nick);
        res.nick = nick;
    }
    else {
        console.log("el nick " + nick + " está en uso");
    }
    return res;
}
this.eliminarUsuario = function (nick) {
    let res = {"nick":- 1
    };
    if (this.usuarios[nick]) {
        delete this.usuarios[nick];
        res.nick = nick;
    }
    else {
        console.log("El usuario no existe.");
    }
    return res;
}
this.obtenerUsuarios = function () {
    return this.usuarios;
}
this.usuarioActivo = function (nick) {
    return !!this.usuarios[nick]; // Devuelve true si el usuario existe, false en caso contrario
};
this.numeroUsuarios = function () {
    return Object.keys(this.usuarios).length; // Cuenta las claves en el objeto usuarios
};
        
        
}
function Usuario(nick) {
    this.nick = nick;
}
module.exports.Sistema = Sistema;