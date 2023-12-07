


/* 
var x;

var arrayOfQuotes = [
{
    'author': 'Jim Rohn', 
    'quote': 'Beware of what you become in pursuit of what you want.'
},
{
    'author': 'Albert Einstein', 
    'quote': 'Two things are infinite: the universe and human stupidity and I am not sure about the universe.'
},
{
    'author': 'Frank Zappa ', 
    'quote': 'So many books, so little time.'
},
{   'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
},
{   'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
}, 
{   'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
},

]

document.getElementById("generateQoute").onclick= function(){

     x = Math.floor(Math.random() * arrayOfQuotes.length + 1);

     document.getElementById("quoteOutput").innerHTML= arrayOfQuotes[x].quote;
     document.getElementById("authorOutput").innerHTML= arrayOfQuotes[x].author;
        
    



} */



// var x;
// var y;

// document.getElementById("generateQoute").onclick= function(){

// x =  Math.floor(Math.random() * 6) + 1;
// y =  Math.floor(Math.random() * 6) + 1;


// document.getElementById("quoteOutput").innerHTML= x;
// document.getElementById("authorOutput").innerHTML= y;
// }





var x;

var arrayOfQuotes = [
    {
        'author': 'Jim Rohn', 
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Albert Einstein', 
        'quote': 'Two things are infinite: the universe and human stupidity and I am not sure about the universe.'
    },
    {
        'author': 'Frank Zappa ', 
        'quote': 'So many books, so little time.'
    },
    {   'author': 'Wayne Gretzy', 
         'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {   'author': 'Nelson Mandela', 
         'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    }, 
    {   'author': 'Elbert Hubbard', 
         'quote': 'Do not take life too seriously. You will not get out alive.'
    },
]
document.getElementById("generateQoute").onclick= function(){

x= Math.floor(Math.random() * arrayOfQuotes.length)  ;

document.getElementById("quoteOutput").innerHTML= arrayOfQuotes[x].quote;
document.getElementById("authorOutput").innerHTML= arrayOfQuotes[x].author;

console.log(x);

}






