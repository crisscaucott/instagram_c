$.index.open();


// click en Registrarse
$.loginBtn.addEventListener('click', function(e){
	$.registrarseView.visible = true;
	$.inicioSesionView.visible = false;
	$.inicioSesionBtn.opacity = 0.3;
	$.loginBtn.opacity = 1;
});
// click en Iniciar Sesion
$.inicioSesionBtn.addEventListener('click', function(e){
	$.inicioSesionView.visible = true;
	$.registrarseView.visible = false;
	$.loginBtn.opacity = 0.3;
	$.inicioSesionBtn.opacity = 1;
});

