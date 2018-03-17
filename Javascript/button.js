$(document).ready(function(){
    // open menuSpace = 8/8/3 , letterSpace = 3/1/1
    //close menuSpace = 3/3/3
    var status = "open";
    var dots = document.getElementsByClassName("dots");
    var elHW ;
    var menuBtnCont;
    var edu = $("#education-page");
    var exp = $("#experience-page");
    var hire = $("#hire-me-page");
    var about = $("#about-me-page");
    var docHeight,docWidth,leftcenter,topCenter,fontSize, letterSpacing,menuLetterSpacing;
    
    function hideWelcomeContainer(){ // rotate the main screen and hide it
        $("#welcome-container").css("-webkit-animation-play-state","running").animate({width:"0",height:"0"},400,function(){
            $("#welcome-container").css("display","none");
        });
    }
    
    function openMenuButton(){ //opens all the buttons and put them in their positions
        docHeight = window.innerHeight || document.documentElement.clientHeight ||     document.body.clientHeight;
        docWidth = window.innerWidth || document.documentElement.clientWidth ||       document.body.clientWidth;
        
        if (docWidth > 650){
            elHW = "125px";
            menuBtnCont = 500;
            fontSize = "14px"
            menuLetterSpacing = "8px";
            letterSpacing = "3px";
        }

        else if(docWidth < 650 && docWidth > 400 ){
            elHW = "90px";
            menuBtnCont = 300;
            fontSize = "10px";
            menuLetterSpacing = "8px";
            letterSpacing = "1px";
        }

        else if (docWidth < 400){
            elHW = "65px";
            menuBtnCont = 200;
            fontSize = "8px";
            menuLetterSpacing = "3px";
            letterSpacing = "1px";
        }
        
                //finds the center
        leftCenter = (docWidth/2) - (menuBtnCont/2);
        topCenter = (docHeight/2) - (menuBtnCont/2);
        
        $("#menu-button-container").css({"display":"block","-webkit-animation-play-state":"running"}).animate({left:leftCenter + "px",top:topCenter + "px",width:menuBtnCont + "px",height:menuBtnCont + "px"},300);
        
        
        $(".menu-button").css({display:"block",opacity:"1",left:"50%",top:"50%","font-size":fontSize,"letter-spacing":letterSpacing});
        $("#menu").animate({height:elHW,width:elHW,letterSpacing:menuLetterSpacing},500);
        $("#education").animate({top:"0",left:"50%",width:elHW,height:elHW},500);
        $("#about-me").animate({top:"50%",left:"0",width:elHW,height:elHW},500);
        $("#experience").animate({top:"50%",left:"100%",width:elHW,height:elHW},500);
        $("#hire-me").animate({top:"100%",left:"50%",width:elHW,height:elHW},500);
        
    }
    
    function closeMenuButton(){ //put the menu button top left
        var contHW,menuSize;
        
        if (docWidth > 650){
            fontSize = "14px";
            menuLetterSpacing = "3px";
            menuBtnCont = 500;
            contHW = "75px";
            menuSize = "70px";
        }

        else if(docWidth < 650 && docWidth > 400 ){
            fontSize = "10px";
            menuLetterSpacing = "3px";
            menuSize = "50px";
            contHW = "52px";
        }

        else if (docWidth < 400){
            fontSize = "10px";
            menuLetterSpacing = "3px";
            contHW = "52px";
            menuSize = "50px";
        }
        
        $(".menu-button").not("#menu").animate({left:"50%",top:"50%",width:0,height:0,opacity:"0"},400,function(){
            $(".menu-button").not("#menu").css("display","none");
        });
        
        $("#menu").animate({height:menuSize,width:menuSize,letterSpacing:menuLetterSpacing},{duration:200, queue: false});
        $("#menu-button-container").animate({width:contHW,height:contHW,left:"10px",top:"10px"},700);
    }
    
    function createDots(){
        //creates the dots
        var buttonElements = document.getElementById("menu-button-container").
        getElementsByTagName("button");
        var i,t;
        
        for (i = 0; i < buttonElements.length ; i++){
            if (buttonElements[i].innerHTML == "Menu"){}
            else{
                for(t = 0; t < 4; t++){
                    var createDot = document.createElement("DIV");
                    createDot.className = "dots";
                    buttonElements[i].appendChild(createDot);
                }// end of t
            } // end of else
        } // end of i
    }
        //place the dots in a square position
        
    function openDots(){

        $(".menu-button").not("#menu").mouseenter(function(){ //take them out of the button
            $(this).children(".dots:nth-child(1)").stop().animate({left:"-20%",top:"110%",opacity:"1"},300);
            $(this).children(".dots:nth-child(2)").stop().animate({left:"120%",top:"110%",opacity:"1"},300);
            $(this).children(".dots:nth-child(3)").stop().animate({left:"-20%",top:"-10%",opacity:"1"},300);
            $(this).children(".dots:nth-child(4)").stop().animate({left:"120%",top:"-10%",opacity:"1"},300);
        });// end of mouse enter
    }//end of openDots
    
    function closeDots(){
        $(".menu-button").mouseleave(function(){ //place the dots back in the button
            $(this).children(".dots").stop().animate({left:"50%",top:"50%",opacity:"0"},200);
        }); // end of mouse leave
    }
    
    function renew(elem){
        elem.before(elem.clone(true));
        var newElem = elem.prev();
        elem.remove();
        return newElem;
}
    
    function responsive(){
        //gets the height and width of the window
        docHeight = window.innerHeight || document.documentElement.clientHeight ||     document.body.clientHeight;
        docWidth = window.innerWidth || document.documentElement.clientWidth ||       document.body.clientWidth;

        if(status === "closed"){
            
            if (docWidth > 650){
                elHW = "125px";
                menuBtnCont = 500;
                $("#menu").css({fontSize:"14px",letterSpacing:"3px",height:"70px",width:"70px"});
                $("#menu-button-container").css({width:"102px",height:"75px",left:"10px",top:"10px"});
            }

            else if(docWidth < 650 && docWidth > 400 ){
                $("#menu").css({fontSize:"10px",letterSpacing:"3px",height:"50px",width:"50px"});
                $("#menu-button-container").css({width:"52px",height:"52px",left:"10px",top:"10px"});
            }

            else if (docWidth < 400){
                $("#menu").css({"font-size":"8px","letter-spacing":"3px",height:"50px",width:"50px"});
                $("#menu-button-container").css({width:"52px",height:"52px",left:"10px",top:"10px"});
            }

        } // end of if CLOSED

        else if (status === "open"){
            if (docWidth > 650){
                elHW = "125px";
                menuBtnCont = 500;
                $(".menu-button").css("font-size","14px");
                $("#menu").css({letterSpacing:"8px"});
            }

            else if(docWidth < 650 && docWidth > 400 ){
                elHW = "90px";
                menuBtnCont = 300;
                $(".menu-button").css("font-size","10px");
                $("#menu").css({letterSpacing:"8px"});
            }

            else if (docWidth < 400){
                elHW = "65px";
                menuBtnCont = 200;
                $(".menu-button").css({"font-size":"8px","letter-spacing":"1px"});
                $("#menu").css({letterSpacing:"3px"});
            }
                    //finds the center
            leftCenter = (docWidth/2) - (menuBtnCont/2);
            topCenter = (docHeight/2) - (menuBtnCont/2);
            $("#menu-button-container").css({"display":"block","-webkit-animation-play-state":"running"}).css({left:leftCenter + "px",top:topCenter + "px",width:menuBtnCont + "px",height:menuBtnCont + "px"},300);
            $("#menu").css({height:elHW,width:elHW});
            $("#education").css({height:elHW,width:elHW});
            $("#about-me").css({height:elHW,width:elHW});
            $("#experience").css({height:elHW,width:elHW});
            $("#hire-me").css({height:elHW,width:elHW});
        } // end of IF OPEN
        
    } // end of RESPONSIVE fn
    
    //activating the main functions
    $("#animated-button").click(function(){
        hideWelcomeContainer();
        openMenuButton();
        createDots();
        openDots();
        closeDots();
        
        $(window).resize(function(){ //re-center the button container on resize + responsiveness
            responsive();
        }); //end of resize
        
        $(".menu-button").click(function(){ //opens and closes menu
            var newElem = renew($("#menu-button-container"));

            if (status === "open"){ //if the button is open and closing
                closeMenuButton();
                newElem.removeClass("rotate");
                newElem.addClass("rotateB");
                $(".menu-button").children(".dots").stop().animate({left:"50%",top:"50%",opacity:"0"},200);
                status = "closed";
            }
            else if (status === "closed"){ // if the button is closed and opening
                newElem.removeClass("rotateB");
                newElem.addClass("rotate");
                openMenuButton();
                $(".menu-button").children(".dots").stop().animate({left:"50%",top:"50%",opacity:"0"},200);
                status = "open";

            }
        }); // end of .menu-button.click

        $("#menu").click(function(){
            if(status === "open")
            $(".active").animate({left:"130%"},700);
            else {
            $(".active").animate({left:"10%"},700);
            }
        });

        $("#education").click(function(){
            $(".active").removeClass("active");
            edu.addClass("active");
            edu.animate({left:"10%"},700);
        });

        $("#hire-me").click(function(){
            $(".active").removeClass("active");
            hire.addClass("active");
            hire.animate({left:"10%"},700);
        });

        $("#about-me").click(function(){
            $(".active").removeClass("active");
            about.addClass("active");
            about.animate({left:"10%"},700);
        });

        $("#experience").click(function(){
            $(".active").removeClass("active");
            exp.addClass("active");
            exp.animate({left:"10%"},700);
        });
        
        
    }); // end of #animated-button.click
    

});

/*
functions: 

*/