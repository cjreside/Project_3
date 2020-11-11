var quarter_select = "";
var down_select = "";
var defenders_select = "";
var passrushers_select = "";
var playdirection_select = "";
var route_select = "";
var offense_select = "";
var dropback_select = "";

    var quarter = {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4 };
      

    var down = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4
    };

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

    var numberOfPassRushers = {
        "2": 0,
        "3": 1,
        "4": 2,
        "5": 3,
        "6": 4, 
        "7": 5, 
        "8": 6
        };

    var playDirection = {
        "Left": 0,
        "Right": 1
    };

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

    var offenseFormation = {
        "Designed Roll Out Left": 0,
        "Designed Roll Out Right": 1,
        "Scramble": 2,
        "Scramble Roll Out Left": 3,
        "Scramble Roll Out Right": 4, 
        "Traditional": 5
    };


    var typeDropback = {
        "Empty": 0,
        "I Form": 1,
        "Jumbo": 2,
        "Pistol": 3,
        "Shotgun": 4, 
        "Single Back": 5
    };



//var selectKeys = Object.keys(data[0])
//selectKeys.forEach(e => {
  
  //d3.select('#options-container').append('div').attr('class','dropdown-container').append('select').attr('id',e)
  //for (const entry in data[0][e]) {
  //  console.log(entry)
 // }
//})

function quarter_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_quarter');
  var quarterchoice = Object.keys(quarter)
  for (var i = 0; i < quarterchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + quarterchoice[i] + '">' + quarterchoice[i] + '</option>';
  };

};    
function quarter_value(ele) {  
  var selected = ele.value;
  quarter_select = quarter[selected];
 // console.log(quarter_select)
};

function down_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_down');
  var downchoice = Object.keys(down)
  for (var i = 0; i < downchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + downchoice[i] + '">' + downchoice[i] + '</option>';
  };

};    
function down_value(ele) {  
  var selected = ele.value;
  down_select = down[selected]};
  
function defenders_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_defenders');
  var defenderschoice = Object.keys(defendersInTheBox)
  for (var i = 0; i < defenderschoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + defenderschoice[i] + '">' + defenderschoice[i] + '</option>';
  };

};    
function defenders_value(ele) {  
  var selected = ele.value;
  defenders_select = defendersInTheBox[selected]
};
function passrushers_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_passrushers');
  var passrusherschoice = Object.keys(numberOfPassRushers)
  for (var i = 0; i < passrusherschoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + passrusherschoice[i] + '">' + passrusherschoice[i] + '</option>';
  };

};    
function passrushers_value(ele) {  
  var selected = ele.value;
  passrushers_select = numberOfPassRushers[selected]
};
function playdirection_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_playdirection');
  var playdirectionchoice = Object.keys(playDirection)
  for (var i = 0; i < playdirectionchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + playdirectionchoice[i] + '">' + playdirectionchoice[i] + '</option>';
  };

};    
function playdirection_value(ele) {  
  var selected = ele.value;
  playdirection_select = playDirection[selected]
};

function route_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_route');
  var routechoice = Object.keys(route)
  for (var i = 0; i < routechoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + routechoice[i] + '">' + routechoice[i] + '</option>';
  };

};    
function route_value(ele) {  
  var selected = ele.value;
  route_select = route[selected]
};
function offense_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_offense');
  var offensechoice = Object.keys(offenseFormation)
  for (var i = 0; i < offensechoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + offensechoice[i] + '">' + offensechoice[i] + '</option>';
  };

};    
function offense_value(ele) {  
  var selected = ele.value;
  offense_select = offenseFormation[selected]
};
function dropback_dropdown(){    
  // Populate the dropdown
  // Adapted from: https://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
  var ele = document.getElementById('sel_dropback');
  var dropbackchoice = Object.keys(typeDropback)
  for (var i = 0; i < dropbackchoice.length; i++) {
      ele.innerHTML = ele.innerHTML + '<option value="' + dropbackchoice[i] + '">' + dropbackchoice[i] + '</option>';
  };

};    
function dropback_value(ele) {  
  var selected = ele.value;
  dropback_select = typeDropback[selected]
};
function buttonclick(){
  d3.event.preventDefault();
  //create variables using the user input from the filtered data
  data_line =[quarter_select,down_select,defenders_select,
  passrushers_select,playdirection_select,route_select,offense_select,dropback_select];
  console.log(data_line);
  // var user_select = `${quarter_select}/${down_select}/${defenders_select}/${passrushers_select}/${playdirection_select}/${route_select}/${offense_select}/${dropback_select}`
  // var url = `url/${user_select}`
  // d3.json(url).then(function(predict) {
  //   if (predict[0] == 0);
  //     prediction = "Catch"
  //   if (predict[0] == 1);
  //     prediction = "No catch"
  //   if (predict[0] == 2);
  //     prediction = "Interception"});
  //   console.log(prediction);
d3.selectAll("#filter-btn").on("click", buttonclick);

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  quarter_dropdown()  ;
  down_dropdown();
  defenders_dropdown();
  passrushers_dropdown();
  playdirection_dropdown();
  route_dropdown();
  offense_dropdown();
  dropback_dropdown();
}

// Initialize the dashboard
init();
