const nombreUsuario = prompt("Ingrese su Nombre")

const textoBlog = prompt("Ingresar texto para el Blog Max. 30 caracteres")


const validarBlog = (nombre, blog, caracteres) => {

  if (blog.length > caracteres) {
    alert("Esta entrada excede la cantidad de caracteres disponibles.")
  } else {
    alert(nombre + " " + blog)
  }
}

validarBlog(nombreUsuario, textoBlog, 30)



const mensaje = ["Alfredo", "Jorge", "Francisco"];
let i, len;
for (i = 0, len = mensaje.length; i < len; i++) {
  confirm("El Usuario " + mensaje[i] + " te envió una solicitud de amistad.")
}
