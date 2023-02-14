const socket = io.connect()

function render(data){
    const html = data.map( msg =>
        `
        <tr>
            
            <td rowspan="1" colspan="10" style=" font-weight:normal;  padding:5px; ">
            ${msg.title}
            </td >
            <td rowspan="1" colspan="20" style=" font-weight:normal;  padding:5px;">
            $ ${msg.price}
            </td>
            <td rowspan="1" colspan="10" style=" font-weight:normal; padding:5px;">
              <img src="${msg.thumbnail}" height="100px">
            </td>
        </tr>
      `).join(" ");
      document.getElementById('productos').innerHTML = html; 
}

function renderChat(data){
    const html = data.map( msg =>
        `
        <li style="display: flex; flex-direction:row; ">
            <div id="autor" style="font-weight: bold; color:blue;" >
                ${msg.author.email} <span style="color: brown; font-weight:normal; margin-left:5px;">  ${msg.author.fecha}  :</span> 
            </div>
            <div id="msj"  style="color: green; font-style: italic; margin-left:15px;">
               ${msg.text}
            </div>
        </li>
      `).join(" ");
      document.getElementById('chatCompleto').innerHTML = html; 
}


function renderProdTest(data){
    const html = data.map( msg =>
        `
        <tr>
            <td rowspan="1" colspan="10" style=" font-weight:normal;  padding:5px; ">
            ${msg.title}
            </td >
            <td rowspan="1" colspan="20" style=" font-weight:normal;  padding:5px;">
            $ ${msg.price}
            </td>
            <td rowspan="1" colspan="10" style=" font-weight:normal; padding:5px;">
              <img src="${msg.thumbnail}" height="100px">
            </td>
        </tr>
      `).join(" ");
      document.getElementById('productos-random').innerHTML = html; 
}


function enviarProducto(){
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value
    const thumbnail = document.getElementById('thumbnail').value
    socket.emit('new_prod', {title: title, price: price, thumbnail:thumbnail})
    document.getElementById('title').value = ''
    document.getElementById('price').value = ''
    document.getElementById('thumbnail').value = ''
    return false
}

function enviarMensaje(event){
    const fecha = new Date().toLocaleDateString()+ new Date().toTimeString();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;
    const alias = document.getElementById('alias').value;
    const avatar = document.getElementById('avatar').value;
    const text = document.getElementById('chat_mensaje').value;
    if(email){
        socket.emit('new_msg', {
            author:{
                email:email,
                idAttribute: email,
                nombre: nombre, 
                apellido: apellido,
                edad: edad,
                alias: alias,
                avatar: avatar,
                fecha: fecha,
                id: 1
            },    
            text: text,
        })
        document.getElementById('chat_mensaje').value = '';
        return false
    }else{
        alert("Debe ingresar su email")
    }
}


socket.on('productos', data =>{
    render(data)
})
socket.on('prod-test', data =>{
    renderProdTest(data)
})
socket.on('mensajes', data =>{
    renderChat(data)
})









