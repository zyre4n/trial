const noBtn = document.getElementById('hinde');
  const yesBtn = document.getElementById('yes');
  const confess = document.getElementById('sabi');
  noBtn.addEventListener("click", ()=>{
   let rand = Math.floor(Math.random() + (500 - 100) + 1);
   let rand2 = Math.floor(Math.random() + (-300 - 100) + 1);
   noBtn.style.transform "translate("+rand+"px,"+rand2+"px)";
  });
  yesBtn.addEventListener("click," ()=>{
    confess.innerHTML = "Yes, loveu hehe"
  })