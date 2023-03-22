// 16-3-23//
// string method//
//1.replace the word//
var count=0;
var sentence = "The garden is very beautifull.The garden is covered by flowers";
const regex=/garden /g;
let ans=sentence.match(regex);
console.log(ans.length);
//2. enter the number s rd,nd,st//
var number=prompt(parseInt("enter the number:"));
let anss=number%10;

if((number>=11)&&(number<=13))
{
	 console.log(number +"th");
}
 
    
	
	 else if(anss==3)
	{
		console.log(number+"rd");
	}
	else if(anss==1)
	{
		console.log(number+"st");
	}
	else if(anss>=4)
	{
		console.log(number+"th");
	}