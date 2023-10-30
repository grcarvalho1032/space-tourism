function changeClass(num) {
    // SET VARIABLES THAT CAPTURE TAG
    const partsName = document.getElementById('parts');
    const text = document.getElementById('text-technology');
    const partImg = document.getElementById('part-img');
    // DECLARATION VARIABLES PARTS NAMES
    const partOne = `LAUNCH VEHICLE`;
    const partTwo = `SPACEPORT`;  
    const partThree = `SPACE CAPSULE`;
    // DECLARATION VARIABLES TEXT  
    const launchText = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
    const portText = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.`;
    const capsuleText = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;
    // DECLARATION VARIABLES IMG
    const launchImg = `<img class="img-tec" src="./Assests/Launch-Vehicle.jpg" alt="Launch Vehicle">`;
    const portImg = `<img class="img-tec" class="aside-technology" src="./Assests/Bitmap-Company.jpg" alt="Spaceport">`
    const capsuleImg = `<img class="img-tec" class="aside-technology" src="./Assests/Bitmap-Capsule.jpg" alt="Space Capsule">`
    
    
    switch (num) {
        case 1:
            document.getElementById('launch').classList.add('active-technology');
            document.getElementById('port').classList.remove('active-technology');
            document.getElementById('capsule').classList.remove('active-technology');
        
            partsName.innerHTML = partOne;
            text.innerHTML = launchText;
            partImg.innerHTML = launchImg;
            break;
        case 2:
            document.getElementById('launch').classList.remove('active-technology');
            document.getElementById('port').classList.add('active-technology');
            document.getElementById('capsule').classList.remove('active-technology');

            partsName.innerHTML = partTwo;
            text.innerHTML = portText;
            partImg.innerHTML = portImg;
            break;
        case 3:
            document.getElementById('launch').classList.remove('active-technology');
            document.getElementById('port').classList.remove('active-technology');
            document.getElementById('capsule').classList.add('active-technology');

            partsName.innerHTML = partThree;
            text.innerHTML = capsuleText;
            partImg.innerHTML = capsuleImg;
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