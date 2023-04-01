selectedType =
    {
        "monthly" : true,
        "yearly" : false
    };

plans = [
    {
        "id" : "card1",
        "name" : "Arcade", 
        "price_monthly" : "9", 
        "price_yearly" : "90",
        "src" : "assets/images/icon-arcade.svg",
        "selected":false,
    },
    {
        "id" : "card2",
        "name" : "Advanced", 
        "price_monthly" : "12", 
        "price_yearly" : "120",
        "src" : "assets/images/icon-advanced.svg",
        "selected":false
    },
    {
        "id" : "card3",
        "name" : "Pro", 
        "price_monthly" : "15", 
        "price_yearly" : "150",
        "src" : "assets/images/icon-pro.svg",
        "selected":false
    }
];

addOns = [
    {
        "id" : "addOn1",
        "name" : "Online service",
        "desc" : "Access to multiplayer games", 
        "price_monthly" : "1", 
        "price_yearly" : "10",
        "selected":false
    },
    {
        "id" : "addOn2",
        "name" : "Larger storage", 
        "desc" : "Exdiva 1TB of cloud save",
        "price_monthly" : "2", 
        "price_yearly" : "20",
        "selected":false
    },
    {
        "id" : "addOn3",
        "name" : "Customizable Profile", 
        "desc" : "Custom theme on your profile",
        "price_monthly" : "2", 
        "price_yearly" : "20",
        "selected":false
    }
];

//change page 
function toNextPage(pageNo){
    if(pageNo == 3){
        getFinalValues();
    }
    var pageButton = document.getElementById("next-step-"+pageNo+"-page"); 
    var nextPage = pageNo + 1;
    document.getElementById("step-page-"+pageNo).style.display = "none";    
    document.getElementById("step-page-"+nextPage).style.display = "block";
    document.getElementById("mobile-page-no-"+nextPage).style.backgroundColor = "var(--light-blue)";
    document.getElementById("mobile-page-no-"+nextPage).style.color = "var(--marine-blue)";
    document.getElementById("mobile-page-no-"+pageNo).style.backgroundColor = "var(--purplish-blue)";
    document.getElementById("mobile-page-no-"+pageNo).style.color = "var(--pastel-blue)";
    document.getElementById("page-no-"+nextPage).style.backgroundColor = "var(--light-blue)";
    document.getElementById("page-no-"+nextPage).style.color = "var(--marine-blue)";
    document.getElementById("page-no-"+pageNo).style.backgroundColor = "var(--purplish-blue)";
    document.getElementById("page-no-"+pageNo).style.color = "var(--pastel-blue)";
}

function toPrevPage(pageNo){
    var pageButton = document.getElementById("next-step-"+pageNo+"-page"); 
    var prevPage = pageNo - 1;
    document.getElementById("step-page-"+pageNo).style.display = "none";    
    document.getElementById("step-page-"+prevPage).style.display = "block";
    document.getElementById("mobile-page-no-"+prevPage).style.backgroundColor = "var(--light-blue)";
    document.getElementById("mobile-page-no-"+prevPage).style.color = "var(--marine-blue)";
    document.getElementById("mobile-page-no-"+pageNo).style.backgroundColor = "var(--purplish-blue)";
    document.getElementById("mobile-page-no-"+pageNo).style.color = "var(--pastel-blue)";
    document.getElementById("page-no-"+prevPage).style.backgroundColor = "var(--light-blue)";
    document.getElementById("page-no-"+prevPage).style.color = "var(--marine-blue)";
    document.getElementById("page-no-"+pageNo).style.backgroundColor = "var(--purplish-blue)";
    document.getElementById("page-no-"+pageNo).style.color = "var(--pastel-blue)";
}

function showThankyouPage(){
    document.getElementById("step-page-5").style.display = "block";
    document.getElementById("step-page-4").style.display = "none";
}

//add plans cards functions
function displayCards(){
    var cardMain = document.getElementsByClassName("card-main")[0];
    cardMain.innerHTML = "";
    for (var i = 0; i< plans.length; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card grid-item");
        cardId = plans[i].id;
        cardDiv.setAttribute("id", cardId);
        let onClickFunction = "toggleCardSelection('" + cardId + "')";
        cardDiv.setAttribute("onclick", onClickFunction);
        let cardImage = document.createElement("img");
        cardImage.setAttribute("class", "card-image");
        cardImage.setAttribute("alt", plans[i].name);
        cardImage.setAttribute("src", plans[i].src);
        let cardHeading = document.createElement("h3");
        cardHeading.setAttribute("class", "card-heading");
        cardHeading.innerHTML = plans[i].name;

        let cardPrice = document.createElement("p");
        cardPrice.setAttribute("class", "card-price");
        cardPriceId = plans[i].id + "price";
        cardPrice.setAttribute("id", cardPriceId)
        price = "$" + plans[i].price_monthly + "/mo"
        cardPrice.innerHTML = price;
        
        let innerDiv = document.createElement("div")
        innerDiv.setAttribute("class", "card-inner-div-text")

        cardDiv.appendChild(cardImage);
        innerDiv.appendChild(cardHeading);
        innerDiv.appendChild(cardPrice);
        cardDiv.appendChild(innerDiv);
        cardMain.appendChild(cardDiv);
        
    }
}
displayCards();

