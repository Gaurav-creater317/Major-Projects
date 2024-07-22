const nextBtnEl = document.getElementById("next");
const prevBtnEl = document.getElementById("prev");

const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");


let currentChecked = 1;
nextBtnEl.addEventListener("click" , ()=>{
          currentChecked++;
          if(currentChecked > stepsEl.length){
            currentChecked = stepsEl.length;
          }
          updateStepProgress();
          // console.log(currentChecked);
});

prevBtnEl.addEventListener("click" , ()=>{
  currentChecked--;
  if(currentChecked < 1){
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress(){
  stepsEl.forEach((stepEl , index)=>{
    if(index < currentChecked){
      stepEl.classList.add("checked");
      stepEl.innerHTML = `<i class="fa-solid fa-check"></i>
                           <small>${index === 0 ? "Start" : index === stepsEl.length -1 ? "Final" :"Step " + index}</small>`;
    }
    else{
      stepEl.classList.remove("checked");
      stepEl.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width = ((checkedNumber.length -1) / (stepsEl.length -1)) * 100 + "%" ;
 
  if(currentChecked === 1){
    prevBtnEl.disabled = true;
  } else if(currentChecked === stepsEl.length){
    nextBtnEl.disabled = true;
  }else {
    prevBtnEl.disabled = false;
    nextBtnEl.disabled = false;
  }

}