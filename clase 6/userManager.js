const fs = require('fs');
const crypto = require('crypto');

class UserManager {
  constructor() {
    this.path = 'Usuarios.json';
    this.usuarios = this.cargarUsuarios();
  }

  cargarUsuarios() {
    try {
      return JSON.parse(fs.readFileSync(this.path, 'utf8')) || [];
    } catch (error) {
      return [];
    }
  }

  guardarUsuarios() {
    fs.writeFileSync(this.path, JSON.stringify(this.usuarios, null, 2), 'utf8');
  }

  hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');
    return { salt, hash };
  }

  crearUsuario(usuario) {
    const { salt, hash } = this.hashPassword(usuario.password);
    this.usuarios.push({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      username: usuario.username,
      salt,
      passwordHash: hash,
    });
    this.guardarUsuarios();
  }

  validarUsuario(username, password) {
    const user = this.usuarios.find((u) => u.username === username);
    if (!user) return 'Usuario no encontrado';
    return this.hashPassword(password, user.salt).hash === user.passwordHash
      ? 'Logueado'
      : 'Contraseña incorrecta';
  }
}

// Ejemplo de uso:
const userManager = new UserManager();

// Crear un usuario
userManager.crearUsuario({
  nombre: 'Lucia',
  apellido: 'Moyano',
  username: 'lucia123',
  password: 'password123',
});

// Validar un usuario
const validacionMensaje = userManager.validarUsuario('lucia123', 'password123');
console.log(validacionMensaje);


