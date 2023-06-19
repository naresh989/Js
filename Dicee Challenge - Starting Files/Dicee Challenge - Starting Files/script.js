// window.onload = () => {
 let x = Math.round(Math.random()*6)+1
 
 let y = Math.round(Math.random()*6)+1

 let url1= "images/dice"+x+".png"
 
 let url2= "images/dice"+ y + ".png"


 document.querySelector('.img1').setAttribute("src",url1)
 
 document.querySelector('.img2').setAttribute("src",url2)

 if(x>y)
 {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
 }
 else if(x<y)
 {
    
    document.querySelector("h1").innerHTML = "Player 2 Wins"
 }
 else
 {
    
    document.querySelector("h1").innerHTML = "DraW"
 }
// }