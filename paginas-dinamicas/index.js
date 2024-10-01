
document.querySelectorAll('.btn-som').forEach((item)=>{
    item.addEventListener('click', (e)=>{

        let btnClass = e.target.classList[2].slice(6)
        let idSom = `#som_tecla_${btnClass}`

        document.querySelector(idSom).play()

    });
});
