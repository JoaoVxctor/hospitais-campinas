import { select } from '../utils.js';
import { db } from './firebaseApp.js';

const enviaBotao = select("#sendButton");

select(`form`).addEventListener(`click`, (e) => e.preventDefault());
enviaBotao.addEventListener('click', async () => await saveEmail());

const saveEmail = async () => {

	const form = {
		nome: select(`#nome`).value,
		email: select(`#email`).value,
		comentario: select(`#comentario`).value
	}

	
	db.collection("emails").add({
		nome: select(`#nome`).value,
		email: select(`#email`).value,
		comentario: select(`#comentario`).value
	}).catch((error) => console.error("Erro ao enviar email: ", error));

	firebase.database().ref().child('emails').push(form);
	cleanFields();
}

const cleanFields = () => {
	
		select(`#nome`).value = '';
		select(`#email`).value = '';
		select(`#comentario`).value = '';
	
}