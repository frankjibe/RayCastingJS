const TILESIZE=55;
const NUMROW=15;
const NUMCOL =15;
const CWIDTH=TILESIZE*NUMCOL;
const CHEIGHT=TILESIZE*NUMCOL;



/************************************************
 * Classe Mappa
 ***********************************************/
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
                if (p.x>(j*TILESIZE) && p.x < (j*TILESIZE)+TILESIZE && p.y>(i*TILESIZE) && p.y < (i*TILESIZE)+TILESIZE) tileColor=("#fcc"); 
                fill(tileColor);
                stroke ("#222");
                rect(tileX, tileY,TILESIZE,TILESIZE);
            }
        }
    }
}


/************************************************
 * Classe Player
 ***********************************************/
class Player{
    constructor(){
        this.x=TILESIZE*NUMROW/2;
        this.y=TILESIZE*NUMCOL/2;
        this.direction= Math.PI;
        this.color = "#ff5030";
        this.size=15;
        this.angle=0;
        this.speed=2;
        this.angspeed=0.05;
    }

    update(){
        if (keyIsDown(LEFT_ARROW)) this.angle-=this.angspeed;
        if (keyIsDown(RIGHT_ARROW)) this.angle+=this.angspeed;

        var nextX;
        var nextY;


        if (keyIsDown(UP_ARROW)) {

            nextX =this.x + Math.cos(this.angle)*this.speed;
            nextY =this.y + Math.sin(this.angle)*this.speed;

            if(grid.grid[floor(nextY/TILESIZE)][floor(nextX/TILESIZE)]==0){         
                this.x = nextX;
                this.y=nextY
            } 
            
        }

        if (keyIsDown(DOWN_ARROW)) {

            nextX =this.x - Math.cos(this.angle)*this.speed;
            nextY =this.y - Math.sin(this.angle)*this.speed;

            if(grid.grid[floor(nextY/TILESIZE)][floor(nextX/TILESIZE)]==0){         
                this.x = nextX;
                this.y=nextY
            } 
        }
    
    }

    render(){
        stroke ("#222");
        fill(this.color);
        var p1x=this.x + (this.size*(Math.cos(this.angle)));
        var p1y=this.y + (this.size*(Math.sin(this.angle)));
        
        var p2x=  this.x + (this.size*(Math.cos(this.angle+(2.5/3*Math.PI))));
        var p2y=  this.y + (this.size*(Math.sin(this.angle+(2.5/3*Math.PI))));
          
        var p3x=  this.x + (this.size*(Math.cos(this.angle-(2.5/3*Math.PI))));
        var p3y=  this.y + (this.size*(Math.sin(this.angle-(2.5/3*Math.PI))));
        
        triangle(p1x,p1y,
                p2x,p2y,
                p3x,p3y
            );
        
        fill("black")
        circle(this.x,this.y,5);

        fill("white");
        var text1="x:" + this.x + " y:" + this.y;
        text(text1,5,15);
        text1="Index y:" + floor(this.y/TILESIZE) + "Index x:" + floor(this.x/TILESIZE) +" value=>"+ grid.grid[floor(this.y/TILESIZE)][floor(this.x/TILESIZE)];
        text(text1,5,30);
        
    }
}



/************************************************
 * Globals
 ***********************************************/

var grid= new Mappa();
var p= new Player();



/************************************************
 * GameLoop
 ***********************************************/

function setup(){
    //TODO Inizializzione oggetti
    createCanvas(CWIDTH,CHEIGHT);
}

function update(){
    p.update();
}

function draw(){
    update();
    grid.render();
    p.render();
}