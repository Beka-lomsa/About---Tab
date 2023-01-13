const about = document.querySelector(".about");
const btns =  document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");

about.addEventListener("click", (e) => { 
   const z = e.target.dataset.z;
   if(z){
    btns.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    article.forEach((article) => {
        article.classList.remove('active');
        const element = document.getElementById(z);
        element.classList.add('active');
     });   
   };
});