/*var cardOne="queen"
var cardTwo="queen"
var cardThree="king"
var cardFour="king"
console.log("User flipped: "+ cardOne )
console.log("User flipped: "+ cardThree)
var cardOne="queen"
var cardTwo="queen"
var cardThree="king"
var cardFour="king"
console.log("User flipped: "+ cardOne )
console.log("User flipped: "+ cardThree)
*/
var cards=[];
for(i=0;i<4;i++)
{
cards[0]="queen";
cards[1]="queen";
cards[2]="king";
cards[3]="king";
console.log("The user flipped: "+cards[i])
}
var cardOne= cards[0];
var cardTwo= cards[1]
var cardInPlay=[];
cardInPlay.push(cardOne);
cardInPlay.push(cardTwo);

if(cardInPlay.length === 2)
{
	if(cardInPlay[0] == cardInPlay[1])
	{
		alert("You have a match!")
	}
	else
	{
		alert("Sorry, try again!")
	}
}


