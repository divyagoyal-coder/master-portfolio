


/* ==== Task - 1 : SETUP VARIABLES ==== */

/* =====GET PLAYER FROM HTML ===== */
const player = document.getElementById('________');  /* HINT: player id */

/* ===== POSITION VARIABLES ===== */
let x = 100;                    /* Player's left position */
let y = 0;                      /* Player's up/down position */

/* ===== MOVEMENT VARIABLES ===== */
let velocityY = ________;        /* HINT: How fast falling (0) */
let moveLeft = ________;         /* HINT: Is player moving left? (true/false) */
let moveRight = ________;        /* HINT: Is player moving right? (true/false) */
let jumping = ________;          /* HINT: Is player jumping? (true/false) */

/* ===== GAME VARIABLES ===== */
let score = 0;                  /* How many coins collected */
let gameCompleted = ________;    /* HINT: Did player win? (true/false) */

/* ===== TIMING VARIABLES ===== */
let lastSpaceTime = 0;          /* Last time space was pressed */
const DOUBLE_PRESS_DELAY = 300; /* Time between double presses (ms) */







/* ==== Task - 2 : START GAME FUNCTION ==== */
/* ===== WHEN PLAYER CLICKS START ===== */
function __________() {                  /* HINT: define startGame funtion */
    
    /* HIDE START SCREEN */
    document.getElementById('start').style.display = '________';
    
}





/* ==== Task - 3 : SUBMIT FORM FUNCTION ==== */
/* ===== WHEN PLAYER SUBMITS FORM ===== */
function ________() {
    
    alert('🚀 ________ ________ !');  /* HINT: "Success Message" */
}





/* ==== Task - 4 : KEYBOARD EVENTS  ==== */
/* ===== WHEN KEY IS PRESSED DOWN ===== */
document.addEventListener('keydown', e => {
    
    /* ===== RIGHT ARROW KEY ===== */
    if (e.key === '________') {
        moveRight = ________;  /* HINT: true/false */
    }
    
    /* ===== LEFT ARROW KEY ===== */
    if (e.key === '________') {
        moveLeft = ________;   /* HINT: true/false */
    }
    
    /* ===== SPACEBAR TO JUMP ===== */
    if (e.key === '________' && !jumping) {  /* HINT: space key pressed */
        velocityY = -24;       /* Move UP (negative = up) */
        jumping = ________;    /* HINT: true/false */
    }
    
    /* ===== DOUBLE TAP SPACEBAR ===== */
    if (e.key === '________') {              /* HINT: space key pressed */
        const now = Date.now();              /* Current time in milliseconds */
        
        /* IF PRESSED AGAIN WITHIN 300MS */
        if (now - lastSpaceTime < DOUBLE_PRESS_DELAY) {
            velocityY = -24;
            jumping = ________;              /* HINT: true/false */
        }
        
        lastSpaceTime = now;
    }
});

/* ===== WHEN KEY IS RELEASED ===== */
document.addEventListener('keyup', e => {
    
    /* ===== RIGHT ARROW KEY RELEASED ===== */
    if (e.key === '________') {              /* HINT: 'ArrowRight' */
        moveRight = ________;                /* HINT: false */
    }
    
    /* ===== LEFT ARROW KEY RELEASED ===== */
    if (e.key === '________') {              /* HINT: 'ArrowLeft' */
        moveLeft = ________;                 /* HINT: false */
    }
});








/* ==== Task - 5 : PARTICLE EFFECTS  ==== */
/* ===== CREATE FLOATING PARTICLES ===== */
function _____________(x, y) {          /* HINT: function name to createParticles */
    
    /* CREATE 10 PARTICLES */
    for (let i = ________; i < ________; i_____) {      /* HINT:  mention start, end and interval values */
        
        /* CREATE NEW ELEMENT */
        let p = document.createElement('div');
        
        /* ADD CSS CLASS */
        p.classList.add('particle');
        
        /* POSITION PARTICLE */
        p.style.left = x + '________';               /* HINT: mention units */
        p.style.top = y + '________';                /* HINT: mention units */
        
        /* ADD TO PAGE */
        document.body.appendChild(p);
        
        /* REMOVE AFTER 1 SECOND */
        setTimeout(() => {
            p.remove();
        }, 1000);
    }
}



