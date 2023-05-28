var VStep1;// A variable for future validator
var n, h, e, a, b, y; 
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
var step1 = function () {
    var plot = null;
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep1 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep1
            .addValidator($('input[name="step1-input"]'), d1.toFixed(4)) // Either 4.5 and 4,5 will be correct
            .addValidator($('input[name="step1-input2"]'), d2.toFixed(4)) // Either 4.5 and 4,5 will be correct
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page1 button.check').click(function () {
            VStep1.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep1.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP1_INPUT: new TextInput('step1-input')
                .render(),
            STEP1_INPUT2: new TextInput('step1-input2')
                .render()
        }
    }
};