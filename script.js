window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('profile-picture').src = "1.jpg";
            document.getElementById('name').textContent = `${Herbszt} ${Lili}`;
            create.elemen;
        })
        .catch(error => console.log('Hiba történt: ', error));
});
