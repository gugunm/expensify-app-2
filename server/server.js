const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000;

// Untuk meregister perintah di middleware, dijalankan untuk setiap request
app.use(express.static(publicPath));

// untuk menangani error ketika direfresh, karena didalam folder public ga ada buat routing
app.get('*', (req, res) => {
  // cara mudah buat akses file dari folder tertentu
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log("server is up!")
});