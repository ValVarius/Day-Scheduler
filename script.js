$(document).ready(function () {
  $(".description").val("");

  let row;

  let pm = false;
  if (moment().format("a") == "pm") {
    pm = true;
  }

  let currentHour = parseInt(moment().format("h"));

  if (pm) {
    currentHour += 12;
  }

  for (let i = 1; i <= 24; i++) {
    
    row =
      `<div  id="button` +
      i +
      `" class="row"><div class="time-block">` +
      i +
      `:00</div>
    <input type="text" class="description" placeholder = "Enter an activity" value = "" />
    <button class="saveBtn" >save</button></div>`;

    $(".container").append($(row));

    if (currentHour > i) {
      $("#button" + i)
        .children("input")
        .css({ "background-color": "#d3d3d3" });
    }
    if (currentHour == i) {
      $("#button" + i)
        .children("input")
        .css({ "background-color": "red" });
    }
    //   Retrieve previous events from local storage

    var storedEvent = JSON.parse(localStorage.getItem("button" + i));
    if(storedEvent){

        console.log($("#button"+ i).children("input"));
        $("#button"+ i).children("input").val(storedEvent)
        $("#button"+ i).children("input").css({ "font-size": "24px", "text-align": "left" });
    }
    // console.log(storedEvent);
  }
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

  //   ADD functionality to each button

  $(".saveBtn").on("click", function (event) {
    
    $(event.target)
      .parent()
      .children("input")
      .css({ "font-size": "24px", "text-align": "left" });

    // Save event in local storage

    let note = $(event.target).parent().children("input")[0].value;
    let slot = $(event.target).parent().attr("id");

    localStorage.setItem(slot, JSON.stringify(note));
  });
});
