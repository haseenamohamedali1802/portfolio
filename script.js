// Scroll reveal
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card').forEach(c=>observer.observe(c));

// Mobile menu
document.querySelector('.menu').onclick = ()=>{
  document.querySelector('.nav-links').classList.toggle('active');
};

// Back to top
const btn = document.getElementById('top');

window.onscroll = ()=>{
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

btn.onclick = ()=>{
  window.scrollTo({top:0, behavior:'smooth'});
};