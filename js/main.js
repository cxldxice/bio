let position = true;


function hide(position){
    let buttons = document.querySelectorAll(".hide");
    let arrow = document.querySelector(".arrow")

    let elementStyle = "";
    let animationName = "open .5s"
    let arrowAnimation = "spin .5s"

    if (position){
        elementStyle = "none";
        animationName = "";
        arrowAnimation = "unspin .5s"
    };

    arrow.style.animation = arrowAnimation

    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        
        element.style.animation = animationName;
        element.style.display = elementStyle;
    };
};


function pressButton(){
    if (position){
        position = false
        hide(position)
    }else{
        position = true
        hide(position)
    };
};

hide(true);