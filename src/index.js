console.log('%c HI', 'color: firebrick')
// index.js
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
  
    // Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          li.addEventListener('click', () => {
            li.style.color = 'blue';
          });
          breedsList.appendChild(li);
        });
  
        // Filter breeds based on dropdown selection
        breedDropdown.addEventListener('change', () => {
          const selectedLetter = breedDropdown.value;
          breedsList.innerHTML = ''; // Clear the list
          breeds
            .filter(breed => selectedLetter === 'all' || breed.startsWith(selectedLetter))
            .forEach(breed => {
              const li = document.createElement('li');
              li.textContent = breed;
              li.addEventListener('click', () => {
                li.style.color = 'blue';
              });
              breedsList.appendChild(li);
            });
        });
      });
  });
  