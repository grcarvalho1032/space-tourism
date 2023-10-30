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

