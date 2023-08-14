const wrap =document.querySelector(".sliderwrap");
const menu=document.querySelectorAll(".menu");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];

let chosenproduct=products[0];
const currenttitle=document.querySelector(".producttitle")
const currentimg=document.querySelector(".productimg")
const currentprice=document.querySelector(".productprice")
const currentdesc=document.querySelector(".productdesc")
const currentcolor=document.querySelectorAll(".color")
const currentsize=document.querySelectorAll(".size");


menu.forEach((item,index)=>{
    item.addEventListener("click",()=>
    {
        //this to change the slide
        chosenproduct=products[index]
        wrap.style.transform=`translateX(${-100 * index}vw)`;
        currenttitle.textContent=chosenproduct.title;
        currentprice.textContent="$" + chosenproduct.price;
      currentimg.src=chosenproduct.colors[0].img;
      currentcolor.forEach((color,index)=>{
        color.style.backgroundColor=chosenproduct.colors[index].code;
      })
    });
  });

  currentcolor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
      currentimg.src=chosenproduct.colors[index].img;
    })
  })

  currentsize.forEach((size,index)=>{
    size.addEventListener("click" ,()=>{
      currentsize.forEach(size=>{
        size.style.backgroundColor="white";
        size.style.color="black";
      })
      size.style.backgroundColor="black";
      size.style.color="white";
    })
  })