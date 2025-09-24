document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.getElementById('menu-toggle');
  const nav=document.getElementById('main-nav');
  const wa=document.getElementById('whatsapp-btn');
  const form=document.getElementById('contact-form');

  toggle&&toggle.addEventListener('click',()=>{
    if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex';nav.style.flexDirection='column'}
  })

  wa&&wa.addEventListener('click',()=>{
    window.open('https://api.whatsapp.com/send/?phone=6281231256434&text=Hallo%20Kak%20Admin','_blank')
  })

  form&&form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (demo). Kontak via WhatsApp untuk proses pendaftaran.');
    form.reset();
  })
})
