var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //get first button and add a listener
}

function handleClick(){
    alert("I got clicked!");
}