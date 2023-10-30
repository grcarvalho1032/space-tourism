function changeClass(num) {
    // SET VARIABLES THAT CAPTURE TAG
    const mainJob = document.getElementById('job')
    const crewtName = document.getElementById('crew-name')
    const text = document.getElementById('text')
    const imgCrew = document.getElementById('img-crew')
    // DECLARATION VARIABLES JOBS  
    const jobDouglas = `commander`
    const jobMark = `mission specialist`
    const jobVictor = `pilot`
    const jobAnsari = `flight engineer`
    // DECLARATION VARIABLES TO NAMES
    const douglas = `Douglas Hurley`
    const mark = `MARK SHUTTLEWORTH`
    const victor = `Victor Glover`
    const ansari = `Anousheh Ansari`
    // DECLARATION VARIABLES TO IMAGES
    const imgDouglas = `<img  class="img-crew" src="Assests/Douglas-Hurley.png" alt="Douglas Hurley ">`
    const imgMark = `<img  class="img-crew" src="Assests/Mark-shuttleworth.png" alt="MARK SHUTTLEWORTH ">`
    const imgVictor = `<img  class="img-crew" src="Assests/Victor-Glover.png" alt="Victor Glover ">`
    const imgAnsari = `<img  class="img-crew" src="Assests/Ansari.png" alt="Victor Glover ">`
    // DECLARATION VARIABLES TO DESCRIPTION
    const textDouglas = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`
    const textMark = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`
    const textVictor = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `
    const textAnsari = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `
    

    switch (num) {
        case 1:
            document.getElementById('douglas').classList.add('crew-active')
            document.getElementById('mark').classList.remove('crew-active')
            document.getElementById('victor').classList.remove('crew-active')
            document.getElementById('ansari').classList.remove('crew-active')

            mainJob.innerHTML = jobDouglas;
            crewtName.innerHTML = douglas;
            text.innerHTML = textDouglas;
            imgCrew.innerHTML = imgDouglas;
            break;
        case 2:
            document.getElementById('douglas').classList.remove('crew-active')
            document.getElementById('mark').classList.add('crew-active')
            document.getElementById('victor').classList.remove('crew-active')
            document.getElementById('ansari').classList.remove('crew-active')

            mainJob.innerHTML = jobMark;
            crewtName.innerHTML = mark;
            text.innerHTML = textMark;
            imgCrew.innerHTML = imgMark;
            break;
        case 3:
            document.getElementById('douglas').classList.remove('crew-active')
            document.getElementById('mark').classList.remove('crew-active')
            document.getElementById('victor').classList.add('crew-active')
            document.getElementById('ansari').classList.remove('crew-active')

            mainJob.innerHTML = jobVictor;
            crewtName.innerHTML = victor;
            text.innerHTML = textVictor;
            imgCrew.innerHTML = imgVictor;
            break;
        case 4:
            document.getElementById('douglas').classList.remove('crew-active')
            document.getElementById('mark').classList.remove('crew-active')
            document.getElementById('victor').classList.remove('crew-active')
            document.getElementById('ansari').classList.add('crew-active')

            mainJob.innerHTML = jobAnsari;
            crewtName.innerHTML = ansari;
            text.innerHTML = textAnsari;
            imgCrew.innerHTML = imgAnsari;
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