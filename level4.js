class Level4{
    constructor(){
        //border
        this.maze8=new Wall (300,600,600,PI/2,"orange");
        this.maze17=new Wall (590,300,600,PI,"orange");
        this.maze16=new Wall (10,300,600,PI,"orange");
        this.maze18=new Wall (300,10,600,PI/2,"orange");
        //start
        this.maze1=new Wall (50,100,100,PI/2,"orange");
        this.maze2=new Wall (170,55,120,PI,"orange");
        //end
        this.maze14=new Wall (170,575,70,PI,"orange");
        this.maze11=new Wall (80,470,200,PI/2,"orange");
        
        this.maze3=new Wall (405,460,170,PI/2,"orange");
        this.maze4=new Wall (260,210,200,PI/3,"orange");
        this.maze5=new Wall (350,210,110,PI,"orange");
        this.maze6=new Wall (550,150,200,PI/3,"orange");
        this.maze7=new Wall (200,270,450,PI/2,"orange");
        this.maze9=new Wall (380,370,250,PI/2,"orange");
        this.maze10=new Wall (10,550,150,PI,"orange");
        this.maze12=new Wall (80,370,140,PI/2,"orange");
        this.maze13=new Wall (230,500,140,PI/-3,"orange");
        this.maze15=new Wall (500,520,310,PI,"orange");
        this.maze19=new Wall (90,150,80,PI,"orange");
        this.maze20=new Wall (230,105,100,PI/2,"orange");
    }
    display(){
        //doesn't change
        this.maze1.display();
        this.maze2.display();
        this.maze8.display();
        this.maze16.display();
        this.maze17.display();
        this.maze18.display();
        this.maze14.display();
        this.maze11.display();
        
        //does change
        this.maze3.display();
        this.maze4.display();
        this.maze5.display();
        this.maze6.display();
        this.maze7.display();
        this.maze9.display();
        this.maze10.display();
        this.maze12.display();
        this.maze13.display();
        this.maze15.display();
        this.maze19.display();
        this.maze20.display();
    }
}