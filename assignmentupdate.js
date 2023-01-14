class list {
    constructor(firstName, lastName, id, arrival,birthdate, depart, leaveDate, returnDate, bags, meal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.depart = depart;
        this.arrival = arrival;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.legRoom = false;
        this.windowSeat = false;
        this.Headphones = false;
        this.secondServing = false;
        this.id = id;
    }
    }

var arr = []
let count = 1;
 
function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthdate = document.getElementById("birthdate").value;
    let depart = document.getElementById("depart").value;
    let arrival = document.getElementById("arrival").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let meal = document.getElementsByName("meal").value;
    let legRoom = document.getElementById("legRoom").value;
    let windowSeat = document.getElementById("windowSeat").value;
    let Headphones = document.getElementById("Headphones").value;
    let secondServing = document.getElementById("secondServing").value;
    if (firstName != "" && lastName != "" && birthdate != "" && depart != "" && arrival != "" && leaveDate != "" && returnDate != "" && bags != "" && meal != "" && legRoom != "" && windowSeat != "" && Headphones != "" && secondServing != "" 
    ) {
        let temp = new list(firstName, lastName, count, birthdate,depart, arrival, leaveDate, returnDate, bags, meal, legRoom, windowSeat, Headphones, secondServing);
        count++;
        arr.push(temp);
        document.getElementById("firstName").value  = "";
        document.getElementById("lastName").value  = "";
        document.getElementById("birthdate").value  = "";
        document.getElementById("depart").value  = "";
        document.getElementById("arrival").value  = "";
        document.getElementById("leaveDate").value  = "";
        document.getElementById("returnDate").value  = "";
        document.getElementById("bags").value  = "";
        document.getElementsByName("meal").value  = "";
        document.getElementById("legRoom").value  = "";
        document.getElementById("windowSeat").value  = "";
        document.getElementById("Headphones").value  = "";
        document.getElementById("secondServing").value  = "";
        // document.getElementById("id").value  = "";
        console.log(arr)
    }
}
 
function print() {
    space = "";
    for (let i = 0; i < arr.length; i++) {
        space += `<div><span>${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}
        </div>`

    }
    document.getElementById("printSpace").innerHTML = space;
}
 

function populate() {
    var select = document.getElementById("selectNumber");
    select.innerHTML = `<option>Choose a number</option>`
    for (var i = 0; i < arr.length; i++) {
        select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
    // ${arr[i].birthdate} ${arr[i].depart} ${arr[i].arrival} ${arr[i].leaveDate} ${arr[i].returnDate} ${arr[i].bags} ${arr[i].meal} ${arr[i].legRoom} ${arr[i].windowSeat} ${arr[i].secondServing}
    }
    
    document.getElementById("printSpace").innerHTML = firstName;
    document.getElementById("printSpace").innerHTML = lastName;
    document.getElementById("printSpace").innerHTML = birthdate;
    document.getElementById("printSpace").innerHTML = depart;
    document.getElementById("printSpace").innerHTML = arrival;
    document.getElementById("printSpace").innerHTML = leaveDate;
    document.getElementById("printSpace").innerHTML = returnDate;
    document.getElementById("printSpace").innerHTML = bags;
    document.getElementsByClassName("printSpace").innerHTML = meal;
    document.getElementById("printSpace").innerHTML = legRoom;
    document.getElementById("printSpace").innerHTML = windowSeat;
    document.getElementById("printSpace").innerHTML = Headphones;
    document.getElementById("printSpace").innerHTML = secondServing;
    document.getElementById("printSpace").innerHTML = id;
}
 
 