/* ==== Task - 6 : MAIN GAME LOOP  ==== */
/* ===== MAIN GAME LOOP ===== */
function gameLoop() {
    
    /* ONLY RUN IF GAME NOT COMPLETED */
    if (!_________) {                /*HINT :   game will run only if gameCompleted variable is false */
        
        /* ===== MOVEMENT ===== */
        
        /* MOVING RIGHT */
        if (_______) {                                /* variable that hold access to move right */
            x += _____;                               /* Move RIGHT 7 pixels */
            player.style.transform = 'scaleX(1)';     /* Face RIGHT */
            player.classList.add('walk');             
        }
        
        /* MOVING LEFT */
        if (________) {                               /* variable that hold access to move left */
            x -= _______;                             /* Move LEFT 7 pixels */
            player.style.transform = 'scaleX(-1)';    /* Face LEFT */
            player.classList.add('walk');             
        }
        
        /* NOT MOVING */
        if (!________ && !_______) {                 /* variable that hold access to move left or right */
            player.classList.remove('walk');     
        }
        
        /* BOUNDARY CHECK */
        if (x < 0) x = 0;  /* Don't go left of screen */
        
        
        /* ===== GRAVITY & JUMPING ===== */
        
        /* APPLY GRAVITY (make fall) */
        velocityY += 1.2;  /* Get faster as fall */
        
        /* UPDATE POSITION */
        y += velocityY;
        
        /* LAND ON GROUND */
        if (y > 0) {
            y = 0;                 /* Stop at ground level */
            velocityY = 0;         /* Stop falling */
            jumping = ________;    /* HINT: true/false */
        }
        
        
        /* ===== DRAW PLAYER ON SCREEN ===== */
        
        player.style.left = x + '________';           /* HINT: join units */
        player.style.top = (window.innerHeight - 220 + y) + '________';  /* HINT: join units */
        
        
        /* ===== CAMERA FOLLOW ===== */
        
        window.scrollTo(x - 300, 0);  /* Scroll to follow player */
        
        
        /* ===== COIN COLLECTION ===== */
        
        document.querySelectorAll('.coin').forEach(coin => {
            
            /* ONLY CHECK IF COIN IS VISIBLE */
            if (coin.style.display !== '________') {  /* HINT: 'none' */
                
                /* GET COIN POSITION */
                let cx = coin.offsetLeft;
                let cy = coin.offsetTop;
                
                /* CHECK IF PLAYER TOUCHED COIN */
                if (
                    x + 60 > cx &&
                    x < cx + 35 &&
                    player.offsetTop < cy + 35 &&
                    player.offsetTop + 90 > cy
                ) {
                    
                    coin.style.display = '________';  /* HINT: 'none' */
                    score____;                          /* Add 1 to score */
                    
                    /* UPDATE SCORE DISPLAY */
                    document.getElementById('coins').innerText = ________;  /* HINT: update 'score' value */
                    
                    /* CREATE PARTICLES */
                    createParticles(cx, cy);
                }
            }
        });
        
        
        /* ===== ENEMY COLLISION ===== */
        
        document.querySelectorAll('.enemy').forEach(enemy => {
            
            let ex = enemy.offsetLeft;
            
            /* CHECK IF PLAYER HIT ENEMY */
            if (
                x + 60 > ex &&
                x < ex + 60 &&
                y > -50
            ) {
                alert('💀 ______');         /* HINT : Failure message */
                location.reload();  /* Refresh page */
            }
        });
        
        
        /* ===== WIN CONDITION ===== */
        
        const flag = document.getElementById('flag'); 
        const flagPosition = flag.offsetLeft;
        
        /* IF PLAYER REACHES FLAG WITH ALL COINS */
        if (
            x >= flagPosition - 100 &&
            score >= 5 &&
            !gameCompleted
        ) {
            gameCompleted = ________;                 /* HINT: true/false */
            moveLeft = ______;                        /* HINT: true/false */
            moveRight = _______;                      /* HINT: true/false */
            
            /* SHOW CONTACT FORM */
            document.getElementById('contactPopup').style.display = '________';         /* HINT: 'flex' to show/ 'none' to hide  */
        }
    }
    
    /* LOOP FOREVER */
    requestAnimationFrame(gameLoop);
}

/* START THE GAME LOOP */
gameLoop();
