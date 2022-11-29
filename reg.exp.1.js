{
    //Match Beginning String Patterns
  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/; // search at the beginning of the line
  let result = calRegex.test(rickyAndCal);
}

{
    //Match Ending String Patterns
  let caboose = "The last car on a train is the caboose";
  let lastRegex = /caboose$/; //search at the end of the line
  let result = lastRegex.test(caboose);
}
