x01 = (x11+x21)/2;
x02 = (x21+x22)/2;
f0 = func(x01,x02);
var VStep5;// A variable for future validator
var step5 = function () {
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep5 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep5 .addValidator($('input[name="step5-input1"]'), x01.toFixed(4))
        .addValidator($('input[name="step5-input2"]'), x02.toFixed(4)) 
        .addValidator($('input[name="step5-input3"]'), f0.toFixed(4)) 
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page5 button.check').click(function () {
            VStep5.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep5.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP5_INPUT1: new TextInput('step5-input1')
            .render(),
        STEP5_INPUT2: new TextInput('step5-input2')
            .render(),
        STEP5_INPUT3: new TextInput('step5-input3')
            .render()
        }
    }
};