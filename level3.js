class Level3{
    constructor(){
        //border
        this.maze8=new Wall (300,600,600,PI/2,"yellow");
        this.maze17=new Wall (590,300,600,PI,"yellow");
        this.maze16=new Wall (10,300,600,PI,"yellow");
        this.maze18=new Wall (300,10,600,PI/2,"yellow");
        //start
        this.maze1=new Wall (50,100,100,PI/2,"yellow");
        this.maze2=new Wall (170,55,120,PI,"yellow");
        //end
        this.maze14=new Wall (170,575,70,PI,"yellow");
        this.maze11=new Wall (80,470,200,PI/2,"yellow");
        
        this.maze3=new Wall (390,100,270,PI/2,"yellow");
        this.maze4=new Wall (130,180,300,PI/2,"yellow");
        this.maze5=new Wall (350,310,400,PI,"yellow");
        this.maze6=new Wall (550,180,200,PI/2,"yellow");
        this.maze7=new Wall (310,270,450,PI/2,"yellow");
        this.maze9=new Wall (550,370,250,PI/2,"yellow");
        this.maze11=new Wall (80,470,200,PI/2,"yellow");
        this.maze10=new Wall (10,540,150,PI,"yellow");
        this.maze12=new Wall (120,360,250,PI/2,"yellow");
        this.maze13=new Wall (390,470,260,PI/2,"yellow");
        this.maze15=new Wall (460,575,60,PI,"yellow");
        this.maze19=new Wall (170,225,70,PI,"yellow");
        this.maze20=new Wall (170,225,70,PI,"yellow");
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
    destroy(){
        this.maze1.removeBody();
        this.maze2.removeBody();
        this.maze3.removeBody();
        this.maze4.removeBody();
        this.maze5.removeBody();
        this.maze6.removeBody();
        this.maze7.removeBody();
        this.maze8.removeBody();
        this.maze9.removeBody();
        this.maze10.removeBody();
        this.maze11.removeBody();
        this.maze12.removeBody();
        this.maze13.removeBody();
        this.maze14.removeBody();
        this.maze15.removeBody();
        this.maze16.removeBody();
        this.maze17.removeBody();
        this.maze18.removeBody();
        this.maze19.removeBody();
        this.maze20.removeBody();
    }
}