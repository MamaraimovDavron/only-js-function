let showNumber = function (number){
    if(number >= 10 && number <= 99){
        let onlik = Math.floor(number / 10);
        let birlik = number % 10;

        let a = "";
        let b = "";

        switch(onlik){
            case 1:
        a += "O`n";
        break;

        case 2:
            a += "Yigirma";
            break;

        case 3:
            a += "O`ttiz";
            break;

        case 4:
            a += "Qirq";
            break;

        case 5:
            a += "Ellik";
            break;

        case 6:
            a += "Oltmish";
            break;

        case 7:
            a += "Yetmish";
            break;

        case 8:
            a += "Sakson";
            break;

        case 9:
            a += "To`qson";
            break;
        }

        switch(birlik){
            case 1:
                b += "bir";
                break;
        
                case 2:
                b += "ikki";
                break;
        
                case 3:
                b += "uch";
                break;
        
                case 4:
                b += "to`rt";
                break;
        
                case 5:
                b += "besh";
                break;
        
                case 6:
                b += "olti";
                break;
        
                case 7:
                b += "yetti";
                break;
        
                case 8:
                b += "sakkiz";
                break;
        
                case 9:
                b += "to`qqiz";
                break;
        
                case 0:
                    b += "";
                    break;
        }
        console.log(a + " " + b);
        }
        
        else {
            console.log("Kiritilgan son ikki xonali emas!")
        }
}

showNumber(15);