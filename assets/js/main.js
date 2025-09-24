document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.getElementById('menu-toggle');
  const nav=document.getElementById('main-nav');
  const wa=document.getElementById('whatsapp-btn');
  const form=document.getElementById('contact-form');

  toggle&&toggle.addEventListener('click',()=>{
    if(nav.style.display==='flex'){nav.style.display='none';toggle.setAttribute('aria-expanded','false')}
    else{nav.style.display='flex';nav.style.flexDirection='column';toggle.setAttribute('aria-expanded','true')}
  })

  wa&&wa.addEventListener('click',()=>{
    window.open('https://wa.me/6281775123999?text=Hallo%20Kak%20Admin','_blank')
  })

  form&&form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (demo). Kontak via WhatsApp untuk proses pendaftaran.');
    form.reset();
  })

  // close mobile nav when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(l=>l.addEventListener('click',()=>{
    if(window.innerWidth <= 800){
      nav.style.display='none';
      toggle&&toggle.setAttribute('aria-expanded','false')
    }
  }))

  // header shadow on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if(window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // simple testimonial carousel
  const carousel = document.getElementById('carousel');
  if(carousel){
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    let idx = 0;
    const show = i=>{
      slides.forEach((s,si)=>s.classList.toggle('active', si===i));
    }
    show(idx);
    setInterval(()=>{ idx = (idx+1) % slides.length; show(idx); }, 4500);
  }

  // floating whatsapp quick link (also create if not present)
  if(!document.querySelector('.whatsapp-float')){
    const a=document.createElement('a');
    a.href='https://wa.me/6281775123999';
    a.target='_blank';
    a.className='whatsapp-float';
    a.innerText='Chat WA';
    document.body.appendChild(a);
  }
})
