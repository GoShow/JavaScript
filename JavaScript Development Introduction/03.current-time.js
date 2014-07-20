var currDate = new Date ();
var currHour = currDate.getHours();
var currMinute = currDate.getMinutes();

if (currMinute > 9) {
    console.log(currHour + ":" + currMinute);
}   else {
    console.log(currHour + ":0" + currMinute);
}