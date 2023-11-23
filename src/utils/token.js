import jwt from "jsonwebtoken";

const guardarToken = (data) => {
  sessionStorage.setItem("token", data?.token);
  getDataToken();
};

const getDataToken = () => {
  let dataToken = JSON.stringify(sessionStorage.getItem("token"));
console.log("entrooooo")
  if (!dataToken) {
    console.error("No se encontró un token en sessionStorage");
    return;
  }

  const token = dataToken;
  const secretKey = "2021secreto23544122/%%%";

  try {
    // Decodificar el token
    const decodedToken = jwt.verify(token, secretKey);
    // `decodedToken` contendrá la información del token
    console.log("Información del token:", decodedToken);
  } catch (error) {
    // Manejar errores, por ejemplo, si el token es inválido o ha expirado
    console.error("Error al decodificar el token:", error.message);
  }
};

export { guardarToken, getDataToken };
