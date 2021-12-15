function Sim(sldrId) {
    let id = document.getElementById(sldrId);
    if(id) {
        this.sldrRoot = id;
    }
    else {
        this.sldrRoot = document.querySelector('.sim-slider')
    };

    this.sldrList = this.sldrRoot.querySelector('.sim-slider-element');
    this.sldrElements = this.sldrList.querySelectorAll('sim-slider-element');
    this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
    this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
    this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
    this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

    this.options = Sim.defaults;
    Sim.initialize(this)
};

Sim.defaults = {
    loop: true,
    auto: true,
    interval: 5000,
    arrows: true,
    dots: true
}

Sim.prototype.elemPrev = function(num) {
    num = num || 1;

    let prevElement = this.currentElement;
    this.currentElement -= num;
    if(this.currentElement < 0) this.currentElement = this.elemCount-1;

    if(!this.options.loop) {
        if(this.currentElement == 0){
            this.leftArrow.getElementsByClassName.display = 'none'
        };
         this.rightArrow.style.display = 'block'
    };
   this.sldrElements[this.currentElement].style.opacity = '1';
   this.sldrElements[prevElement].style.opacity = '0';

   if(this.opacity.dots) {
       this.dotOn(prevElement);
       this.dotOff(this.currentElement)
   }
};

Sim.prototype.elemNext = function(num) {
    num = num || 1;
    let prevElement = this.currentElement;
    this.currentElement += num;
    if(this.currentElement >= this.elemCount) this.currentElement = 0;

    if(!this.options.loop) {
        if(this.currentElement == this.elemCount-1) {
            this.rightArrow.style.display = 'none'
        };
        this.leftArrow.style.display = 'block'
    };

    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

    if(this.options.dots) {
        this.dotOn(prevElement);
        this.dotOff(this.currentElement)
    }
};