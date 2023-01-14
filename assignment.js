class list {
    constructor(firstName, lastName, dob, depart, arrival, departureDate, returnDate, bags, meal, extras,id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.depart = depart;
        this.arrival = arrival;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.id = id;
        this.extras = extras;
        this.legalAge = false;
        this.cost = 300;
        this.time = 0;
    }
}
var personFake1 = new list("Misato", "Katsuragi", "1986-12-08", "Los Angeles", "Alberta", "2023-02-13", "2023-05-16","1","vegetarian", "leg ", "1")
var personFake2 = new list("Micheal", "Reeves", "2001-11-03", "Washingtin", "Charleston", "2024-01-13", "2024-01-16","3","chicken", "leg hp ss ", "2")
var personFake3 = new list("Lain", "Iwakura", "2007-7-06", "Charleston", "Tuscon", "2022-01-13", "2022-01-16","2","fish", "leg win ", "3")
var arr = []
var ids =["firstName", "lastName", "dob", "depart","arrival","departureDate","returnDate","bags"]
var arr2 =["firstNameInfo", "lastNameInfo", "dobInfo", "departInfo","arrivalInfo","departureDateInfo","returnDateInfo","bagsInfo"]
arr.push(personFake1)
arr.push(personFake2)
arr.push(personFake3)
let idCheck = 0;
let count = 4;
let meal = "";
let extra = "";
function addToList() {
    for(let i = 0;i<ids.length;i++) {
        if(document.getElementById(ids[i]).value != "") {
        idCheck++;
    }
    else {
        idCheck = 0;
    }
    }
    var radio = document.getElementsByName("meal")
    var extras = document.getElementsByName("extras")
    for(let i = 0;i<radio.length;i++)
        {
            if(radio[i].checked) meal = radio[i].value
        }
        for(let i = 0;i<extras.length;i++)
        {
            if(extras[i].checked) extra += extras[i].value +" "
        }
    if (idCheck >= ids.length && meal != "") {    
        let checkMap = ids.map(x =>{return document.getElementById(x).value})
        let temp = new list(checkMap[0],checkMap[1],checkMap[2],checkMap[3],checkMap[4],checkMap[5],checkMap[6],checkMap[7],meal,extra,count);
        count++;
        if((Date.now() - Date.parse(temp.dob)) >= (24*60*60*1000)) temp.legalAge = true
        let extraArray = temp.extras.split(" ");
        if(extraArray.length >= 1) extraArray.pop()
        console.log(extraArray)
        temp.time = (Date.parse(temp.returnDate) - Date.parse(temp.departureDate))/(24*60*60*1000)
        temp.cost += Number(temp.bags*20)+ Number(extraArray.length*10)
        arr.push(temp);
        for(let i = 0;i<ids.length;i++) {document.getElementById(ids[i]).value = "";}
        idCheck = 0;
        meal = "";
        extra = "";
        for(let i = 0;i<radio.length;i++){
            radio[i].checked = false
        }
        for(let i = 0;i<extras.length;i++){
            extras[i].checked = false
        }
        
    }
}
var ID;
function display(display){
    for(let i = 0; i < 8; i++){
        var x = ids[i]
        document.getElementById(arr2[i]).value = (arr[display])[x]
    }
    document.getElementById("mealInfo").value = arr[display].meal
    document.getElementById("extraInfo").value = arr[display].extras
    for(let i = 0;i<arr.length;i++)
    {
        if(document.getElementById("firstNameInfo").value == arr[i].firstName && document.getElementById("lastNameInfo").value == arr[i].lastName) 
        {
            ID = i
            console.log(ID)
        }
    }
}
let b;

function newText(){
    
    for(let e = 0; e < ids.length; e++)
    {
        b = ids[e]
        console.log(ID)
        arr[ID][b] = document.getElementById(arr2[e]).value
    }
    arr[ID].meal = document.getElementById("mealInfo").value
    arr[ID].extras = document.getElementById("extraInfo").value
}

function print() {
    space = "";
    for (let i = 0; i < arr.length; i++) {
        space += `<button onclick="display(${i})"><span>${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}</button>`
    }
    document.getElementById("printSpace").innerHTML = space;
    console.log(arr)
}