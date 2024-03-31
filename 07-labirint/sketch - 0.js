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
		this.cells=[];
		
		for(let i=0; i<rows; i++){
			for(let j=0; j<cols; j++){
				
				let cell = new Cell(i, j, cellWidth);
				this.cells.push(cell);
			}
			
		}
		
	}
	
	show(){
		for (let cell of this.cells ){
			cell.show();
		}
	}
}

let grid;

function setup() {
  
  createCanvas(400, 400);
  
  let w=40;
  grid= new Grid( floor(height/w),floor(width/w), w);
   
}




function draw() {
  background('yellow');
  grid.show();
}
