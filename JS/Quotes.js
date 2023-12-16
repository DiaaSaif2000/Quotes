// Array // 
var quoteOutput = document.getElementById("quoteOutput")
var authorOutput = document.getElementById("authorOutput")
var Quotes =[
    {quote: " “ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst"
     , author:"ahmed mohamed" 
    },
    {quote: " “ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst"
     , author:"mohsmed" 
    },
    {quote: " “ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst"
     , author:"ali" 
    },
    {quote: " “ I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst"
     , author:"sayed" 
    },


]


function test(){
    var random = Math.floor(Math.random()* Quotes.length) // 0-
    console.log(random);
    quoteOutput.innerHTML = Quotes[random].quote
    authorOutput.innerHTML = Quotes[random].author
}


// window.alert("@ Writer and author:- Mae West");
