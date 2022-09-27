//                            <------PSEUDO CODE------>
// Step 1: Create a center tag to center all the elements
// Step 2: Create a table element
// Step 3: Create a row
// Step 4: Create a box
// Step 5: If the sum of box coordinates is even then color the box white
// Step 6: Create a class attribute for all white cells
// Step 7: If the sum of box coordinates is odd then color the box black
// Step 8: Create a class attribute for all black boxes        
// Step 9: Append the box to its row
// Step 10: Append the row
// Step 11: Modifying table attribute properties        

var center = document.createElement('center');
 
var ChessTable = document.createElement('table');
for (var i = 0; i < 8; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            td.setAttribute('class', 'box whitebox');
            tr.appendChild(td);
        }
        else {
            td.setAttribute('class', 'box blackbox');
            tr.appendChild(td);
        }
    }
    ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

ChessTable.setAttribute('cellspacing', '0');
ChessTable.setAttribute('width', '270px');
