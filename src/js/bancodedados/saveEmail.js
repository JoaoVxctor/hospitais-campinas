let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let comentario = document.getElementById("comentario").value;
var enviaBotao = document.getElementById("envia");

enviaBotao.addEventListener('click', function(){
    saveEmail();
});

function saveEmail(){
 
    var data = {
        nome: nome,
		email: email,
		comentario: comentario
    };

    return firebase.database().ref().child('emails').push(data);

	/*db.collection("emails").add({
		nome: nome,
		email: email,
		comentario: comentario
	})
	.then(function(docRef) {
		console.log("Email enviado");
	})
	.catch(function(error) {
		console.error("Erro ao enviar email: ", error);
	});*/
}