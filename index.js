const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d5b243976msh884ee6e101a5f20p1b15e0jsn3cb7f84001a1',
		'X-RapidAPI-Host': 'nba-schedule.p.rapidapi.com'
	}
};

fetch('https://nba-schedule.p.rapidapi.com/schedule', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));