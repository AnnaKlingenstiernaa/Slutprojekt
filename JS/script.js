
function fetchUser() { //funktion för att hämta data från API
    fetch('https://randomuser.me/api/') // fetch för att hämta data
        .then(response => response.json())  // konventera datan till JSON
        .then(data => { 
            const user = data.results[0];  //hämta första användaren från resultatet
            const userInfo = { // Objekt skapat för att lagra de olika användarnas information
                firstName: user.name.first,
                lastName: user.name.last,
                gender: user.gender,
                email: user.email,
                phone: user.phone,
                picture: user.picture.large
            };
                
            // Här uppdateras DOM elementen med användarens information
            document.getElementById('gender').textContent = userInfo.gender;
            document.getElementById('email').textContent = userInfo.email;
            document.getElementById('phone').textContent = userInfo.phone;
            document.getElementById('firstName').textContent = userInfo.firstName;
            document.getElementById('lastName').textContent = userInfo.lastName;
            document.getElementById ('userPicture').src = userInfo.picture;

        })

        .catch(error => { // Här hanteras eventuella fel som kan uppstå under hämtningen av datan, då loggas felet till konsolen
            console.error('Något gick fel error',error);
        });
}
