# 19 April 2023


ChooseUs.js file => line 31 =>  div lg:mt-[200px] md:mt-[100px] sm:mt-[100px] mt-[50px]
changed =>.mainhero = 750px to 50% 
div (hero) => xl:mt-[30px]
hero class - cheack absolute line 106
.hero { 
    /* border: 2px solid red; */
    width: 45%;
    position: absolute;
    height: auto;
    /* bottom: 80px; */
    right: 0px;
    /* top: 140px; */
    top: 2%;
}
.hero div {
    /* background: linear-gradient(180deg, #e1eced 0%, #ffffff 59.9%); */
    /* border: 2px solid blue; */
    background-image: url("/src/Assets/Images/bg1.png");
    background-size: contain;
    background-repeat: no-repeat;
    /* border-radius: 409.5px 0px 0px 0px; */
    border-radius: 0px 0px 0px 0px;
    
    width: 100%;
    position: relative;
    right: 0;
    top: 0;
}
.hero div img {
    position: relative;
    right: 0;
    top: 0;
    
    width: 100%;
   
}

# 950px to 700px
.hero {
        right: 20%;
        width: 60%;
        top:1.5%;
       }

       
=> Home.js => line 92 => <pb-[10%]/>  

=> homeLeft => <width : 54% />



