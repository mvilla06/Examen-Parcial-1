function comment(){
    var form = document.getElementById("formComment");
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        var name = document.getElementsByClassName('userName')[0];
        var comment = document.getElementById('userComment');
        if(!(name.value=="" || comment.value=="")){
            var comments = document.getElementsByClassName('seccionComments')[0];
            var comentarioNuevo = document.createElement('div');
            comentarioNuevo.setAttribute('class', 'comentario')
            var comentarioNuevoNombre = document.createElement('div');
            comentarioNuevoNombre.setAttribute('class', 'comentarioNombre');
            var nombre = document.createTextNode(name.value);
            comentarioNuevoNombre.appendChild(nombre)
            var comentario = document.createTextNode(comment.value);
            
            comentarioNuevo.appendChild(comentarioNuevoNombre);comentarioNuevo.appendChild(comentario);
            comments.appendChild(comentarioNuevo);
            name.value='';
            comment.value='';
        }
    });
}



function init(){
    comment();
}


init();