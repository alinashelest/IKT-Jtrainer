function func(x, y) {    

    return Math.pow((1-x),2)+Math.pow((2-y),2);
    
}
var VStep3;// A variable for future validator
var step3 = function () {
    this.preDispatch = function () {
        n = 2;
        h = 2;
        e = 0.01;
        x01 = 0;
        x02 = 0;
        d1 = ((Math.sqrt(n+1)+n-1)/(n*Math.sqrt(2)))*h;
        d2 = ((Math.sqrt(n+1)-1)/(n*Math.sqrt(2)))*h;
        x11 = x01+d2;
        x12 = x02+d1;
        x21 = x01+d1;
        x22 = x02+d2;
        
        fx0 = func(x01,x02);
fx1 = func(x11,x12);
fx2 = func(x21,x22);
    };

    this.postDispatch = function () {
        VStep3 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep3
        .addValidator($('input[name="step3-input1"]'), fx0.toFixed(4))
         .addValidator($('input[name="step3-input2"]'), fx1.toFixed(4)) 
         .addValidator($('input[name="step3-input3"]'), fx2.toFixed(4)) 
         /*(xh – найбільше значення функції, x
(1)
= xg – наступне за
найбільшим значення функції, x
(2)
= xl – найменше значення функції.*/
            
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page2 button.check').click(function () {
            VStep3.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep3.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP3_INPUT1: new TextInput('step3-input1')
            .render(),
        STEP3_INPUT2: new TextInput('step3-input2')
            .render(),
        STEP3_INPUT3: new TextInput('step3-input3')
            .render()
        }
    }
};