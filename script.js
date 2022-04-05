const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
//Yeah so im supposed to use the colors array to 
//adjust the styles of each span inside the h1 element.
//I keep trying to use loops to iterate over the spans but
// i cant seem to select the text inside each span much less change any elements on it.
// When i try to log the spans to the console i keep getting null

//So like maybe something like this?
const spans = document.querySelectorAll('span');

for(span of spans){
    for(color of colors){
        spans.style = color;
    }
}

//I know this isnt right but when i try and look for solutions
//I end up finding solutions to problems similar but wayyy above my level currently.