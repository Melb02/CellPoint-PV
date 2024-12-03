function guardar(){
    db.collection("Cliente").add({
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("registro errado");
    });
}
