let present=0;

let total=60;

let students=[
"Rahul",
"Priya",
"Sai",
"Kiran",
"Anu",
"Ramesh"
];

let index=0;

function addStudent(){

if(index<students.length){

let li=document.createElement("li");

li.innerHTML=students[index];

document.getElementById("responseList").appendChild(li);

present++;

document.getElementById("present").innerHTML=present;

document.getElementById("absent").innerHTML=total-present;

index++;

}

}

function showPermission(type){

let area=document.getElementById("permissionArea");

if(type=="with"){

area.innerHTML=`

<h3>✅ With Permission</h3>

<div class="student-card">
<b>Rahul</b><br>
Reason: Medical Leave
</div>

<div class="student-card">
<b>Priya</b><br>
Reason: Family Function
</div>

`;

}

else{

area.innerHTML=`

<h3>❌ Without Permission</h3>

<div class="student-card">

<b>Rahul</b><br>

📱 Student : 9876543210<br>

👨 Parent : 9123456780<br><br>

<a href="tel:9876543210">

<button>📞 Call</button>

</a>

</div>

<br>

<div class="student-card">

<b>Sai</b><br>

📱 Student : 9988776655<br>

👨 Parent : 9001122334<br><br>

<a href="tel:9988776655">

<button>📞 Call</button>

</a>

</div>

<br>

<div class="student-card">

<b>Kiran</b><br>

📱 Student : 9012345678<br>

👨 Parent : 9876501234<br><br>

<a href="tel:9012345678">

<button>📞 Call</button>

</a>

</div>

`;

}

}