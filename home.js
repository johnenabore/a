const barsOpen = document.getElementById('barsOpen');
const barsButton = document.getElementById('bars');
const header = document.querySelector('header');
const mainContainer = document.getElementById('mainContainer');

barsButton.onclick = function(){
    barsOpen.classList.toggle('show')
    header.style.opacity = '0.3';
    mainContainer.style.opacity = '0.3';
}
document.addEventListener('click', function(e){
    if(!barsOpen.contains(e.target) && e.target !== barsButton){
        barsOpen.classList.remove('show');
        header.style.opacity = '1';
        mainContainer.style.opacity = '1'
    }
})
