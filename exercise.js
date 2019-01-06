function randomexercise(exerciselist,duration) {
    var maximum=exerciselist.length;
    var index=(Math.round(Math.random()*(maximum-1)));
    chosenexercise=exerciselist[index];
    while (duration!="60" && chosenexercise.includes("class")) {
	 index=(Math.round(Math.random()*(maximum-1)));
	 chosenexercise=exerciselist[index];
    }
    return(chosenexercise);

}


function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function generateplan(form) {

    var mondaytime=form.mon.value;
    var tuesdaytime=form.tue.value;
    var wednesdaytime=form.wed.value;
    var thursdaytime=form.thu.value;
    var fridaytime =form.fri.value;
    var saturdaytime=form.sat.value;
    var sundaytime =form.sun.value;

    var exerciseoptions=form.elements['exercise[]'];
    var chosenexercises=[];
    for (var i=0, len=exerciseoptions.length; i<len; i++) {
        if (exerciseoptions[i].checked) {
            chosenexercises.push(exerciseoptions[i].value);
        }
    }

    if (mondaytime== "0") {
        mondayactivity=" have a rest.";
    } else { 
        mondayactivity=" do "+mondaytime+" of "+randomexercise(chosenexercises,mondaytime);
    }
    if (tuesdaytime== "0") {
        tuesdayactivity=" have a rest.";
    } else { 
        tuesdayactivity=" do "+tuesdaytime+" of "+randomexercise(chosenexercises,tuesdaytime);
    }
    if (wednesdaytime== "0") {
        wednesdayactivity=" have a rest.";
    } else { 
        wednesdayactivity=" do "+wednesdaytime+" of "+randomexercise(chosenexercises,wednesdaytime);
    }
    if (thursdaytime== "0") {
        thursdayactivity=" have a rest.";
    } else { 
        thursdayactivity=" do "+thursdaytime+" of "+randomexercise(chosenexercises,thursdaytime);
    }
    if (fridaytime== "0") {
        fridayactivity=" have a rest.";
    } else { 
        fridayactivity=" do "+fridaytime+" of "+randomexercise(chosenexercises,fridaytime);
    }
    if (saturdaytime== "0") {
        saturdayactivity=" have a rest.";
    } else if (saturdaytime=="Parkrun") {
        saturdayactivity=" it's Parkrun day!";
    } else { 
        saturdayactivity=" do "+saturdaytime+" of "+randomexercise(chosenexercises,saturdaytime);
    }
    if (sundaytime == "0") {
        sundayactivity=" have a rest.";
    } else { 
        sundayactivity=" do "+sundaytime+" of "+randomexercise(chosenexercises,sundaytime);
    }


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
