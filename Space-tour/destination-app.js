function changeClass(num) {
    const imgMoon = `<img class="planet-img" src="Assests/Moon.png" alt="Behold the Moon">`
    const imgMars = `<img class="planet-img" src="Assests/Mars.png" alt="Behold Mars">`
    const imgEuropa = `<img class="planet-img" src="Assests/Europa.png" alt="Behold Europe">`
    const imgTitan = `<img class="planet-img" src="Assests/Titan.png" alt="Behold Titan">`
    // DECLARATION VARIABLES AND   
    const mainImg = document.getElementById('img-planet')
    const mainText = document.getElementById('text')
    const planetName = document.getElementById('planet-name')
    const kms = document.getElementById('km')
    const days = document.getElementById('days')
    // DECLARATION VARIABLES ANDPARAGRAPH
    const textMoon = `See our planet as you've never seen it before. A perfect relaxing trip way to help regain perspective and come back refreshed. While yo're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`
    const textMars = `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!`
    const textEurope = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`
    const textTitan = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`
    // DECLARATION VARIABLES ANDTITLES         
    const titleMoon = `MOON `
    const titleMars = `MARS`
    const titleEurope = ` EUROPE`
    const titleTitan = ` TITAN`
    // KMS
    const kmMoon = `384,400 km`
    const kmMars = `225 MIL. km`
    const kmEurope = `628 MIL. km`
    const kmTitan = `1.6 BIL. km`
    // DAYS
    const daysMoon = `3 days`
    const daysMars = `9 months`
    const daysEurope = `3 years`
    const daysTitan = `7 years`

    switch (num) {
        case 1:
            document.getElementById('moon').classList.add('planet-active')
            document.getElementById('mars').classList.remove('planet-active')
            document.getElementById('europa').classList.remove('planet-active')
            document.getElementById('titan').classList.remove('planet-active')

            mainImg.innerHTML = imgMoon;
            mainText.innerHTML = textMoon;
            planetName.innerHTML = titleMoon
            kms.innerHTML = kmMoon;
            days.innerHTML = daysMoon;
            break;
        case 2:
            document.getElementById('moon').classList.remove('planet-active')
            document.getElementById('mars').classList.add('planet-active')
            document.getElementById('europa').classList.remove('planet-active')
            document.getElementById('titan').classList.remove('planet-active')

            mainImg.innerHTML = imgMars;
            mainText.innerHTML = textMars;
            planetName.innerHTML = titleMars;
            kms.innerHTML = kmMars;
            days.innerHTML = daysMars;
            break;
        case 3:
            document.getElementById('moon').classList.remove('planet-active')
            document.getElementById('mars').classList.remove('planet-active')
            document.getElementById('europa').classList.add('planet-active')
            document.getElementById('titan').classList.remove('planet-active')

            mainImg.innerHTML = imgEuropa;
            mainText.innerHTML = textEurope;
            planetName.innerHTML = titleEurope;
            kms.innerHTML = daysEurope;
            break;
        case 4:
            document.getElementById('moon').classList.remove('planet-active')
            document.getElementById('mars').classList.remove('planet-active')
            document.getElementById('europa').classList.remove('planet-active')
            document.getElementById('titan').classList.add('planet-active')

            mainImg.innerHTML = imgTitan;
            mainText.innerHTML = textTitan;
            planetName.innerHTML = titleTitan;
            kms.innerHTML = kmTitan;
            days.innerHTML = daysTitan;
            break;
    }
}

function toggleBar(){
    //GET TAGS
    const mainDiv = document.getElementById("toggle-button")
    const mainUl = document.getElementById("ul-principal")
    //SET NEW IMG TOGGLE EVENT
    const xImg = `<img onclick="toggleBar()" class="toggle-button" src="./Assests/x.png" alt="">`
    const toggleImg = `<img onclick="toggleBar()" class="toggle-button" src="./Assests/Group.png" alt="">`

    if(mainDiv.innerHTML === xImg){
        mainDiv.innerHTML = toggleImg;
        mainUl.classList.add("hide")
    }else{
        mainDiv.innerHTML = xImg;
        mainUl.classList.remove("hide")
    }


}