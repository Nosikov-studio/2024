class Cell {
	constructor(rowIndex, columnIndex, cellWidth){
		this.i=rowIndex;
		this.j=columnIndex;
		this.w=cellWidth;
	}
	
	show() {
		
		let x=this.j*this.w;
		let y=this.i*this.w;
		rect(x, y, this.w, this.w);
		
		stroke('red');
	}
	
}

class Grid {
  
  constructor(rows, cols, cellWidth) {
    this.flattenArray = [];
    this.rows = rows;
    this.cols = cols;
    this.stack = [];
    
    for(let i=0; i<rows; i++) {
      for (let j=0; j<cols; j++) {
        let cell = new Cell(i, j, cellWidth);
        this.flattenArray.push(cell);  
      }
    }
    
    this.currentCell = this.flattenArray[0];
    this.currentCell.isVisited = true;
    this.stack.push(this.currentCell);
  }
  
  show() {
    
    for (let cell of this.flattenArray) {
      cell.show();
    }
    
  }
  
  
  
}

let grid;

function setup() {
  
  createCanvas(400, 400);
  
  let w=40;
  grid= new Grid( floor(height/w),floor(width/w), w);
  //grid= new Grid( 10, 10, 40);
  
  /*
  background(100);
  circle (100, 100, 100);
  fill("SkyBlue");
  circle(100, 100, 50);
  
  circle (300, 100, 100);
  fill(0);
  circle(300, 100, 50);
  
  arc(200, 200, 400, 100, 0, PI);
 */
 
}




function draw() {
  background('yellow');
  grid.show();
}
