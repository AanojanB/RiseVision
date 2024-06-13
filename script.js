window.onload = function(){        
    var currentDay = new Date().getDate(); //Gets the day number
    var current = new Date(); //Gets the current date and time
    var month = new Date().getMonth(); //Gets the current month

    //Creates the formating for another variable make the day number into days of the week
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 
    
    //setInterval will update the function in it every 750ms
    //function will contain the Id of the date which is formatted to be weekday, month, day number, year, and time with hour:min
    setInterval(function(){ document.getElementById('time').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric", year:"numeric",hour:"2-digit", minute:"2-digit"})}, 500);

    //Variable that adds 14 days to the current day to determine if its late start
    var lateStartCheck = new Date(new Date(current).setDate(current.getDate()+ 14))
    //Variable that gets the month of lateStartCheck month
    var lateMonth = new Date(lateStartCheck).getMonth();

    //Gets the weekday of the lateStartCheck variable
    var week = days[new Date(lateStartCheck).getDay()];

    //Variable that is intialized and assigned value to get into if statement
    var schedule = "Late Start Day";

    //current day number % 2 will either one or zero
    //One equals day 1 and 0 equal day 2
    if (currentDay % 2 == 1){
        var schoolNum = "Day: 1";
    }
    else{
        var schoolNum = "Day: 2";
    }
    //Makes the variable useable in html
    document.getElementById('dayNum').innerHTML = schoolNum;

    //December special case due to  winter break
    if((month == 12) & (lateStartCheck > 25)&& (week == "Wednesday")){
        schedule = "Late Start Day";
    }
    //Special case exams
    else if ((month == 6) || (month == 1)){
        schedule = "Regular Day";
    }
    //Late Start will meet the conditions
    else if ((week == "Wednesday")&(lateMonth == month + 1)){
        schedule = "Late Start Day";
    }
    //Has to be wednesday to be a late start
    else if ((week != "Wednesday")){
        schedule = "Regular Day ";
    }
    
    document.getElementById('sched').innerHTML = schedule;
}


//Weather script embed from https://weatherwidget.io/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');