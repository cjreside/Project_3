var quarter_select = "";
var down_select = "";
var defenders_select = "";
var passrushers_select = "";
var playdirection_select = "";
var route_select = "";
var offense_select = "";
var dropback_select = "";

// Set keys/values for sel_quarter dropdown
var quarter = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4
};

// Set keys/values for sel_down dropdown
var down = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4
};

// Set keys/values for sel_defenders dropdown
var defendersInTheBox = {
    "3": 0,
    "4": 1,
    "5": 2,
    "6": 3,
    "7": 4, 
    "8": 5, 
    "9": 6, 
    "10": 7
};

// Set keys/values for sel_passrushers dropdown
var numberOfPassRushers = {
    "2": 0,
    "3": 1,
    "4": 2,
    "5": 3,
    "6": 4, 
    "7": 5, 
    "8": 6
};

// Set keys/values for sel_playdirection dropdown
var playDirection = {
    "Left": 0,
    "Right": 1
};

// Set keys/values for sel_route dropdown
var route = {
    "Angle": 0,
    "Corner": 1,
    "Cross": 2,
    "Flat": 3,
    "Go": 4, 
    "Hitch": 5, 
    "In": 6,
    "Out": 7,
    "Post": 8, 
    "Screen": 9, 
    "Slant": 10,
    "Wheel": 11,
    "Undefined": 12
};

// Set keys/values for sel_offense dropdown
var offenseFormation = {
    "Designed Roll Out Left": 0,
    "Designed Roll Out Right": 1,
    "Scramble": 2,
    "Scramble Roll Out Left": 3,
    "Scramble Roll Out Right": 4, 
    "Traditional": 5
};

// Set keys/values for sel_dropback dropdown
var typeDropback = {
    "Empty": 0,
    "I Form": 1,
    "Jumbo": 2,
    "Pistol": 3,
    "Shotgun": 4, 
    "Single Back": 5
};

// Populate the sel_quarter dropdown
function quarter_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_quarter');
  var quarterchoice = Object.keys(quarter)
  for (var i = 0; i < quarterchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + quarterchoice[i] + '">' + quarterchoice[i] + '</option>';
  };

};    

// When the quarter is selected (key), save the associated value
function quarter_value(ele) {  
  var selected = ele.value;
  quarter_select = quarter[selected];
};

// Populate the sel_down dropdown
function down_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_down');
  var downchoice = Object.keys(down)
  for (var i = 0; i < downchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + downchoice[i] + '">' + downchoice[i] + '</option>';
  };

};    

// When the down is selected (key), save the associated value
function down_value(ele) {  
  var selected = ele.value;
  down_select = down[selected]};

// Populate the sel_defenders dropdown
function defenders_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_defenders');
  var defenderschoice = Object.keys(defendersInTheBox)
  for (var i = 0; i < defenderschoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + defenderschoice[i] + '">' + defenderschoice[i] + '</option>';
  };

}; 

// When the number of defenders in the box is selected (key), save the associated value
function defenders_value(ele) {  
  var selected = ele.value;
  defenders_select = defendersInTheBox[selected]
};

// Populate the sel_passrushers dropdown
function passrushers_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_passrushers');
  var passrusherschoice = Object.keys(numberOfPassRushers);
  for (var i = 0; i < passrusherschoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + passrusherschoice[i] + '">' + passrusherschoice[i] + '</option>';
  };

};    

// When the number of pass rushers is selected (key), save the associated value
function passrushers_value(ele) {  
  var selected = ele.value;
  passrushers_select = numberOfPassRushers[selected]
};

// Populate the sel_playdirection dropdown
function playdirection_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_playdirection');
  var playdirectionchoice = Object.keys(playDirection)
  for (var i = 0; i < playdirectionchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + playdirectionchoice[i] + '">' + playdirectionchoice[i] + '</option>';
  };

};    

// When a play direction is selected (key), save the associated value
function playdirection_value(ele) {  
  var selected = ele.value;
  playdirection_select = playDirection[selected]
};

// Populate the sel_route dropdown
function route_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_route');
  var routechoice = Object.keys(route)
  for (var i = 0; i < routechoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + routechoice[i] + '">' + routechoice[i] + '</option>';
  };

};    

// When a route is selected (key), save the associated value
function route_value(ele) {  
  var selected = ele.value;
  route_select = route[selected]
};

// Populate the sel_offense dropdown
function offense_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_offense');
  var offensechoice = Object.keys(offenseFormation)
  for (var i = 0; i < offensechoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + offensechoice[i] + '">' + offensechoice[i] + '</option>';
  };

};    

// When offesive formation is selected (key), save the associated value
function offense_value(ele) {  
  var selected = ele.value;
  offense_select = offenseFormation[selected]
};

// Populate the sel_dropback dropdown
function dropback_dropdown(){    
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_dropback');
  var dropbackchoice = Object.keys(typeDropback)
  for (var i = 0; i < dropbackchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + dropbackchoice[i] + '">' + dropbackchoice[i] + '</option>';
  };

};    

// When dropback is selected (key), save the associated value
function dropback_value(ele) {  
  var selected = ele.value;
  dropback_select = typeDropback[selected]
};

