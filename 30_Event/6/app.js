const btn = document.querySelector(`button`);
let flag = false;
btn.addEventListener(`click`, function(){
    try {
        const inp = document.querySelector(`input`);
        if (inp.value.trim()==``) throw new Error (`empty string`);
     
        if(flag == false){
            inp.value =`!!!`;
            flag = true;
        } else {
            inp.value =`???`;
            flag = false;
        }
    } catch (error) {
        alert(error.message)
    }
})