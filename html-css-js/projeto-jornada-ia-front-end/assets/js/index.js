const menuList = document.querySelector('.menu-oucuto')
const menusAmbueger = document.querySelectorAll('.header-menu-amburger')

Array.from(menusAmbueger).map((menu) => {
    menu.addEventListener('click', ()=>{
        menuList.style.display = window.getComputedStyle(menuList).display === 'none'? 'flex':'none'
    })
})