// Runs when the filter-btn is clicked
function buttonclick(){
  d3.event.preventDefault();
  
  // This builds part of the URL to pass selections to Flask
  sender = `${quarter_select}/${down_select}/${defenders_select}/${passrushers_select}/${playdirection_select}/${route_select}/${offense_select}/${dropback_select}`
  
  // Build the complete URL
  var url = "/predict/" + sender;  
  
  // GET request -> Flask with the parameters passed and send it
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  
  // Get the results from the ML prediciton
  // Value is 0,1, or 2
  // 0 = Pass complete
  // 1 = Pass incomplete
  // 2 = Pass intercepted
  var retrievedtext = xhr.responseText; //This will be returned by Flask
  
  console.log(retrievedtext);

  if (retrievedtext == 0){
    document.getElementById("img").src = "videos/Russell_carlton.gif"
  }else if(retrievedtext == 1){
    document.getElementById("img").src = "videos/Russell_disappointed.gif"
  }else if(retrievedtext == 2){
    document.getElementById("img").src = "videos/sad_russell.gif"
  }else {
    document.getElementById("img").src = "videos/Russell_eating_gif.gif"
  };

};

// Runs when the filter-btn is clicked
function randomButton(){
  d3.event.preventDefault();
  var quarterchoice = Object.keys(quarter);
  var downchoice = Object.keys(down);
  var defenderschoice = Object.keys(defendersInTheBox);
  var passrusherschoice = Object.keys(numberOfPassRushers);
  var playdirectionchoice = Object.keys(playDirection);
  var routechoice = Object.keys(route);
  var offensechoice = Object.keys(offenseFormation);
  var dropbackchoice = Object.keys(typeDropback);

  var minNumber = 1;
  var maxquarter = quarterchoice.length;
  var maxdown = downchoice.length;
  var maxdefenders = defenderschoice.length; 
  var maxpassrushers = passrusherschoice.length;
  var maxdirection = playdirectionchoice.length;
  var maxroute = routechoice.length;
  var maxoffense = offensechoice.length;
  var maxdropback = dropbackchoice.length;

  function randomNumberFromRange(min,max){
          return  Math.floor(Math.random()*(max-min+1)+min);
  }

   var quarternumber = randomNumberFromRange(minNumber, maxquarter)
   var downnumber = randomNumberFromRange(minNumber, maxdown)
   var defendernumber = randomNumberFromRange(minNumber, maxdefenders)
   var passrushernumber = randomNumberFromRange(minNumber, maxpassrushers)
   var playdirectionnumber = randomNumberFromRange(minNumber, maxdirection)
   var routenumber = randomNumberFromRange(minNumber, maxroute)
   var offensenumber = randomNumberFromRange(minNumber, maxoffense)
   var dropbacknumber = randomNumberFromRange(minNumber, maxdropback)
  $("#sel_quarter")[0].selectedIndex = [quarternumber.toString()];
  $("#sel_down")[0].selectedIndex = [downnumber.toString()];
  $("#sel_defenders")[0].selectedIndex = [defendernumber.toString()];
  $("#sel_passrushers")[0].selectedIndex = [passrushernumber.toString()];
  $("#sel_playdirection")[0].selectedIndex = [playdirectionnumber.toString()];
  $("#sel_route")[0].selectedIndex = [routenumber.toString()];
  $("#sel_offense")[0].selectedIndex =[offensenumber.toString()];
  $("#sel_dropback")[0].selectedIndex = [dropbacknumber.toString()];
  //$("#s1")[0].selectedIndex = randomNumberFromRange(minNumber, maxNumber);

   random = `${quarternumber}/${downnumber}/${defendernumber - 1}/${passrushernumber-1}/${playdirectionnumber-1}/${routenumber-1}/${offensenumber-1}/${dropbacknumber-1}`
   console.log(random);
  
  // Build the complete URL
  var url = "/predict/" + random;  
  //console.log(url)

  // GET request -> Flask with the parameters passed and send it
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  
  // Get the results from the ML prediciton
  // Value is 0,1, or 2
  // 0 = Pass complete
  // 1 = Pass incomplete
  // 2 = Pass intercepted
  var retrievedtext = xhr.responseText; //This will be returned by Flask
  
  console.log(retrievedtext);

  if (retrievedtext == 0){
    document.getElementById("img").src = "videos/Russell_carlton.gif"
  }else if(retrievedtext == 1){
    document.getElementById("img").src = "videos/Russell_disappointed.gif"
  }else if(retrievedtext == 2){
    document.getElementById("img").src = "videos/sad_russell.gif"
  }else {
    document.getElementById("img").src = "videos/Russell_eating_gif.gif"
  };
};

// If the user clicks the RUN MODEL button, call buttonclick
d3.selectAll("#filter-btn").on("click", buttonclick);

// If the user clicks the RUN MODEL button, call buttonclick
d3.selectAll("#random-btn").on("click", randomButton);

// Initialization 
function init() {
  document.getElementById("img").src = "videos/Comin_for_the_win_russell.gif"
  // Build out the dropdown values  
  quarter_dropdown();
  down_dropdown();
  defenders_dropdown();
  passrushers_dropdown();
  playdirection_dropdown();
  route_dropdown();
  offense_dropdown();
  dropback_dropdown();
};

// Initialize the dashboard
init();