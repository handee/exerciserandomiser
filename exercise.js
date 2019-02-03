$(document).ready(function () {

$('li').click(function (e) {
        console.log('click', $(this).text());
        var cb = $(this).find(":checkbox")[0];
        if (e.target != cb) cb.checked = !cb.checked;
        $(this).toggleClass("selected", cb.checked);
});
});

function randomexercise(exerciselist,duration) {
// choose a random exercise from those checked
    var maximum=exerciselist.length;
    var index=(Math.round(Math.random()*(maximum-1)));
    chosenexercise=exerciselist[index];
// check that all classes are in 60 minute slots
    while (duration!="60" && chosenexercise.includes("class")) {
	 index=(Math.round(Math.random()*(maximum-1)));
	 chosenexercise=exerciselist[index];
    }
    return(chosenexercise);

}

function generateoutputstring(time, writein, exerciselist) {
    if (time== "0") {
        outputstring=" have a rest.";
    } else if (time=="Parkrun") {
        outputstring=" it's Parkrun day!";
    } else if (writein=="Random") { 
        outputstring=" do "+time+" minutes of "+randomexercise(exerciselist,time);
    } else {
        outputstring=" do "+time+" minutes of "+writein;
    }
    return(outputstring);
}

function toggle(source) {
// function to manage "select all" for checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function generateplan(form) {

// get data from the form 
// times
    var mondaytime=form.mon.value;
    var tuesdaytime=form.tue.value;
    var wednesdaytime=form.wed.value;
    var thursdaytime=form.thu.value;
    var fridaytime =form.fri.value;
    var saturdaytime=form.sat.value;
    var sundaytime =form.sun.value;
// override activities
    var mondayw=form.monw.value;
    var tuesdayw=form.tuew.value;
    var wednesdayw=form.wedw.value;
    var thursdayw=form.thuw.value;
    var fridayw =form.friw.value;
    var saturdayw=form.satw.value;
    var sundayw =form.sunw.value;
// exercise options
    var exerciseoptions=form.elements['exercise[]'];
    var chosenexercises=[];
    for (var i=0, len=exerciseoptions.length; i<len; i++) {
        if (exerciseoptions[i].checked) {
            chosenexercises.push(exerciseoptions[i].value);
        }
    }

// decide what to do each day 
    mondayactivity=generateoutputstring(mondaytime, mondayw, chosenexercises); 
    tuesdayactivity=generateoutputstring(tuesdaytime, tuesdayw, chosenexercises); 
    wednesdayactivity=generateoutputstring(wednesdaytime, wednesdayw, chosenexercises); 
    thursdayactivity=generateoutputstring(thursdaytime, thursdayw, chosenexercises); 
    fridayactivity=generateoutputstring(fridaytime, fridayw, chosenexercises); 
    saturdayactivity=generateoutputstring(saturdaytime, saturdayw, chosenexercises); 
    sundayactivity=generateoutputstring(sundaytime, sundayw, chosenexercises); 

// format output

    var x=document.getElementById("plan");

    var output="Plan:<br>";
    output=output+" on Monday, "+mondayactivity+"<br>";
    output=output+" on Tuesday, "+tuesdayactivity+"<br>";
    output=output+" on Wednesday, "+wednesdayactivity+"<br>";
    output=output+" on Thursday, "+thursdayactivity+"<br>";
    output=output+" on Friday, "+fridayactivity+"<br>";
    output=output+" on Saturday, "+saturdayactivity+"<br>";
    output=output+" on Sunday, "+sundayactivity+"<br>";
    x.innerHTML=output;

}
