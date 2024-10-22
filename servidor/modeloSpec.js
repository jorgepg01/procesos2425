const modelo = require("./modelo.js");

describe('El sistema', function () {
  let sistema;

  beforeEach(function () {
    sistema = new modelo.Sistema()
  });

  it("inicialmente no hay usuarios", function () {
    expect(sistema.numeroUsuarios().total).toEqual(0);
  });
  it("comprobamos agregar usuario con nick", function () {
    expect(sistema.numeroUsuarios().total).toEqual(0);
    sistema.agregarUsuario("Pepe");
    let res = sistema.usuarioActivo("Pepe")
    expect(sistema.numeroUsuarios().total).toEqual(1);
    expect(res.activo).toEqual(true);
  })
  it("comprobamos eliminar usuario", function () {
    expect(sistema.numeroUsuarios().total).toEqual(0);
    sistema.agregarUsuario("Pepe");
    let res = sistema.usuarioActivo("Pepe")
    expect(res.activo).toEqual(true);
    expect(sistema.numeroUsuarios().total).toEqual(1);
    sistema.eliminarUsuario("Pepe");
    expect(sistema.numeroUsuarios().total).toEqual(0);
    res = sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(false);
  })
  it("comprobamos usuarios activos", function () {
    expect(sistema.numeroUsuarios().total).toEqual(0);
    sistema.agregarUsuario("Pepe");
    let res = sistema.usuarioActivo("Pepe");
    expect(res.activo).toEqual(true);
    res = sistema.usuarioActivo("Juan");
    expect(res.activo).toEqual(false);
  })
  it("comprobamos numero de usuarios", function () {
    expect(sistema.numeroUsuarios().total).toEqual(0);
    sistema.agregarUsuario("Pepe");
    sistema.agregarUsuario("Juan");
    expect(Object.keys(sistema.usuarios).length).toEqual(2);
  })
})
