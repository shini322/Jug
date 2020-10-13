//Modal

function closeModal(modalBlock) {
    const modal = document.querySelector(modalBlock);  
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function openModal(modalBlock) {
    const modal = document.querySelector(modalBlock);   
    modal.classList.add('show');
    modal.classList.remove('hide');
}

function modal(openTrigger, modalBlock) {

    const modalTrigger = document.querySelectorAll(openTrigger),
        modal = document.querySelector(modalBlock);
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalBlock));
    });



    modal.addEventListener('click', (e) => {
        if (e.target.dataset.close == '') {
            closeModal(modalBlock);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalBlock);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalBlock);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }    
}

modal('[data-modal]', '.modal');


//Modal forms

const complaintItem = document.querySelectorAll('.complaint__item'),
      complaintThanks = document.querySelectorAll('.complaint-thanks'),
      subscribeThanks = document.querySelectorAll('.subscribe-thanks'),
      subscribeSubmit =  document.querySelectorAll('.subscribe__submit'),
      subscribeInput = document.querySelector('.subscribe__input'),
      subscribeForm = document.querySelector('.subscribe__form')
complaintItem.forEach(item => {
    item.addEventListener('click', ()=> {   
        complaintThanks.forEach(thanks => {
            thanks.classList.add('show');
            thanks.classList.remove('hide');
            
        })
    })
});

subscribeSubmit.forEach(submit => {
    submit.addEventListener('click', (e) => {
        if(subscribeInput.value.indexOf('@') > -1){
            e.preventDefault();
            subscribeThanks.forEach(subscribe => {
                subscribe.classList.add('show');
                subscribe.classList.remove('hide'); 
                // subscribeForm.classList.add('hide');        
            });    
        } 
        
    });
});

