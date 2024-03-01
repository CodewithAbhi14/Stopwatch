let [sec, min, hr] = [0,0,0];
let display = document.getElementById("display");
let timer;

function startwatch(){
    sec++;
    if(sec == 60)
    {
        min++;
        sec=0;
    }
    if(min == 60)
    {
        hr++;
        min=0;
    }

    if(hr > 23){
        clearInterval(timer);
    }

    let h = hr < 10 ? "0"+hr : hr;
    let m = min < 10 ? "0"+min : min;
    let s = sec < 10 ? "0"+sec : sec;

    display.innerHTML = h+":"+m+":"+s;
}

function starttime(){
    timer = setInterval(startwatch,1000);

}

function stoptime(){
    clearInterval(timer);
}

function resettime(){
    clearInterval(timer);
    [hr, min, sec] = [0,0,0];
    display.innerHTML = "00:00:00";
}

