$('#singal_products_3').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        615:{
            items:2
        },
        768:{
            items:2
        },
        991:{
            items:2
        },
        1200:{
            items:3
        },
        1366:{
            items:4
        },
        1880:{
            items:5
        }
    }
});

$('#latest_products').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        615:{
            items:2
        },
        768:{
            items:2
        },
        991:{
            items:2
        },
        1200:{
            items:3
        },
        1366:{
            items:4
        },
        1880:{
            items:5
        }
    }
});


$('#singal_products').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        615:{
            items:2
        },
        768:{
            items:2
        },
        991:{
            items:2
        },
        1200:{
            items:3
        },
        1366:{
            items:4
        },
        1880:{
            items:5
        }
    }
});

$('#singal_product_2').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        615:{
            items:2
        },
        768:{
            items:2
        },
        991:{
            items:2
        },
        1200:{
            items:3
        },
        1366:{
            items:4
        },
        1880:{
            items:5
        }
    }
});

$('#services_offers').owlCarousel({
    rtl:true,
    loop:true,
    nav:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        767:{
            items:1
        },
        1024:{
            items:2
        },
        1200:{
            items:2
        },
        1366:{
            items:3
        },
    },
    navText : ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"]
});

let btn = document.getElementById('menuBtn');
let menu = document.querySelector(".menu_responsive");
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let links = document.querySelectorAll('.right a');
let backs = ["url(../images/worker.jpg)",
];

let flag = true;

btn.addEventListener("click", ()=>{
    flag = !flag;
    if(!flag){
    left.style.transform = "translateY(0)";
    right.style.transform = "translateY(0)"; 
    menu.style.display = "flex"; 
    } else {
    left.style.transform = "translateY(100vh)";
    right.style.transform = "translateY(-100vh)";
    menu.style.display = "none"; 
    }
    left.style.background = "url('https://images.unsplash.com/photo-1583138605411-f85466f61638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"; 
});


for(let i = 0; i < links.length; i++){
links[i].addEventListener("mousemove", ()=>{
    left.style.background = backs[i]; 
})
};

function readURL(input, imgControlName) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(imgControlName).attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
};








