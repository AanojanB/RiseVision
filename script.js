window.onload = function(){        
    var daysOfMonth = new Date().getDate();
    var current = new Date();
    var month = new Date().getMonth();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    setInterval(function(){ document.getElementById('time').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric", year:"numeric",hour:"2-digit", minute:"2-digit", second:"2-digit"})}, 750);

    var lateStartCheck = new Date(new Date(current).setDate(current.getDate()+ 14))
    var lateMonth = new Date(lateStartCheck).getMonth();
    var lateDay = new Date(lateStartCheck).getDay();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var wek = days[new Date(lateStartCheck).getDay()];

    var schedule = "Late Start Day";

    if (daysOfMonth % 2 == 1){
        var schoolNum = "Day: 1";
    }
    else{
        var schoolNum = "Day: 2";
    }
        document.getElementById('dayNum').innerHTML = schoolNum;

    if((month = 12) & (lateStartCheck > 25)& (wek == "Wednesday")){
        schedule = "Regular Day";
    }
    else if ((month == 6) || (month == 1)){
        schedule = "Regular Day";
    }
    else if ((wek == "Wednesday")&(lateMonth == month + 1)){
        schedule = "Late Start Day";
    }
    else{
        schedule = "Regular Day";
    }

    document.getElementById('sched').innerHTML = schedule
}

//Weather script embed from https://weatherwidget.io/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');