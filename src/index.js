const init = () => {
	const form = document.querySelector('form')
	const input = document.querySelector('#searchByID');
	
	form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	fetch(`http://localhost:3000/movies/${input.value}`)
	.then(response => response.json())
	.then(data => {
        
	const title = document.querySelector('#movieDetails h4');
	const summary = document.querySelector('#movieDetails p');
	
	title.innerText = data.title;
	summary.innerText = data.summary;
	});
	});
	}
	
	document.addEventListener('DOMContentLoaded', init);