//toggle price
function toggleSelectedType(){
    if(selectedType.monthly === true){
        selectedType.monthly = false;
        selectedType.yearly = true;
        for(let i=0; i<plans.length; i++){
            parent = document.getElementsByClassName("card-inner-div-text")[i];  
            newGroup = document.createElement("p"); 
            newGroup.setAttribute("id", plans[i].id + "offer"); 
            newGroup.setAttribute("class", plans[i].id + "offers");
            newGroup.innerHTML = "2 months free";
            parent.appendChild(newGroup);
            price = "$" + plans[i].price_yearly + "/yr"
            cardPriceId = plans[i].id + "price";
            document.getElementById(cardPriceId).innerHTML = price;
        }
        for(let i=0; i<addOns.length; i++){
            let addOnAmountTag = document.getElementsByClassName("addd-on-amount")[i];
            addOnAmountTag.innerHTML = "+$" + addOns[i].price_yearly + "/yr";
        }
    }
    else{
        selectedType.monthly = true;
        selectedType.yearly = false;
        for(let i=0; i<plans.length; i++){
            let card = document.getElementById(plans[i].id + 'offer');  
            card.remove();
            price = "$" + plans[i].price_monthly + "/mo"
            cardPriceId = plans[i].id + "price";
            document.getElementById(cardPriceId).innerHTML = price;
        }
        for(let i=0; i<addOns.length; i++){
            let addOnAmountTag = document.getElementsByClassName("addd-on-amount")[i];
            addOnAmountTag.innerHTML = "+$" + addOns[i].price_monthly + "/mo";
        }
    }
};

//add card div select function
function toggleCardSelection(cardId){
    for(let i=0; i<plans.length; i++){
        if(plans[i].id !== cardId){
            plans[i].selected = false;
            document.getElementById(plans[i].id).style.borderColor = "var(--light-gray)";
        }
        else{
            plans[i].selected = true;
            document.getElementById((plans[i].id)).style.borderColor = "var(--purplish-blue)";            
        }
    } 
}

//add add-ons cards functions
function displayAddOns(){
    var addOnMain = document.getElementsByClassName("add-ons-options")[0];
    addOnMain.innerHTML = "";
    for (var i = 0; i< addOns.length; i++) {
        let addOnDiv = document.createElement("div");
        addOnDiv.setAttribute("class", "add-on");
        addOnDivID = addOns[i].id;
        addOnDiv.setAttribute("id", addOnDivID);

        let addOnDivSubDiv1 = document.createElement("div");
        let addOnInputTag = document.createElement("input");
        addOnInputTag.setAttribute("type", "checkbox");
        addOnInputTag.setAttribute("name", "add-on");
        addOnInputTag.setAttribute("class", "check-box");
        addOnInputTag.setAttribute("id", addOnDivID+"input-tag");
        let addDivOnClickFunction = "selectAddOn('" + addOnInputTag.id + "','" + addOnDivID + "')";
        addOnInputTag.setAttribute("onclick", addDivOnClickFunction);
        addOnDivSubDiv1.appendChild(addOnInputTag);

        let addOnDivSubDivInnerDiv = document.createElement("div");
        addOnDivSubDivInnerDiv.setAttribute("class", "addOn-name-desc");
        let subDiv2heading = document.createElement("h3");
        subDiv2heading.setAttribute("class", "add-on-name");
        subDiv2heading.innerHTML = addOns[i].name;
        let subDiv2Desc = document.createElement("p");
        subDiv2Desc.setAttribute("class", "add-on-desc");
        subDiv2Desc.innerHTML = addOns[i].desc;

        addOnDivSubDivInnerDiv.appendChild(subDiv2heading);
        addOnDivSubDivInnerDiv.appendChild(subDiv2Desc);
        addOnDivSubDiv1.appendChild(addOnDivSubDivInnerDiv);
        
        let addOnDivSubDiv2 = document.createElement("div");
        addOnDivSubDiv2.setAttribute("class", "addOn-amount");
        let amountTag = document.createElement("p");
        amountTag.setAttribute("class", "addd-on-amount");
        amountTag.innerHTML = "+$" + addOns[i].price_monthly + "/mo";
        addOnDivSubDiv2.appendChild(amountTag);
        
        addOnDiv.appendChild(addOnDivSubDiv1);
        addOnDiv.appendChild(addOnDivSubDiv2);
        addOnMain.appendChild(addOnDiv);
    }
}

