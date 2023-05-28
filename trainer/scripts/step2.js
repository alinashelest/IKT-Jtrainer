var VStep2;// A variable for future validator
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
var step2 = function () {
    var plot = null;
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep2 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep2
            .addValidator($('input[name="step2-input3"]'), x01) // Either 4.5 and 4,5 will be correct
            .addValidator($('input[name="step2-input4"]'), x02) // Either 4.5 and 4,5 will be correct
            .addValidator($('input[name="step2-input5"]'),x11.toFixed(4)) // Either 4.5 and 4,5 will be correct
            .addValidator($('input[name="step2-input6"]'), x12.toFixed(4)) // Either 4.5 and 4,5 will be correct
            .addValidator($('input[name="step2-input7"]'),x21.toFixed(4)) // Either 4.5 and 4,5 will be correct
            .addValidator($('input[name="step2-input8"]'), x22.toFixed(4)) // Either 4.5 and 4,5 will be correct
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page2 button.check').click(function () {
            VStep2.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep2.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP2_INPUT3: new TextInput('step2-input3')
                .render(),
            STEP2_INPUT4: new TextInput('step2-input4')
                .render(),
            STEP2_INPUT5: new TextInput('step2-input5')
                .render(),
            STEP2_INPUT6: new TextInput('step2-input6')
                .render(),
            STEP2_INPUT7: new TextInput('step2-input7')
                .render(),
            STEP2_INPUT8: new TextInput('step2-input8')
                .render()
        }
    }
};