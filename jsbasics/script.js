/*//decision making
var age=18;
if (age<13)
{
console.log("minor");
}
else if (age>=18)
{
    console.log("major");
}
//con?true:false
age>=age?console.log("major"):console.log("minor");
*/
/*u//function
function sachin(firstName,LastName) {
    console.log(firstName+' '+LastName);
}
sachin('tejeswini','r');

//array
var names=['tejeswini','Geet','Miley'];
console.log(names[2]);
console.log(names.length);
names.push("Elsa");
names.unshift("Star");
names.pop();
console.log(names);
*/
/*
var a=124,b=48,c=268;
var e=new e(3);
if(a<50)
{
e=a*(20/100);

}
else if (b<50 || b>200)
{
    f=b*(15/100);
}
else
{
    g=c*(10/100);
*/
//objects
/*
var mydetails={
    firstName: 'Tejeswini',
    LastName: 'R',
    dob:1998,
    family: ['tej','star'],
    calcAge: function(birthYear){
        return 2019-birthYear;
    }
};
console.log(mydetails.firstName);
var z='dob';
console.log(mydetails[z]);
mydetails.dob=1999;
console.log(mydetails);
//new change
//new object
var shiva=new Object();
shiva.firstName='teju';
console.log(shiva);
console.log('Tejeswini is ' +mydetails.calcAge(1998)+ ' years old');
*/
/*
document.getElementById('btn').onmouseover=changeonMouseover;
function changeonMouseover()
{
    var but=document.getElementById('btn');
    but.style.background="pink";
}
*/
var but=document.getElementById('btn');
but.addEventListener('mouseOver',changeonMouseOver);
but.addEventListener('mouseOut',changeonMouseOut);
function changeonMouseOver(){
    this.style.background="red";
}
function changeonMouseOver(){
    this.style.background="blue";
}