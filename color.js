const body=document.querySelector('body');
const button=document.querySelector('#new-quote');
const colors=['#ccccff', '#ffccff', '#ffcccc', '#ffffcc'];
body.style.backgroundColor='#7e86b3';
button.addEventListener('click', function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
    
})