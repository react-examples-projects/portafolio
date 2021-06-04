const { DB, MONGO, CON } = require("./config/config");

MONGO.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  console.log("Al intentar conectar ocurrio un error: " + err);
});
 
CON.on("open", () => {
  console.log("Conectado a la base de de datos: " + DB);
});

CON.on("disconnect", () => {
  console.log("desconectado a la base de de datos");
});

CON.on("error", (err) => console.log(err));
