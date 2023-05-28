var VStep4;// A variable for future validator
var step4 = function () {
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep4 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep4 .addValidator($('select[name="step3-select1"]'), 'xh')
        .addValidator($('select[name="step3-select3"]'), 'xl')
        .addValidator($('select[name="step3-select2"]'), 'xg')
        .addValidator($('select[name="step3-select2"]'), 'xg')
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page4 button.check').click(function () {
            VStep4.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep4.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            
            STEP3_SELECT1: new Select('step3-select1')
                .addOption('{{ELEMENTSTEST_OPTION_ONE}}', 'xh')
                .addOption('{{ELEMENTSTEST_OPTION_TWO}}', 'xl')
                .addOption('{{ELEMENTSTEST_OPTION_THREE}}', 'xg')
                .randomize()// -- You can randomize select choice elements
                .render(),
                STEP3_SELECT2: new Select('step3-select2')
                .addOption('{{ELEMENTSTEST_OPTION_ONE}}', 'xh')
                .addOption('{{ELEMENTSTEST_OPTION_TWO}}', 'xg')
                .addOption('{{ELEMENTSTEST_OPTION_THREE}}', 'xl')
                //.randomize() -- You can randomize select choice elements
                .render(),
                STEP3_SELECT3: new Select('step3-select3')
                .addOption('{{ELEMENTSTEST_OPTION_ONE}}', 'xh')
                .addOption('{{ELEMENTSTEST_OPTION_TWO}}', 'xg')
                .addOption('{{ELEMENTSTEST_OPTION_THREE}}', 'xl')
                //.randomize() -- You can randomize select choice elements
                .render()
        }
    }
};