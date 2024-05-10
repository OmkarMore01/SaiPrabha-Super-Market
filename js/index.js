function change1()
{
    const slidaryimg =document.getElementById("slidaryimg");
    slidaryimg.src='./img/index/main.png';
}
function change2()
{
   document.getElementById("slidaryimg").src="./img/index/fruit.jpg";
    
}
function change3()
{
    const slidaryimg =document.getElementById("slidaryimg");
    slidaryimg.src='./img/index/grocery.jpg';
   
}
function change4()
{
    const slidaryimg =document.getElementById("slidaryimg");
    slidaryimg.src='./img/index/main.png';
   
}
/* blog section */
function readmore1()
{
    const blog1 =document.getElementById("blog1");
    const blog2 =document.getElementById("blog2");
    const para= document.getElementById("blog1-info-span");
    const btn =document.getElementById("readmore1");
    const backbtn =document.getElementById("back1");
    para.innerText="First up, dive into the refreshing sweetness of summer fruits with our recipe for a vibrant berry salad, bursting with ripe strawberries, succulent blueberries, and plump raspberries, drizzled with a tangy citrus dressing. Then, fire up the grill and savor the smoky flavors of grilled vegetables, seasoned with aromatic herbs and a hint of olive oil.For those balmy evenings spent entertaining under the stars, impress your guests with a show-stopping caprese salad, layering slices of heirloom tomatoes with creamy mozzarella, fresh basil leaves, and a drizzle of balsamic glaze. Or indulge in the simple pleasures of a classic gazpacho, a chilled soup bursting with the vibrant flavors of ripe tomatoes, cucumbers, and bell peppers.";
    blog1.classList.remove('blog1');  
    blog1.classList.add('blog-info-shower');
    blog2.classList.remove('blog2');  
    blog2.classList.add('hide-blog');
    btn.classList.add('hide-btn');
    backbtn.classList.remove('hide-back-btn');
    backbtn.classList.add('back-btn');

}
function readmore2()
{
    const blog1 =document.getElementById("blog1");
    const blog2 =document.getElementById("blog2");
    const para2= document.getElementById("blog2-info-span");
    const btn2 =document.getElementById("readmore2");
    const backbtn2 =document.getElementById("back2");
    para2.innerText="But the journey doesn't stop at the produce aisle. Venture into the heart of the store and discover a world of culinary inspiration in every aisle. Learn how to decode food labels, navigate the spice rack with confidence, and stock your pantry like a seasoned chef. With our insider tips, you'll never be at a loss for what to cook or how to make the most of your grocery haul.Looking to shake up your weeknight meals? Our recipe hacks and kitchen shortcuts will help you whip up delicious dishes in a fraction of the time, without sacrificing flavor or quality. From one-pot wonders to meal prep strategies, we've got you covered with time-saving solutions for busy cooks on the go";
    blog2.classList.remove('blog2');  
    blog2.classList.add('blog2-info-shower');
    blog1.classList.remove('blog1');  
    blog1.classList.add('hide-blog');
    btn2.classList.add('hide-btn');
    backbtn2.classList.remove('hide-back-btn');
    backbtn2.classList.add('back-btn');

}