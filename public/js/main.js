const ul = document.getElementById('movies');
const url = 'https://swapi.co/api/films/?format=json';

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let contents = data.results;
    return contents.map(function(chunk) {
    
      let title = document.createElement('li');
      let release = document.createElement('li');
      let episode = document.createElement('li');
      let ul = document.createElement('ul');

      ul.setAttribute("class", "list-group");

      title.innerHTML = `Title: ${chunk.title}`;
      release.innerHTML = `Release Date: ${chunk.release_date}`;
      episode.innerHTML = `Episode: ${chunk.episode_id}`;
        
      title.setAttribute("class", "list-group-item active");
      release.setAttribute("class", "list-group-item");
      episode.setAttribute("class", "list-group-item");

      let column = document.getElementById("main_grid");

        column.appendChild(ul);
        ul.appendChild(title);    
        ul.appendChild(release);    
        ul.appendChild(episode);
        ul.appendChild(episode);

    })
  })

  .catch(function(error) {
    console.log(error);
  });  
