// function 1: In một bảng số từ 1-100 thỏa mãn điều kiện
var func1 = function() {
    var table ="";
    var count = 1;
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
            if(count <= 9) {
                table += count.toString() + "  ";
            } else {
                table += count.toString() + " ";
            }
            count++;
        }
        table += "\n";
    }
    console.log(table);
}

// function 2: Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số
// nguyên tố trong mảng
var func2 = function(arr) {
    var result = [];
    arr.forEach(element => {
        var count = 0;
        var eleAbs = Math.abs(element);
        for(var i = 1; i <=  eleAbs; i++) {
            if(eleAbs % i === 0) {
                count ++;
            }
        }
        if(count === 2) {
            result.push(element);
        }
    });
    console.log(result);
}

// function 3: Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
var func3 = function(n) {
    var S = 0;
    for(var i = 2; i <= n; i++) {
        S += i;
    }
    S += 2*n;
    console.log("Tổng S là:", S);
}

// function 4: Viết function nhận vào tham số n, tính số lượng ước số của n.
var func4 = function(n) {
    if(n > 0) {
        var divisor = [];
        for(var i = 1; i <= n; i++) {
            if(n % i === 0) {
                divisor.push(i);
            }
        }
        console.log("Ước số của n là:", divisor);
    } else console.log("Tham số n phải là số nguyên dương");
}

// function 5: Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn
// phím.Vd :1234 => 4321
var func5 = function(num) {
    if(num > 0) {
        var result = "";
        for(var i = num.length - 1; i >= 0; i--) {
            result += num[i];
        }
        console.log("Kết quả sau khi đảo ngược là:", num ,"=>", result);
    } else console.log("Tham số num phải là số nguyên dương");
} 

// function 6: Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100
var func6 = function() {
    var S = 0;
    for(var i = 1; i <= 100; i++) {
        if((S+=i) > 100) {
            console.log("Số nguyên dương lớn nhất thỏa mãn là:", i-1);
            console.log("Tổng thỏa mãn là:", S - i);
            break;
        }
    }
}

// function 7: Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó.
var func7 = function(n) {
    var result = "";
    for(var i = 0; i <= 10; i++) {
        result += "\n" + n + " x " + i + " = " + n*i;
        // console.log(result);
    }
    console.log(`Bảng cửu chương của ${n} là:`, result);
}

// function 8:Viết hàm chia bài cho 4 người chơi
var func8 = function(cards) {
    var players = [[],[],[],[]];
    var result = "Kết quả: \n";
    for(var j = 0; j < cards.length; j++) {
        players[j%4].push(cards[j]);
    }
    for(var i = 0; i < players.length; i++) {
        result += `player${i+1}` + " = " + players[i] + "\n";
    }
    console.log(result);
}

// function 9: Tìm số gà, số chó khi số tổng số con là m và tổng số chân là n
var func9 = function(m,n) {
    var check = false;
    for(var i = 1; i < m; i++) {
        if(2*i + 4*(m-i) === n) {
            console.log("Số gà là:", i, ", Số chó là:", m - i);
            check = true;
            break;
        }
    }
    if(check === false) {
        console.log("Không tồn tại số gà và chó thỏa mãn điều kiện");
    }
}

// function 10: Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút
/**
 * Guideline:
 * -    1 phút  : kim phút quay được 360/60 = 6 độ
 * -    1 giờ   : kim giờ quay được 360/12 = 30 độ
 * -    1 phút  : kim giờ quay được 30/60 = 0.5 độ
 */
var func10 = function(hour,min) {
    var hourDeg = 0;
    var minDeg = 0;
    var result = 0;
    // số đo góc của kim giờ
    hourDeg = (hour % 12) * 30 + min*0.5;
    // số đo góc của kim phút
    minDeg = min * 6;
    result = Math.abs(hourDeg - minDeg);
    console.log(`Góc lệch giữa kim giờ và kim phút của ${hour}:${min} là:`, result, "độ");
}

// main: call all function to show log
function main() {
    var arr = [-18, 23, 22, 14, 19, -6, -3, 17, -7];
    var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"];

    console.log("Exercise 1");
    func1();
    console.log("Exercise 2");
    func2(arr);
    console.log("Exercise 3");
    func3(5);
    console.log("Exercise 4");
    func4(18);
    console.log("Exercise 5");
    func5("72639");
    console.log("Exercise 6");
    func6();
    console.log("Exercise 7");
    func7(4);
    console.log("Exercise 8");
    func8(cards);
    console.log("Exercise 9");
    func9(45,120);
    console.log("Exercise 10");
    func10(6,10);
}
main();