"use strict";

/**
 * Created by hezhengjie on 2016/6/13.
 */
function show5() {
    if (!document.layers && !document.all) return;
    var Digital = new Date();
    var hours = Digital.getHours();
    var minutes = Digital.getMinutes();
    var seconds = Digital.getSeconds();
    var dn = "AM";
    if (hours > 12) {
        dn = "PM";
        hours = hours - 12;
    }if (hours == 0) hours = 12;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    //change font size here to your desire
    myclock = "<font size='5' face='Arial'><b><font size='1'>Current Time:</font></br>" + hours + ":" + minutes + ":" + seconds + " " + dn + "</b></font>";
    if (document.layers) {
        document.layers.liveclock.document.write(myclock);
        document.layers.liveclock.document.close();
    } else if (document.all) liveclock.innerHTML = myclock;
    setTimeout("show5()", 1000);
}