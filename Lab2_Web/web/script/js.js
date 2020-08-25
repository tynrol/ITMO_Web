var isDefaultGraphic;

var Xarray = [-5, -4, -3, -2, -1, 0, 1, 2, 3];

function init() {
    createGraph('canvas', r.value);
}

function isXcorrect(x) {
    return isNumber(x) && Xarray.includes(Number(x));
}
function isXbutFloat(x) {
    var xFloat = parseFloat(x.replace(/,/, '.'));
    return isNumber(x.replace(/,/, '.')) && xFloat >= -5 && xFloat <= 5;
}

function isYcorrect(y) {
    var yFloat = parseFloat(y.replace(/,/, '.'));
    return isNumber(y.replace(/,/, '.')) && yFloat >= -5 && yFloat <= 5;
}

function isRcorrect(r) {
    var rFloat = parseFloat(r.replace(/,/, '.'));
    return isNumber(r.replace(/,/, '.')) && rFloat >= 1 && rFloat <= 4;
}

function clickGraph(r) {
    var canvas = document.getElementById("canvas");
    var rFloat = parseFloat(r.replace(/,/, '.').trim());
    if (isRcorrect(rFloat.toString())) {
        if (isDefaultGraphic) {
            createGraph("canvas", rFloat);
            var canvas = document.getElementById("canvas"), context = canvas.getContext("2d");
            context.strokeStyle = "#000000";
            context.fillStyle = "#ff0014";
            context.font = '20px Arial';
            context.fillText('You have to set ', 20, 50);
            context.fillText('R parameter', 20, 70);
            return;
        }
        var canvasPoint = canvas.getBoundingClientRect();
        var margLeft = canvasPoint.left;
        var margTop = canvasPoint.top;
        var event = window.event;
        var x = event.clientX - margLeft;
        var y = event.clientY - margTop;


        x_h.value = (x - 200) / 180 * rFloat;
        var x_h_1 = x_h.value;
        y_h.value = (-y + 200) / 180 * rFloat;
        var y_h_1 = y_h.value;
        r_h.value = rFloat;
        var r_h_1 = r_h.value;
        //n_h.value ++;
        //alert(getHit(x_h_1, y_h_1, r_h_1));
        //document.hidden.submit();
        point((x - 200) / 180 * rFloat, (-y + 200) / 180 * rFloat, rFloat, getHit(x_h_1, y_h_1, r_h_1));
    } else {
        var element = document.getElementById("canvas");
        element.style.background("#ff0002");
    }
}

function getHit(x, y, r)
{
    var client;
    var data;
    var url_action="control?action=gothit";
    var g_hit;
    client=new XMLHttpRequest();
    // client.onreadystatechange=function()
    // {
    //
    //     if (client.readyState === XMLHttpRequest.DONE && client.status === 200) {
    //         g_hit = client.responseText;
    //         return g_hit;
    //
    //     }
    // };
    data="x_h="+x+"&y_h="+y+"&r_h="+r;
    client.open("POST",url_action, false);
    client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    client.send(data);
    return client.responseText;
}

function point(x, y, r, hit) {
    var color = 'red';
    if (hit.trim() === "true") {
        color = 'lime';
    }
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(Math.round(200 + ((x / r) * 180)) - 3, Math.round(200 - ((y / r) * 180)) - 3, 3, 0, 2 * Math.PI);
    context.closePath();
    context.strokeStyle = 'black';
    context.fillStyle = color;
    context.fill();
    context.stroke();
}

function checkX(x) {
    if(!isXcorrect(x.value)){
        return false;
    }
    x_out.value = x.value;
    return true;
}

function checkY(y) {
    var element = document.getElementById("y");
    if (!isYcorrect(y.value)) {
        y.focus;
        element.style.background = "#ff000d";
        return false;
    }
    element.style.backgroundColor = "#E0FFFF";
    var yFloat = parseFloat(y.value.replace(/,/, '.'));
    y_out.value = yFloat;
    return true;
}

function checkR(r) {
    var element = document.getElementById("r");
    var rFloat = parseFloat(r.value.replace(/,/, '.'));
    if (!isRcorrect(r.value)) {
        r.focus;
        element.style.background = "#ff000d";
        createGraph("canvas", 0);
        return false;
    } else {
        element.style.backgroundColor = "#E0FFFF";
        if (!isNaN(r.value)) {
            createGraph("canvas", r.value);
        } else {
            createGraph("canvas", rFloat);
        }
        var rFloat = parseFloat(r.value.replace(/,/, '.'));
        r_out.value = rFloat;
        return true;
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

function createGraph(id, r) {
// r = 0;
    if (r === 0 || r === '_') {
        isDefaultGraphic = true;
        r = 1;
    } else {
        isDefaultGraphic = false;
    }
    var canvas = document.getElementById(id), context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height)

// rectangle
    context.beginPath();
    context.rect(20, 20, 180, 180);
    context.closePath();
    context.strokeStyle = "#F9FF00";
    context.fillStyle = "#F9FF00";
    context.fill();
    context.stroke();

// sector
    context.beginPath();
    context.moveTo(200, 200);
    context.arc(200, 200, 180, Math.PI / 2, Math.PI, false);
    context.closePath();
    context.strokeStyle = "#F9FF00";
    context.fillStyle = "#F9FF00";
    context.fill();
    context.stroke();

// triangle
    context.beginPath();
    context.moveTo(200, 200);
    context.lineTo(290, 200);
    context.lineTo(200, 110);
    context.lineTo(200, 200);
    context.closePath();
    context.strokeStyle = "#F9FF00";
    context.fillStyle = "#F9FF00";
    context.fill();
    context.stroke();

    // axes
    context.beginPath();
    context.font = "10px Verdana";
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.moveTo(200, 0);
    context.lineTo(200, 400);
    context.moveTo(200, 0);
    context.lineTo(195, 10);
    context.moveTo(200, 0);
    context.lineTo(205, 10);
    context.fillText("Y", 210, 10);
    context.moveTo(0, 200);
    context.lineTo(400, 200);
    context.moveTo(400, 200);
    context.lineTo(390, 195);
    context.moveTo(400, 200);
    context.lineTo(390, 205);
    context.fillText("X", 390, 190);

    // Y parts
    context.moveTo(195, 20);
    context.lineTo(205, 20);
    context.fillText(isDefaultGraphic ? 'R' : String(r), 185, 20);
    context.moveTo(195, 110);
    context.lineTo(205, 110);
    context.fillText(isDefaultGraphic ? 'R/2' : String(r / 2), 190, 100);
    context.moveTo(195, 290);
    context.lineTo(205, 290);
    context.fillText(isDefaultGraphic ? '-R/2' : String(-(r / 2)), 185, 280);
    context.moveTo(195, 380);
    context.lineTo(205, 380);
    context.fillText(isDefaultGraphic ? '-R' : String(-r), 185, 370);

    // X parts
    context.moveTo(20, 195);
    context.lineTo(20, 205);
    context.fillText(isDefaultGraphic ? '-R' : String(-r), 15, 190);
    context.moveTo(110, 195);
    context.lineTo(110, 205);
    context.fillText(isDefaultGraphic ? '-R/2' : String(-(r / 2)), 95, 190);
    context.moveTo(290, 195);
    context.lineTo(290, 205);
    context.fillText(isDefaultGraphic ? 'R/2' : String(r / 2), 280, 190);
    context.moveTo(380, 195);
    context.lineTo(380, 205);
    context.fillText(isDefaultGraphic ? 'R' : String(r), 375, 190);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();
}

