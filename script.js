
let arr = "";
let a = 1;
let option = 0;

document.getElementById("button1").addEventListener("click", function () {
    arr = "";
    document.getElementById("num1").innerHTML = arr;
});

document.getElementById("button2").addEventListener("click", function () {
    arr = arr.slice(0, arr.length - 1)
    document.getElementById("num1").innerHTML = arr;
    console.log("Hi");
});

var x = document.getElementsByClassName("button");

x[0].addEventListener("click", function () {
    arr = arr + "7";
    document.getElementById("num1").innerHTML = arr;
});

x[1].addEventListener("click", function () {
    arr = arr + "8";
    document.getElementById("num1").innerHTML = arr;
});

x[2].addEventListener("click", function () {
    arr = arr + "9";
    document.getElementById("num1").innerHTML = arr;
});

x[4].addEventListener("click", function () {
    arr = arr + "4";
    document.getElementById("num1").innerHTML = arr;
});
x[5].addEventListener("click", function () {
    arr = arr + "5";
    document.getElementById("num1").innerHTML = arr;
});

x[6].addEventListener("click", function () {
    arr = arr + "6";
    document.getElementById("num1").innerHTML = arr;
});

x[8].addEventListener("click", function () {
    arr = arr + "1";
    document.getElementById("num1").innerHTML = arr;
});

x[9].addEventListener("click", function () {
    arr = arr + "2";
    document.getElementById("num1").innerHTML = arr;
});
x[10].addEventListener("click", function () {
    arr = arr + "3";
    document.getElementById("num1").innerHTML = arr;
});
x[13].addEventListener("click", function () {
    arr = arr + "0";
    document.getElementById("num1").innerHTML = arr;
});
x[12].addEventListener("click", function () {
    arr = arr + ".";
    document.getElementById("num1").innerHTML = arr;
});


x[3].addEventListener("click", function () {
    arr += '/';
    option = 1;
    document.getElementById("num1").innerHTML = arr;
});

x[7].addEventListener("click", function () {
    arr += 'x';
    option = 2;
    document.getElementById("num1").innerHTML = arr;
});

x[11].addEventListener("click", function () {
    arr += '-';
    option = 3;
    document.getElementById("num1").innerHTML = arr;
});


x[14].addEventListener("click", function () {
    arr += '+';
    option = 4;
    document.getElementById("num1").innerHTML = arr;
});

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
    var total = 0;
    console.log(total);
    s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    console.log(s);
    total = (s[0]) / (s[1]);
    console.log(total);


    return total;

}

document.getElementById("buttonx").addEventListener("click", function () {
    {
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

});
