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

// click en Entrar en Iniciar Sesion
$.entrarBtn.addEventListener('click', function(e){
	var nombre = $.nombreSesion.value.trim();

	if(nombre.length > 0)
	{
		var jsonData = {'nombre': nombre};
		var win = Alloy.createController('window2', jsonData).getView();
		win.open();
	}	
});