//select/de-select add on
function selectAddOn(id, addOnId){
    for(let i=0; i<addOns.length; i++){
        if(addOns[i].id === addOnId){
            let addOnClickedOn = addOns[i];
            addOnClickedOn.selected = addOnClickedOn.selected == true?false:true;
            let tag = document.getElementById(addOnId);
            tag.style.borderColor = addOnClickedOn.selected == true?"var(--purplish-blue)":"var(--light-gray)";
        }
    }
}
displayAddOns();

function getFinalValues(){
    finalAddOns = document.getElementById("all-final-add-on");
    finalAddOns.innerHTML = "";
    let total = 0;
    for(let i=0; i<addOns.length; i++){
        if(addOns[i].selected){
            let addOnDiv = document.createElement("div");
            addOnDiv.setAttribute("id", "add-on-div-"+ i);
            addOnDiv.setAttribute("class", "finish-up-values")
            let paraAddOnName = document.createElement("p");
            paraAddOnName.innerHTML = addOns[i].name;
        
            let paraAddOnCost = document.createElement("p");
            paraAddOnCost.setAttribute("id", "cost");
            let addOnCost = selectedType.monthly == true?addOns[i].price_monthly:addOns[i].price_yearly;
            total += parseFloat(addOnCost);
            let addOnSuffix = selectedType.monthly == true?"/mo":"/yr"
            paraAddOnCost.innerHTML = "+$" + addOnCost + addOnSuffix;
            addOnDiv.appendChild(paraAddOnName);
            addOnDiv.appendChild(paraAddOnCost);
            finalAddOns.appendChild(addOnDiv);
        }
    }
    document.getElementById("plan-name").innerHTML = "Select A plan";
    document.getElementById("plan-amount").innerHTML = 0;
    for(let i=0; i<plans.length; i++){
        if(plans[i].selected){
            document.getElementById("plan-name").innerHTML =  plans[i].name;
            planAmount = selectedType.monthly ? plans[i].price_monthly : plans[i].price_yearly;
            total += parseFloat(planAmount);
            planType = selectedType.monthly ? "/mo" : "/yr";
            planAmount = "$" + planAmount + planType;
            document.getElementById("plan-amount").innerHTML = planAmount;
        }
    }
    let selectedPlan = selectedType.monthly?"/mo":"/yr";
    document.getElementById("total").innerHTML = "+$" + total + selectedPlan;
}

function changeFinalSelectedType(){
    toggleSelectedType();
    getFinalValues();
    document.getElementById("toggle-switch").checked = !(document.getElementById("toggle-switch").checked);
}

//validations
var button1stPage = document.getElementById("next-step-1-page");
button1stPage.addEventListener("click", function(e){
    let req = "*  Required";
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(name == ""){
        document.querySelector("form label:nth-of-type(1) span").innerHTML = req;
        document.getElementById("name").style.borderColor = "red";
        
    }
    else if(email == ""){
        document.querySelector("form label:nth-of-type(2) span").innerHTML = req;
        document.getElementById("email").style.borderColor = "red";
    }
    else if(!filter.test(email)){
        document.querySelector("form label:nth-of-type(2) span").innerHTML = "*  Please provide a valid email address";
        document.getElementById("phone").style.borderColor = "red";
    }
    else if(phone == ""){
        document.querySelector("form label:nth-of-type(3) span").innerHTML = req;
        document.getElementById("phone").style.borderColor = "red";
    }
    else{
        document.querySelector("form label:nth-of-type(1) span").innerHTML = "*";
        document.querySelector("form label:nth-of-type(2) span").innerHTML = "*";
        document.querySelector("form label:nth-of-type(3) span").innerHTML = "*";
        document.getElementById("name").style.borderColor = "var(--light-gray)";
        document.getElementById("email").style.borderColor = "var(--light-gray)";
        document.getElementById("phone").style.borderColor = "var(--light-gray)";
        toNextPage(1);
    }
});


var button2ndPage = document.getElementById("next-step-2-page");
button2ndPage.addEventListener("click", function(e){
    let planSelected = false;
    for(let i=0; i<plans.length; i++){
        if(plans[i].selected){
            planSelected = true;
        }
    }
    if(planSelected){
        document.getElementById("plan-validation").style.visibility = "hidden";
        toNextPage(2);
    }
    else{
        document.getElementById("plan-validation").style.visibility = "visible";
    }
});