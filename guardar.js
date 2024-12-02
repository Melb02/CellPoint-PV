function guardar(){
    db.collection("Cliente").add({
        nombre: "Ada",
        telefono: "Lovelace"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
