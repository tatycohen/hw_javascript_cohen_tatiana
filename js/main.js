var fortyFour = new Object ();
fortyFour.firstName = "Barack";
fortyFour.lastName = "Obama";
fortyFour.termLength = 2;
fortyFour.party = "Democratic";
fortyFour.yearsOfPresidency = 8;

var fortyThree = new Object ();
fortyThree.firstName = "George";
fortyThree.lastName = "Bush";
fortyThree.termLength = 2;
fortyThree.party = "Republican";
fortyThree.yearsOfPresidency = 8;

var fortyTwo = new Object ();
fortyTwo.firstName = "Bill";
fortyTwo.lastName = "Clinton";
fortyTwo.termLength = 2;
fortyTwo.party = "Democratic";
fortyTwo.yearsOfPresidency = 8;

var fortyOne = new Object ();
fortyOne.firstName = "George"
fortyOne.lastName = "Bush"
fortyOne.termLength = 1;
fortyOne.party = "Republican";
fortyOne.yearsOfPresidency = 4;

var forty = new Object ();
forty.firstName = "Ronald";
forty.lastName = "Reagan";
forty.termLength = 2;
forty.party = "Republican";
forty.yearsOfPresidency = 8;


var presidents = [fortyFour, fortyThree , fortyTwo , fortyOne, forty];

console.log(presidents[2].firstName , presidents[2].lastName );