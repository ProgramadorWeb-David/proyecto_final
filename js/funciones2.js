


const novedades = document.querySelectorAll('.botonNovedades');


console.log(novedades);


novedades.forEach(function(item) {

    item.addEventListener('click', function() {
        alert('Para ver las noticias debes "Suscribirte"');
    });

});