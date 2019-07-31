var lastSumm = 0;
var countPlus = false;
var countMinus = false;
var countMulty = false;
var countDiv = false;
var i;
var doubleClick = 0;




function addTextToInput(anElement) {


    doubleClick = 0;
    let text = document.getElementById('title1').value;



    if (text == '0.') {
        text += anElement.innerText;
        document.getElementById('title1').value = text;
        i++;
    } else if (text == 0 || i == 0) {
        text = anElement.innerText;
        document.getElementById('title1').value = text;
        i++;
    } else {
        text += anElement.innerText;
        document.getElementById('title1').value = text;
        i++;
    }
    if (text.length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (text.length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (text.length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };


};

function cleanAll() {
    doubleClick = 0
    document.getElementById('title1').value = 0;
    lastSumm = 0;


    document.getElementById('title1').style.fontSize = '55px';

};

function addTextToInputPoint() {

    doubleClick = 0;
    var text = document.getElementById('title1').value;

    if (text.length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (text.length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (text.length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };

    if (i == 0) {
        document.getElementById('title1').value = '0.';
        i++;
    } else if (text.indexOf('.') > -1) {
        document.getElementById('title1').value = text;
        i++;
    } else {
        text += ".";
        document.getElementById('title1').value = text;
        i++;
    }


};

function clean() {
    doubleClick = 0;
    var text = document.getElementById('title1').value;



    var check = text.replace(/[-,]/g, '');
    if (check.length > 1) {
        var newText = text.slice(0, -1);
        document.getElementById('title1').value = newText;


    } else {
        document.getElementById('title1').value = "0";
    }
    if (text.length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (text.length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (text.length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };
};

function Percent() {

    doubleClick = 0;
    var text = document.getElementById('title1').value;

    if (text.length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (text.length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (text.length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };

    var newText = +text / 100;
    document.getElementById('title1').value = newText;


};

function calcSumm() {
    doubleClick += 1;
    var text = document.getElementById('title1').value;

    if (doubleClick > 1) {
        countPlus = true;
        countMinus = false;
        countMulty = false;
        countDiv = false;
    } else {

        if (lastSumm == 0 || ((countPlus === false) && (countMinus === false) && (countMulty === false) && (countDiv === false))) {
            lastSumm = document.getElementById('title1').value
        }
        if (countPlus) {
            lastSumm = +document.getElementById('title1').value + +lastSumm;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMinus) {
            lastSumm = lastSumm - +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMulty) {
            lastSumm = +document.getElementById('title1').value * lastSumm;

            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countDiv) {
            lastSumm = lastSumm / +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;



        }
        countPlus = true;
        countMinus = false;
        countMulty = false;
        countDiv = false;
    };
    i = 0;
    if (lastSumm.toString().length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (lastSumm.toString().length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (lastSumm.toString().length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };
};

function calcSubtraction() {
    doubleClick += 1;
    var text = document.getElementById('title1').value;


    if (doubleClick > 1) {
        countPlus = false;
        countMinus = true;
        countMulty = false;
        countDiv = false;
    } else {
        if (lastSumm == 0 || ((countPlus === false) && (countMinus === false) && (countMulty === false) && (countDiv === false))) {
            lastSumm = document.getElementById('title1').value
        }

        if (countPlus) {
            lastSumm = +document.getElementById('title1').value + +lastSumm;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMinus) {
            lastSumm = lastSumm - +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMulty) {
            lastSumm = +document.getElementById('title1').value * lastSumm;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countDiv) {
            lastSumm = lastSumm / +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;



        }
        countPlus = false;
        countMinus = true;
        countMulty = false;
        countDiv = false;
    }
    i = 0;
    if (lastSumm.toString().length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (lastSumm.toString().length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (lastSumm.toString().length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };
};

function calcDivide() {
    doubleClick += 1;
    var text = document.getElementById('title1').value;


    if (doubleClick > 1) {
        countPlus = false;
        countMinus = false;
        countMulty = false;
        countDiv = true;
    } else {
        if (lastSumm == 0 || ((countPlus === false) && (countMinus === false) && (countMulty === false) && (countDiv === false))) {
            lastSumm = document.getElementById('title1').value
        }

        if (countPlus) {
            lastSumm = +document.getElementById('title1').value + +lastSumm;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMinus) {
            lastSumm = lastSumm - +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMulty) {
            lastSumm = +document.getElementById('title1').value * lastSumm;

            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countDiv) {
            lastSumm = lastSumm / +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;



        }
        countPlus = false;
        countMinus = false;
        countMulty = false;
        countDiv = true;
    }
    i = 0;
    if (lastSumm.toString().length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (lastSumm.toString().length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (lastSumm.toString().length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };
};

function calcMultiply() {
    doubleClick += 1;
    var text = document.getElementById('title1').value;



    if (doubleClick > 1) {
        countPlus = false;
        countMinus = false;
        countMulty = true;
        countDiv = false;
    } else {
        if (lastSumm == 0 || ((countPlus === false) && (countMinus === false) && (countMulty === false) && (countDiv === false))) {
            lastSumm = document.getElementById('title1').value
        }


        if (countPlus) {
            lastSumm = +document.getElementById('title1').value + +lastSumm;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMinus) {
            lastSumm = lastSumm - +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countMulty) {
            lastSumm = +document.getElementById('title1').value * lastSumm;

            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;

        } else
        if (countDiv) {
            lastSumm = lastSumm / +document.getElementById('title1').value;
            if (lastSumm.toString.length > 13) {
                document.getElementById('title1').style.fontSize = '15px';
            } else if (lastSumm.toString.length > 8) {
                document.getElementById('title1').style.fontSize = '25px';
            } else if (lastSumm.toString.length > 6) {
                document.getElementById('title1').style.fontSize = '45px';
            } else {
                document.getElementById('title1').style.fontSize = '55px';
            };
            document.getElementById('title1').value = lastSumm;



        }
        countPlus = false;
        countMinus = false;
        countMulty = true;
        countDiv = false;
    };
    i = 0;
    if (lastSumm.toString().length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (lastSumm.toString().length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (lastSumm.toString().length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };
};

function calcResult() {
    doubleClick = 0;
    var text = document.getElementById('title1').value;


    if (lastSumm == 0) {
        lastSumm = document.getElementById('title1').value
    }
    if (countPlus) {
        lastSumm = +document.getElementById('title1').value + +lastSumm;
        if (lastSumm.toString.length > 13) {
            document.getElementById('title1').style.fontSize = '15px';
        } else if (lastSumm.toString.length > 8) {
            document.getElementById('title1').style.fontSize = '25px';
        } else if (lastSumm.toString.length > 6) {
            document.getElementById('title1').style.fontSize = '45px';
        } else {
            document.getElementById('title1').style.fontSize = '55px';
        };
        document.getElementById('title1').value = lastSumm;

    } else
    if (countMinus) {
        lastSumm = lastSumm - +document.getElementById('title1').value;
        if (lastSumm.toString.length > 13) {
            document.getElementById('title1').style.fontSize = '15px';
        } else if (lastSumm.toString.length > 8) {
            document.getElementById('title1').style.fontSize = '25px';
        } else if (lastSumm.toString.length > 6) {
            document.getElementById('title1').style.fontSize = '45px';
        } else {
            document.getElementById('title1').style.fontSize = '55px';
        };
        document.getElementById('title1').value = lastSumm;

    } else
    if (countMulty) {
        lastSumm = +document.getElementById('title1').value * lastSumm;

        if (lastSumm.toString.length > 13) {
            document.getElementById('title1').style.fontSize = '15px';
        } else if (lastSumm.toString.length > 8) {
            document.getElementById('title1').style.fontSize = '25px';
        } else if (lastSumm.toString.length > 6) {
            document.getElementById('title1').style.fontSize = '45px';
        } else {
            document.getElementById('title1').style.fontSize = '55px';
        };
        document.getElementById('title1').value = lastSumm;

    } else
    if (countDiv) {
        lastSumm = lastSumm / +document.getElementById('title1').value;
        if (lastSumm.toString.length > 13) {
            document.getElementById('title1').style.fontSize = '15px';
        } else if (lastSumm.toString.length > 8) {
            document.getElementById('title1').style.fontSize = '25px';
        } else if (lastSumm.toString.length > 6) {
            document.getElementById('title1').style.fontSize = '45px';
        } else {
            document.getElementById('title1').style.fontSize = '55px';
        };
        document.getElementById('title1').value = lastSumm;



    }
    countPlus = false;
    countMinus = false;
    countMulty = false;
    countDiv = false;

    i = 0;
    if (lastSumm.toString().length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (lastSumm.toString().length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (lastSumm.toString().length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };

};

function ChangeSign() {
    var text = document.getElementById('title1').value;
    if (text.length > 13) {
        document.getElementById('title1').style.fontSize = '15px';
    } else if (text.length > 8) {
        document.getElementById('title1').style.fontSize = '25px';
    } else if (text.length > 6) {
        document.getElementById('title1').style.fontSize = '45px';
    } else {
        document.getElementById('title1').style.fontSize = '55px';
    };
    if (text != 0) {
        if (text.indexOf('-') > -1) {
            text = text.substring(1);
            document.getElementById('title1').value = text;
        } else {
            text = '-' + text;
            document.getElementById('title1').value = text;
        }
    }
}