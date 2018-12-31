class Sample2{

constructor()
{

}

doGet(){
  	for (var i = 0; i < 5; i++) 
	{
	        console.log(i);
    	}
    console.log("Finally" + i);
}

}
var s=new Sample2();
s.doGet();  