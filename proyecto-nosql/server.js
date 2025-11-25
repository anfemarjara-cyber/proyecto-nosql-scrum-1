require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productoRoutes = require('./src/routes/productoRoutes');

const app = express();
app.use(express.json()); // Para que Express pueda leer JSON

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión', err));

app.use(express.static('public'));
app.use('/api/productos', productoRoutes); // <- AQUÍ

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

