const searchCard = document.querySelector('.searchCard');
const searchParam = document.querySelector('.leftText');
const inputBox = document.querySelector('.inpurText');
const submitBtn = document.querySelector('.submitBtn');

searchCard.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        document.querySelector('.submitBtn').click();
    }
});

submitBtn.addEventListener('click', function(e){
    let inpurText = inputBox.value;

    if(searchParam.innerHTML == 'Name'){
        window.location.href = encodeURI(`/student?name=${inpurText}`);
    }
    else{
        window.location.href = encodeURI(`/student?rollNo=${inpurText}`);
    }
})

searchParam.addEventListener('click', function(e){
    if(searchParam.innerHTML == 'Roll No'){
        searchParam.innerHTML = 'Name';
        inputBox.setAttribute('placeholder', 'Enter name of the student');
        inputBox.value="";
    }
    else{
        searchParam.innerHTML = 'Roll No';
        inputBox.setAttribute('placeholder', 'Enter roll number of the student');
        inputBox.value="";
    }
});