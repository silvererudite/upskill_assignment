const link_1 = document.getElementById('nav-2-1');
const link_2 = document.getElementById('nav-2-2');
const link_3 = document.getElementById('nav-2-3');

const topic1 = document.getElementById('topic-1');
const p1 = document.getElementById('change-1');

const topic2 = document.getElementById('topic-2');
const p2 = document.getElementById('change-2');

const topic3 = document.getElementById('topic-3');
const p3 = document.getElementById('change-3');

var flag=0;

link_1.addEventListener("click", function(){
   
    if(flag == 2 ){
        link_2.style.textDecoration = 'none';
        link_2.style.color = 'grey';
    }
    else if(flag == 3){
        link_3.style.textDecoration = 'none';
        link_3.style.color = 'grey';
    }
    location.reload();
 link_1.style.textDecoration = 'underline';
 link_1.style.color = 'black';

 

 flag=1;

});

link_2.addEventListener("click", function(){
    if(flag == 1 ){
        link_1.style.textDecoration = 'none';
        link_1.style.color = 'grey';
    }
    else if(flag == 3){
        link_3.style.textDecoration = 'none';
        link_3.style.color = 'grey';
    }
 topic2.style.display='block';
 p2.style.display='block';

 link_2.style.textDecoration = 'underline';
 link_2.style.color = 'black';

 p2.innerText='Lots of stuff';


 flag=2;

});

link_3.addEventListener("click", function(){
    if(flag == 1 ){
        link_1.style.textDecoration = 'none';
        link_1.style.color = 'grey';
    }
    else if(flag == 2){
        link_2.style.textDecoration = 'none';
        link_2.style.color = 'grey';
    }

 link_3.style.textDecoration = 'underline';
 link_3.style.color = 'black';
 p2.style.display='none';
 p1.style.display='none';

 topic1.style.display='none';
 topic2.style.display='none';
 topic3.style.display='none';
 p3.innerText=`Instructor 1 , Instructor 2`; 

 flag=3;

});


