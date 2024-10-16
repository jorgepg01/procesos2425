describe('El sistema', function() {
  let sistema;

  beforeEach(function() {
    sistema=new Sistema()
    });

  it("inicialmente no hay usuarios", function() {
    expect(sistema.numeroUsuarios()).toEqual(0);
    });
  it("comprobamos agregar usuario con nick", function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Pepe");
    expect(sistema.numeroUsuarios()).toEqual(1);
    expect(sistema.usuarioActivo("Pepe")).toEqual(true);
  })
  it("comprobamos eliminar usuario", function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Pepe");
    expect(sistema.usuarioActivo("Pepe")).toEqual(true);
    sistema.eliminarUsuario("Pepe");
    expect(sistema.numeroUsuarios()).toEqual(0);
  })
  it("comprobamos usuarios activos", function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Pepe");
    expect(sistema.usuarioActivo("Pepe")).toEqual(true);
    expect(sistema.usuarioActivo("Juan")).toEqual(false);
  })
  it("comprobamos numero de usuarios", function(){
    expect(sistema.numeroUsuarios()).toEqual(0);
    sistema.agregarUsuario("Pepe");
    sistema.agregarUsuario("Juan");
    expect(Object.keys(sistema.usuarios).length).toEqual(2);
  })
})
