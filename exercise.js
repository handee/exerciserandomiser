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
        mondayactivity="Nothing";
    } else { 
        mondayactivity=randomexercise(chosenexercises,mondaytime);
    }
    if (tuesdaytime== "0") {
        tuesdayactivity="Nothing";
    } else { 
        tuesdayactivity=randomexercise(chosenexercises,tuesdaytime);
    }
    if (wednesdaytime== "0") {
        wednesdayactivity="Nothing";
    } else { 
        wednesdayactivity=randomexercise(chosenexercises,wednesdaytime);
    }
    if (thursdaytime== "0") {
        thursdayactivity="Nothing";
    } else { 
        thursdayactivity=randomexercise(chosenexercises,thursdaytime);
    }
    if (fridaytime== "0") {
        fridayactivity="Nothing";
    } else { 
        fridayactivity=randomexercise(chosenexercises,fridaytime);
    }
    if (saturdaytime== "0") {
        saturdayactivity="Nothing";
    } else if (saturdaytime=="Parkrun") {
        saturdayactivity="Parkrun";
    } else { 
        saturdayactivity=randomexercise(chosenexercises,saturdaytime);
    }
    if (sundaytime == "0") {
        sundayactivity="Nothing";
    } else { 
        sundayactivity=randomexercise(chosenexercises,sundaytime);
    }


    var x=document.getElementById("plan");

    var output="Plan:<br>";
    output=output+" on Monday, do "+mondaytime+" of "+mondayactivity+"<br>";
    output=output+" on Tuesday, do "+tuesdaytime+" of "+tuesdayactivity+"<br>";
    output=output+" on Wednesday, do "+wednesdaytime+" of "+wednesdayactivity+"<br>";
    output=output+" on Thursday, do "+thursdaytime+" of "+thursdayactivity+"<br>";
    output=output+" on Friday, do "+fridaytime+" of "+fridayactivity+"<br>";
    if (saturdaytime==="Parkrun") {
            output=output+" on Saturday, it's Parkrun day! <br>";
    } else {
	    output=output+" on Saturday, do "+saturdaytime+" of "+saturdayactivity+"<br>";
    }
    output=output+" on Sunday, do "+sundaytime+" of "+sundayactivity+"<br>";
    x.innerHTML=output;

}
