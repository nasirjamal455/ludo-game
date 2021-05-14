var score, activePlayer, dice, addScore, lastdice;

init();
//adding event listner on roll dice
    addScore = 0;
    document.querySelector('.btn--roll').addEventListener('click', function(){
    var dice = Math.ceil(Math.random()*6);
    var documentDom = document.querySelector('.dice');
    documentDom.style.display = 'block';
    documentDom.src = 'dice-'+dice+'.png';
    
    

    if(dice!== 1){
        addScore += dice;
        document.querySelector('#current--'+activePlayer).textContent = addScore;
    }else{
      nextPlayer();



        }
        
})

document.querySelector('.btn--hold').addEventListener('click', function(){
    score[activePlayer]+=addScore;
    document.getElementById('score--'+activePlayer).textContent=score[activePlayer];
    if(score[activePlayer]>=5){
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn--roll').style.display = 'none';
        document.querySelector('#name--'+activePlayer).textContent ='winner';
        document.querySelector('.btn--hold').style.display = 'none';
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
    }else{
        
        nextPlayer();
    }
   
})

function nextPlayer(){
    addScore = 0;
        activePlayer === 0 ? activePlayer=1 :activePlayer=0;
        document.getElementById('current--0').textContent  = 0;
        document.getElementById('current--1').textContent  = 0;
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
}

document.querySelector('.btn--new').addEventListener('click',function(){
init();

document.querySelector('.btn--hold').style.display = 'block';
document.querySelector('.btn--roll').style.display = 'block';

})

function init(){
    activePlayer = 0;
    score = [0,0];
    addScore = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'player-1';
document.getElementById('name--1').textContent = 'palyer-2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--'+activePlayer).classList.add('player--active')
}
const port = process.env.PORT || 3000
app.listen(port, () => {
 console.log('Server is up on port ' + port)
})