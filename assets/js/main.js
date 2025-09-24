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
})
