const menuBtn=document.querySelector('.menu-btn'), navLinks=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit',e=>{
  e.preventDefault();
  const v=id=>document.getElementById(id).value.trim();
  const subject=encodeURIComponent('Website Enquiry - Parikh Travels & Logistics');
  const body=encodeURIComponent(
`Name: ${v('name')}
Phone: ${v('phone')}
From: ${v('from')}
To / Destination: ${v('to')}
Service: ${v('service')}

Requirement:
${v('message')}`);
  window.location.href=`mailto:parikhtravelsandlogistics@gmail.com?subject=${subject}&body=${body}`;
});
