
$( document ).ready(function() {
    
    col2num={
        "green":1,
        "red":2,
        "yellow":3,
        "blue":4

    }
    var Sequence=[];
    var flag=1;
    var i=0;
    function blink(ele){
        ele.addClass("pressed");
        setTimeout(function(){
            ele.removeClass("pressed")
        }, 200);

    }
    function makeSound(ele){
        (new Audio('./sounds/'+ele+'.mp3')).play();
    }
    function blinkAndSound(block){
        switch(block){
            case 1: blink($(".green"));
                    makeSound("green");
            
                break;
            case 2: blink($(".red"));
            makeSound("red");
                break;
            case 3: blink($(".yellow"));
            makeSound("yellow");
                break;
            case 4: blink($(".blue"));
            makeSound("blue");
                break;

        }
    }
    function generateNewPattern(){
        var block=Math.ceil(Math.random()*4);
        blinkAndSound(block)
        Sequence.push(block);
        console.log(Sequence.length)
        i=0;
    }
    function blinkBackground(){
        $("body").addClass("game-over");
        var a=$("h1").text();
        console.log(a);
    
        $("h1").text("Sorry You Lost. Your Score: "+Sequence.length);
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 1000);
        setTimeout(function(){
            $("body").addClass("game-over");
        }, 1000);
        setTimeout(function(){
            $("body").removeClass("game-over");
            $("h1").text(a);
        }, 1000);
        
        
    }
    $(".btn").click(function (ele) {
        var block=col2num[ele.target.id];
        
        blinkAndSound(col2num[ele.target.id]);
        if(block!=Sequence[i++]){
            makeSound("wrong");
            blinkBackground();
            Sequence=[];
            setTimeout(generateNewPattern, 2000);
        }
        if(i==Sequence.length){
            setTimeout(generateNewPattern, 1000);
            
        }
        
    });
    
    $(document).keypress(function (e) { 
        if(flag)
        {generateNewPattern();
        flag=0;}
    });
    
});