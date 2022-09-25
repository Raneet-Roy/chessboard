//                            <------PSEUDO CODE------>
// Step 1: there is an existing <div>, say "container".
// Step 2: create a for loop for the first 8 boxes in the first row on the chessboard.
// Step 3: create a <div>, say "box1". which will be called for 8 times in the for loop for completing the first row.
// Step 4: each box will have white and black colors alternatively . So we need an If state ment.
// Step 5: inside that if statement we need to apply the logic for %2=0 which implies even places .
// Step 6: If the index no. is even then it will have black else in the odd index it will have white in the first row.
// Step 7: Copy paste the whole for loop again .. but this time the colours will get changed in the first box of the second
//         row and vice versa.
// Step 8: Each time a new for loop is created , we need to create new <div>s and change thier names as box2, box3, box4... upto 8 times.        
// Step 9: For undergoing the step 7 we just need to change the if statement and set white in place of black and vice versa.
// Step 10: the 1st, 3rd, 5th and 7th rows have same patterns so just copy paste the same for loops for them. and each time we 
//         copy paste, we need to change the box names accordingly.
// Step 11: the 2nd, 4th, 6th and 8th rows have same patterns so just copy paste the same for loops for them.  and each time we 
//         copy paste, we need to change the box names accordingly.
// Step 12: append each row / child elements denoted as box1,box2,... in the container <div> .
// Step 13: Now if we run the code we will find nothing bcoz the heights and widths of the boxes are not given.
// Step 14: To undergo Step 13, we need to use grids in css and mention their aquired heights and widths.
// Step 15: We dont need to apply random values for width and height. just use repeat(8, 1fr) to have 8 equal columns which will 
//         automatically have their own specific widths and heights.        

const container = document.getElementById('container');

for(i = 1 ; i < 9 ; i++){
    var box1 = document.createElement('div');//onclick beside box 1 
    if(i % 2 == 0){
        box1.style.backgroundColor='black';// add event listener in place of black
    }
    else{
        box1.style.backgroundColor='white';
    }
    container.appendChild(box1);
}
for(i = 1 ; i < 9 ; i++){
    var box2 = document.createElement('div');
    if(i % 2 == 0){
        box2.style.backgroundColor='white';
    }
    else{
        box2.style.backgroundColor='black';
    }
    container.appendChild(box2);
}
for(i = 1 ; i < 9 ; i++){
    var box3 = document.createElement('div');
    if(i % 2 == 0){
        box3.style.backgroundColor='black';
    }
    else{
        box3.style.backgroundColor='white';
    }
    container.appendChild(box3);
}
for(i = 1 ; i < 9 ; i++){
    var box4 = document.createElement('div');
    if(i % 2 == 0){
        box4.style.backgroundColor='white';
    }
    else{
        box4.style.backgroundColor='black';
    }
    container.appendChild(box4);
}
for(i = 1 ; i < 9 ; i++){
    var box5 = document.createElement('div');
    if(i % 2 == 0){
        box5.style.backgroundColor='black';
    }
    else{
        box5.style.backgroundColor='white';
    }
    container.appendChild(box5);
}
for(i = 1 ; i < 9 ; i++){
    var box6 = document.createElement('div');
    if(i % 2 == 0){
        box6.style.backgroundColor='white';
    }
    else{
        box6.style.backgroundColor='black';
    }
    container.appendChild(box6);
}
for(i = 1 ; i < 9 ; i++){
    var box7 = document.createElement('div');
    if(i % 2 == 0){
        box7.style.backgroundColor='black';
    }
    else{
        box7.style.backgroundColor='white';
    }
    container.appendChild(box7);
}
for(i = 1 ; i < 9 ; i++){
    var box8 = document.createElement('div');
    if(i % 2 == 0){
        box8.style.backgroundColor='white';
    }
    else{
        box8.style.backgroundColor='black';
    }
    container.appendChild(box8);
}