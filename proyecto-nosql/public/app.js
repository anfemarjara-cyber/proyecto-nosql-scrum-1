async function cargarProductos() {
  const respuesta = await fetch('http://localhost:3000/api/productos');
  const data = await respuesta.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  data.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - $${p.precio} - Stock: ${p.stock}`;
    lista.appendChild(li);
  });
}
