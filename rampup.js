// var image = document.getElementbyID("chapel");
// function getsumpixel(nameofimage, x, y) {
//     var theimage = new Simpleimage(nameofimage);
//     var redNumber = theimage.getRed(x, y);
//     var greenNumber = theimage.getGreen(x, y);
//     var blueNumber=theimage.getBlue(x,y);
//     return redNumber+greenNumber+blueNumber;

// }

// getsumpixel(chapel.png,100,100);
// console.log(image);

// part 2

// // var number1=7;
// // var number2=5;
// // var deger=Math.pow(number1,number2);
// // document.write(deger);
// part 3
// // var mod=number1 % number2;
// // document.write(mod);
// part 4
// // let isim="Aydan";
// // document.write(isim);
// // if(true){
// //     let isim="Antigue";
// //     document.write(isim);
// // }
// // document.write(isim);
// part 5
// // var isim=prompt("Isim?");
// // document.write("welcome "+ isim);
// part 6
// // var text= "Ilearned";
// // // document.getElementById("inner").innerHTML=text;
// part 7
// // var wspace=text.repeat(5); //trim() slice()
// // document.write(wspace);
// part 8
// // var number=true;
// // document.write(typeof(number));
// // var change=Number(number);
// // document.write(typeof(change));
// part 9
// // var number="structure Is is IS more cond hdje dhednnd";
// // var solut=number.includes("more", 20);
// // // document.write(solut);
// part 10
// // var text="Learn Js and js is awesome";
// // var sol=text.replace(/js/gi, "css");
// // document.write(sol);
// part 11
// // var number=prompt("Give me number");
// // if(number%2==0){
// //     document.write("This is even number")
// // }
// // else{
// //     document.write("This  is odd number");
// // }
// part 12
// // var message = prompt("Exam result");
// // var result=(message>51) ? "passed": "failed";
// // document.write(result);
// part 13
// // try {
// //     var number="5"
// //    document.write(n)
// // }
// // catch( error){
// //     document.getElementById("inner").innerHTML = error;
// // }
// part 14
// function trycatchfunc() {
//     let input = document.getElementById("myinput").value
//     try {
//         if (isNaN(input)) {
//             throw " Please write down number";
//         }

//         else if (input == "") {
//             throw `Dont miss value`;
//         }
//     }
//     catch (error) {
//         document.getElementById("inner").innerHTML = error;
//     }

//     finally {
//         document.getElementById("myinput").value = "";
//     }
// };
// part 15
// try{

// var sayi = prompt("Faktorial");
// var result = 1;

// for (var i = 1; i <= sayi; i++) {
//     result *= i;
// }
// document.write(result);

// }

// catch (error) {
//             document.getElementById("inner").innerHTML = error;
//         }

// part 16
// let x = 10;

// do
// {
//     document.writeln (x);
//     x+=2;
// }

// while(x<=20);
// part 17

// for(i=1; i<100; i++) {

//     if(i%7==0){
//         continue;
//     }
//     document.writeln(i);

// }

// part 18 Son elementin indexini bulmak icin
// let cities=["Baku","Istanbul","Germany","Dubai"];
// document.write(cities[cities.length-1]);

// part 19 alfabetik sirayla
// let cities=["Baku","Istanbul","Germany","Dubai"];
// console.log(cities.sort());
// document.getElementById("inner").innerHTML=cities;

// part 20
let sayi = [2, 9, 1, 14, 11, 10, 19, 8, 500];

sayi.sort(function (a, b) {
    if (a < b) {
        return a-b;
    }
})

document.write(sayi);
