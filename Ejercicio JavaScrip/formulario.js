const contenedor = document.getElementById('app');
contenedor.style.display = 'flex';
contenedor.style.justifyContent = 'center';
contenedor.style.alignItems = 'flex-start';
contenedor.style.padding = '50px';
contenedor.style.gap = '40px';
document.body.style.fontFamily = 'Times New Roman, Times, serif';
document.body.style.backgroundColor = '#fdf6f0';

const form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '12px';
form.style.backgroundColor = '#ffd8b3';
form.style.padding = '25px';
form.style.borderRadius = '12px';
form.style.boxShadow = '2px 2px 12px rgba(0,0,0,0.1)';
form.style.minWidth = '280px';

const h1 = document.createElement('h1');
h1.textContent = 'Formulario de Datos';
h1.style.color = '#3a3a3a';
h1.style.textAlign = 'center';
h1.style.marginBottom = '20px';
form.appendChild(h1);

function crearCampo(texto, tipo, id) {
  const label = document.createElement('label');
  label.textContent = texto;
  label.style.fontWeight = 'bold';
  label.style.color = '#2e2e2e';
  const input = document.createElement('input');
  input.type = tipo;
  input.id = id;
  input.name = id;
  if(tipo === 'number') input.min = '1';
  input.style.padding = '8px';
  input.style.borderRadius = '6px';
  input.style.border = '1px solid #ccc';
  input.style.width = '100%';
  form.appendChild(label);
  form.appendChild(input);
}

crearCampo('Nombre:', 'text', 'nombre');
crearCampo('Apellidos:', 'text', 'apellidos');
crearCampo('Edad:', 'number', 'edad');

const submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Enviar';
submit.style.backgroundColor = '#ffb3a3';
submit.style.border = 'none';
submit.style.padding = '10px';
submit.style.borderRadius = '6px';
submit.style.cursor = 'pointer';
submit.style.fontWeight = 'bold';
submit.onmouseover = () => submit.style.backgroundColor = '#ff9980';
submit.onmouseout = () => submit.style.backgroundColor = '#ffb3a3';
form.appendChild(submit);

const resultado = document.createElement('div');
resultado.style.display = 'none';
resultado.style.flexDirection = 'column';
resultado.style.padding = '20px';
resultado.style.border = '2px solid #3a3a3a';
resultado.style.borderRadius = '12px';
resultado.style.backgroundColor = '#b3d9ff';
resultado.style.minWidth = '280px';
resultado.style.gap = '12px';
resultado.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.1)';

const datos = document.createElement('div');
datos.style.display = 'flex';
datos.style.flexDirection = 'column';
datos.style.gap = '8px';
resultado.appendChild(datos);

const cerrar = document.createElement('button');
cerrar.textContent = 'Cerrar';
cerrar.style.alignSelf = 'flex-end';
cerrar.style.backgroundColor = '#f5a3ff';
cerrar.style.border = 'none';
cerrar.style.padding = '6px 12px';
cerrar.style.borderRadius = '6px';
cerrar.style.cursor = 'pointer';
cerrar.onmouseover = () => cerrar.style.backgroundColor = '#e680ff';
cerrar.onmouseout = () => cerrar.style.backgroundColor = '#f5a3ff';
resultado.appendChild(cerrar);

contenedor.appendChild(form);
contenedor.appendChild(resultado);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const edad = parseInt(document.getElementById('edad').value);

  if(nombre === '' || apellidos === '') {
    alert('Nombre y apellidos no pueden estar vacíos');
    return;
  }
  if(isNaN(edad) || edad <= 0) {
    alert('Edad debe ser un número positivo mayor a 0');
    return;
  }

  datos.innerHTML = `
    <div><strong>Nombre:</strong> ${nombre}</div>
    <div><strong>Apellidos:</strong> ${apellidos}</div>
    <div><strong>Edad:</strong> ${edad}</div>
  `;
  resultado.style.display = 'flex';
});

cerrar.addEventListener('click', function() {
  resultado.style.display = 'none';
  form.reset();
  document.getElementById('nombre').focus();
});
