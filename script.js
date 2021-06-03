
let arr = "";
let a = 1;
let option = 0;

function myfunction() {
    arr = "";
    document.getElementById("num1").innerHTML = arr;
}

function myfunctiond() {
    arr = arr.slice(0, arr.length - 1)
    document.getElementById("num1").innerHTML = arr;
}

function myfunction7() {
    arr = arr + "7";
    document.getElementById("num1").innerHTML = arr;
}

function myfunction1() {
    arr = arr + '1';
    document.getElementById("num1").innerHTML = arr;
}

function myfunction2() {
    arr = arr + '2';
    document.getElementById("num1").innerHTML = arr;
}

function myfunction3() {
    arr = arr + '3';
    document.getElementById("num1").innerHTML = arr;
}

function myfunction4() {
    arr = arr + '4';
    document.getElementById("num1").innerHTML = arr;
}

function myfunction5() {
    arr = arr + '5';
    document.getElementById("num1").innerHTML = arr;
}

function myfunction6() {
    arr = arr + '6';
    document.getElementById("num1").innerHTML = arr;
}

function myfunction8() {
    arr = arr + '8';
    document.getElementById("num1").innerHTML = arr;
}
function myfunction9() {
    arr = arr + '9';
    document.getElementById("num1").innerHTML = arr;
}
function myfunction0() {
    arr = arr + '0';
    document.getElementById("num1").innerHTML = arr;
}

function myfunctiondot() {
    arr = arr
    document.getElementById("num1").innerHTML = arr;
}


function myfunctionslash() {
    arr += '/';
    option = 1;
    document.getElementById("num1").innerHTML = arr;


}

function myfunctionx() {
    arr += 'x';
    option = 2;
    document.getElementById("num1").innerHTML = arr;

}

function myfunctionminus() {
    arr += "-";
    option = 3;
    document.getElementById("num1").innerHTML = arr;

}

function myfunctionplus() {
    arr += "+";
    option = 4;
    document.getElementById("num1").innerHTML = arr;

}

function addbits(s) {
    var total = 0,
        s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

    while (s.length) {
        total += parseFloat(s.shift());
    }
    return total;
}

function multiple(s) {
    var total = 1;
    console.log(total);
    s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    console.log(s);
    while (s.length) {
        total *= parseFloat(s.shift());
        console.log(total);

    }
    return total;

}

function divide(s) {
    var total = parseFloat(s);
    console.log(total);
    s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    console.log(s);
    while (s.length) {
        total = (s[0] - 0) / (s[1] - 0);
        console.log(total);

    }
    return total;

}

function myfunctionequal() {
    if (option == 4) {
        arr = addbits(arr);
        document.getElementById("num1").innerHTML = arr;
    }

    if (option == 3) {
        arr = addbits(arr);
        document.getElementById("num1").innerHTML = arr;
    }

    if (option == 2) {
        arr = multiple(arr);
        document.getElementById("num1").innerHTML = arr;
    }

    if (option == 1) {
        arr = divide(arr);
        document.getElementById("num1").innerHTML = arr;
    }
}
