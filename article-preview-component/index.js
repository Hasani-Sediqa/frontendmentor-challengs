const toggleButton1 = document.getElementById('share-button1'); 
const toggleButton2 = document.getElementById('share-button2'); 
const socialLinks = document.getElementById('socialLinks'); 
const profileSection = document.getElementById('profileSection'); 


function toggleVisibility() { 
  const w = window.innerWidth;
   if (w <= 1039) { 
  profileSection.classList.toggle('hidden');
  socialLinks.classList.toggle('hidden'); 

} else { 
  socialLinks.classList.toggle('hidden'); 
  toggleButton2.classList.toggle('hidden');
 } } 

toggleButton1.addEventListener('click', toggleVisibility);
toggleButton2.addEventListener('click', toggleVisibility); 

window.addEventListener('resize', () => { 
  const w = window.innerWidth; if (w > 1039) { 
    profileSection.classList.remove('hidden'); 
    socialLinks.classList.add('hidden'); 
    toggleButton2.classList.remove('hidden'); 
  } 
}); 
// Initial check 
window.dispatchEvent(new Event('resize'));












