const TILESIZE=55;
const NUMROW=15;
const NUMCOL =15;
const CWIDTH=TILESIZE*NUMCOL;
const CHEIGHT=TILESIZE*NUMCOL;


class Mappa {
    constructor(){
        this.grid = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ]
    }

    render(){
        for(var i=0; i<NUMROW; i++){
            for(var j=0; j<NUMCOL;j++){
                var tileX= TILESIZE*j;
                var tileY= TILESIZE*i;
                var tileColor=this.grid[i][j]== 1 ? "#222" : "#fff";
                fill(tileColor);
                stroke ("#222");
                rect(tileX, tileY,TILESIZE,TILESIZE);
            }
        }
    }
}


class Player{
    constructor(){
        this.x=TILESIZE*NUMROW/2;
        this.y=TILESIZE*NUMCOL/2;
        this.direction= PI;
    }

    render(){

    }
}




var grid= new Mappa();


function setup(){
    //TODO Inizializzione oggetti
    createCanvas(CWIDTH,CHEIGHT);
}

function update(){

}

function draw(){

    update();
    grid.render();
}