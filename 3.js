window.addEventListener("load", () =>{

    //establishing canvas
    var canvas = document.getElementById("myCanvas");
    let cw = 400;
    let ch = 400;
    canvas.width = cw;
    canvas.height = ch;
    let ctx = canvas.getContext("2d");
    
    //small website for this project
    // 1 color shemas
    // size patterns                        +
    // 3 variant web pages (input)
    // places to be gradient                +
    // two circles for one click (simetrical)
    
    
    ctx.beginPath();
    ctx.fillStyle = "#ccff99";
    ctx.fillRect(0,0,cw,ch);
    ctx.fill();
    
    
    
    function drawCircle(e){
    
    
    
        //switch for colors
        let color;
        let colorx;
    
        switch ((Math.round( Math.random() * 4))){
            case 1 : colorx = "#00ffff";
            break;
    
            case 2 : colorx = "#990099";
            break;
    
            case 3 : colorx= "#ff0066";
            break;
    
            case 4 : colorx = "#e67300";
            break;
        };
        
        color = colorx;
    
    
        ////switch for sizes randomized 10,20..100
    
        let sizeRadius;
        let sizex;
    
        switch ((Math.round( Math.random() * 10))){
            case 1 : sizex = 10;
            break;
    
            case 2 : sizex = 20;
            break;
    
            case 3 : sizex= 30;
            break;
    
            case 4 : sizex = 40;
            break;
    
            case 5 : sizex = 45; //////to be interesting
            break;
    
            case 6 : sizex = 60;
            break;
    
            case 7 : sizex= 70;
            break;
    
            case 8 : sizex = 80;
            break;
    
            case 9 : sizex= 90;
            break;
    
            case 10 : sizex = 95; ///to be interesting
            break;
        };
            sizeRadius = sizex;
    
    
        ///switch for chosen y coordinates gradient
        let choseY;
        switch (Math.round(((e.clientY) / 0.4/ 100))){
       
               case 1: choseY = 40; break;
               case 2: choseY = 80; break;
               case 3: choseY = 120; break;
               case 4: choseY = 160; break;
               case 5: choseY = 200; break;
               case 6: choseY = 240; break;
               case 7: choseY = 280; break;
               case 8: choseY = 320; break;
               case 9: choseY = 360; break;
               case 10: choseY = 360; break;
            };
    
    //////////switch for chosen x coordinates gradient
        let choseX;
        switch (Math.round(((e.clientX) / 0.4 / 100))){
       
               case 1: choseX = 40; break;
               case 2: choseX = 80; break;
               case 3: choseX = 120; break;
               case 4: choseX = 160; break;
               case 5: choseX = 200; break;
               case 6: choseX = 240; break;
               case 7: choseX = 260; break;
               case 8: choseX = 320; break;
               case 9: choseX = 360; break;
               case 10: choseX = 360; break;
            };
        ctx.beginPath();
        ctx.arc(choseX, choseY, sizeRadius, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.fill();
    
    };
    
    
    
    
    canvas.addEventListener("mousedown", drawCircle);
    
    });
