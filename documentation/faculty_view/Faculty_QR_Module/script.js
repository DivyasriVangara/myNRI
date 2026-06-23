let qr;
let countdown;
let changeQR;

function generateQR(){

    document.getElementById("qrcode").innerHTML="";

    let session=Math.random().toString(36).substring(2,10);

    new QRCode(document.getElementById("qrcode"),{

        text:"https://example.com/session="+session,

        width:250,

        height:250

    });

}

function startSession(){

    clearInterval(countdown);
    clearInterval(changeQR);

    generateQR();

    let time=120;

    document.getElementById("timer").innerHTML=
    "Session Remaining : "+time+" sec";

    countdown=setInterval(function(){

        time--;

        document.getElementById("timer").innerHTML=
        "Session Remaining : "+time+" sec";

        if(time<=0){

            clearInterval(countdown);
            clearInterval(changeQR);

            document.getElementById("qrcode").innerHTML=
            "<h2>Session Expired</h2>";

            document.getElementById("timer").innerHTML="";

        }

    },1000);

    changeQR=setInterval(function(){

        generateQR();

    },30000);

}