import { select } from './utils.js';
$('.alert').alert()
const alert = select('.alert');

select('#sendButton').addEventListener('click', () => alert.classList.replace('show', 'hide'));
select('#sendButton').addEventListener('click', () => alert.classList.replace('hide', 'show'));
