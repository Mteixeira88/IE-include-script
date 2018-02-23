class ITM {
    private containing: any;
    private browser: boolean = false;

    constructor() {
        //code goes here
    }
/**
 * [browserDetect - This method is to know when the user is using Internet Explorer]
 */
    private browserDetect() {
        if ((navigator.userAgent.indexOf('Trident/7.0') > 0) ||
            (/MSIE 10/i.test(navigator.userAgent)) ||
                (/MSIE 9/i.test(navigator.userAgent) ||
                    /rv:11.0/i.test(navigator.userAgent))) {
                this.browser = true;
            }
    }

/**
 * [includesToMatch - Depending on the browser, this method compares your variables using the include or the match Javascript function,
 * enabling it to work with the last breakthrough tecnologies of ES]
 */
    public includesToMatch(variableToCompare: string, containing: Array<string>) {
        let variableToMatch: string;
        this.browserDetect()
        this.containing = containing;
        if (this.browser) {
            for (let i = 0; i < containing.length; i++) {
                if (variableToCompare.match(containing[i])) {
                    return true;
                }
            }
        } else {

            if (this.containing.includes(variableToCompare)) {
                return true;
            }
        }
        return false;
    }
}

