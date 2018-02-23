class ITM {
    private variableToCompare: string;
    private containing: any = {};

/**
 * [constructor - This constructor receives the following variables:]
 * @param {string} variableToCompare [This is the varaibale we want to compare]
 * @param {any}  containing        [This should be an array of values to compare with the variabaleToCompare]
 */
    constructor(variableToCompare: string, containing: Array<string>) {
        this.variableToCompare = variableToCompare;
        this.containing = containing;
        this.includesToMatch();
    }
/**
 * [browserDetect - This method is to know when the user is using Internet Explorer]
 */
    private browserDetect() {
        if ((navigator.userAgent.indexOf('Trident/7.0') > 0) ||
            (/MSIE 10/i.test(navigator.userAgent)) ||
                (/MSIE 9/i.test(navigator.userAgent) ||
                    /rv:11.0/i.test(navigator.userAgent))) {
                return true
            }
    }

/**
 * [includesToMatch - Depending on the browser, this method compares your variables using the include or the match Javascript function,
 * enabling it to work with the last breakthrough tecnologies of ES]
 */
    private includesToMatch() {
        let variableToMatch: string;
        for (let i = 0; i < this.containing.length; i++) {
            if (i === 0) {
                variableToMatch = this.containing[i];
            } else {
                variableToMatch = variableToMatch + '|' + this.containing[i];
            }

            if (this.browserDetect()) {
                if (this.variableToCompare.match('/^' + variableToMatch + '$/')) {
                    return true;
                };
            }

            if (this.containing.includes(this.variableToCompare)) {
                return true;
            };
            return false;
        }
    }
}
