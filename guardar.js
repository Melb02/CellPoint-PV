tfunction guardar(){
    db.collection("Cliente").add({
        nombre: document.getElementById("name").value,
        telefono: document.getElementById("telefono").value
    })
    .then((docRef) => {
        alert("registro exitoso");
    })
    .catch((error) => {
        alert("registro errado");
    });
}
