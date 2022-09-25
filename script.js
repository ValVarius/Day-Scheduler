$(document).ready(function () {
  $(".description").val("");

  let row;

  let pm = false
  if(moment().format("a") == "pm"){
    pm = true;
  }

  let currentHour = parseInt(moment().format("h"))

  if(pm){
    currentHour+=12
  }


  for (let i = 1; i <= 24; i++) {
    // let index = i.toString();
    // console.log(typeof index);
    row =
      `<div  id="button` + i +`" class="row"><div class="time-block">` +
      i +
      `:00</div>
    <input type="text" class="description" placeholder = "Enter an activity" value = "" />
    <button class="saveBtn" >save</button></div>`;

    $(".container").append($(row));

    if (currentHour > i) {
        // console.log($("#button" + i)[0].children[1]);
        $("#button" + i).children("input").css({"background-color": "#d3d3d3"})
        
    }
    if (currentHour == i) {
        $("#button" + i).children("input").css({"background-color": "red"})

    }


    
  }
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));



  

//   $("#button1").css({"margin-top": "1000px"})

  //   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//   console.log(moment().format("h"));

  

//   console.log($("#button1"));

  //   $("#button1").css({"background-color": "red",'font-size': '150%' })
});
