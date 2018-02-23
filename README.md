# IE-include-method

You see the Javascript/Typescript and try yourself the code [here](http://www.typescriptlang.org/play/#src=class%20ITM%20%7B%0D%0A%20%20%20%20private%20containing%3A%20any%3B%0D%0A%20%20%20%20private%20browser%3A%20boolean%20%3D%20false%3B%0D%0A%0D%0A%20%20%20%20constructor()%20%7B%0D%0A%20%20%20%20%20%20%20%20%2F%2Fcode%20goes%20here%0D%0A%20%20%20%20%7D%0D%0A%2F**%0D%0A%20*%20%5BbrowserDetect%20-%20This%20method%20is%20to%20know%20when%20the%20user%20is%20using%20Internet%20Explorer%5D%0D%0A%20*%2F%0D%0A%20%20%20%20private%20browserDetect()%20%7B%0D%0A%20%20%20%20%20%20%20%20if%20((navigator.userAgent.indexOf('Trident%2F7.0')%20%3E%200)%20%7C%7C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20(%2FMSIE%2010%2Fi.test(navigator.userAgent))%20%7C%7C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(%2FMSIE%209%2Fi.test(navigator.userAgent)%20%7C%7C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2Frv%3A11.0%2Fi.test(navigator.userAgent)))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.browser%20%3D%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%2F**%0D%0A%20*%20%5BincludesToMatch%20-%20Depending%20on%20the%20browser%2C%20this%20method%20compares%20your%20variables%20using%20the%20include%20or%20the%20match%20Javascript%20function%2C%0D%0A%20*%20enabling%20it%20to%20work%20with%20the%20last%20breakthrough%20tecnologies%20of%20ES%5D%0D%0A%20*%2F%0D%0A%20%20%20%20public%20includesToMatch(variableToCompare%3A%20string%2C%20containing%3A%20Array%3Cstring%3E)%20%7B%0D%0A%20%20%20%20%20%20%20%20let%20variableToMatch%3A%20string%3B%0D%0A%20%20%20%20%20%20%20%20this.browserDetect()%0D%0A%20%20%20%20%20%20%20%20this.containing%20%3D%20containing%3B%0D%0A%20%20%20%20%20%20%20%20if%20(this.browser)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20containing.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(variableToCompare.match(containing%5Bi%5D))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).innerHTML%20%3D%20%22true%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.backgroundColor%20%3D%20%22green%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.color%20%3D%20%22white%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(this.containing.includes(variableToCompare))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).innerHTML%20%3D%20%22true%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.backgroundColor%20%3D%20%22green%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.color%20%3D%20%22white%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).innerHTML%20%3D%20%22false%22%0D%0A%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.backgroundColor%20%3D%20%22red%22%3B%0D%0A%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.color%20%3D%20%22white%22%3B%0D%0A%20%20%20%20%20%20%20%20return%20false%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Alet%20test%20%3D%20new%20ITM()%3B%0D%0A%0D%0A%0D%0Alet%20button%20%3D%20document.createElement('button')%3B%0D%0Alet%20button2%20%3D%20document.createElement('button')%3B%0D%0Alet%20span%20%3D%20document.createElement('SPAN')%3B%0D%0Alet%20span2%20%3D%20document.createElement('SPAN')%3B%0D%0Alet%20variabletoCompare%20%3D%20'translate'%0D%0Alet%20arrayToCompare%20%3D%20%5B'translate'%2C%20'rotate'%2C%20'skew'%5D%3B%0D%0Abutton2.id%20%3D%20%22someId%22%3B%0D%0Abutton2.textContent%20%3D%20%22This%20is%20the%20final%20result%22%0D%0Adocument.body.appendChild(button)%3B%0D%0Adocument.body.appendChild(button2)%3B%0D%0Adocument.body.appendChild(span)%3B%0D%0Adocument.body.appendChild(span2)%3B%0D%0Aspan.innerHTML%20%3D%20variabletoCompare%3B%0D%0Aspan2.innerHTML%20%3D%20%22%20exists%20in%20%22%20%2B%20arrayToCompare%20%2B%20'%3F'%3B%0D%0A%0D%0A%0D%0Abutton.textContent%20%3D%20%22Test%20me%22%3B%0D%0Abutton.onclick%20%3D%20function()%20%7B%0D%0A%20%20%20%20test.includesToMatch(variabletoCompare%2C%20arrayToCompare)%3B%0D%0A%7D%0D%0A%0D%0Adocument.getElementById(%22someId%22).style.marginRight%20%3D%20%225px%22%3B%0D%0Adocument.getElementById(%22someId%22).style.marginLeft%20%3D%20%225px%22%3B).

## Motivation

When looking for a solution to use the `include` Javascript function, I notice that IE didn't had support and I lost a lot of time looking
for a solution in the internet.

For this reason, I did a script that is already converted to Javascript [here](http://www.typescriptlang.org/play/#src=class%20ITM%20%7B%0D%0A%20%20%20%20private%20containing%3A%20any%3B%0D%0A%20%20%20%20private%20browser%3A%20boolean%20%3D%20false%3B%0D%0A%0D%0A%20%20%20%20constructor()%20%7B%0D%0A%20%20%20%20%20%20%20%20%2F%2Fcode%20goes%20here%0D%0A%20%20%20%20%7D%0D%0A%2F**%0D%0A%20*%20%5BbrowserDetect%20-%20This%20method%20is%20to%20know%20when%20the%20user%20is%20using%20Internet%20Explorer%5D%0D%0A%20*%2F%0D%0A%20%20%20%20private%20browserDetect()%20%7B%0D%0A%20%20%20%20%20%20%20%20if%20((navigator.userAgent.indexOf('Trident%2F7.0')%20%3E%200)%20%7C%7C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20(%2FMSIE%2010%2Fi.test(navigator.userAgent))%20%7C%7C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(%2FMSIE%209%2Fi.test(navigator.userAgent)%20%7C%7C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2Frv%3A11.0%2Fi.test(navigator.userAgent)))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.browser%20%3D%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%2F**%0D%0A%20*%20%5BincludesToMatch%20-%20Depending%20on%20the%20browser%2C%20this%20method%20compares%20your%20variables%20using%20the%20include%20or%20the%20match%20Javascript%20function%2C%0D%0A%20*%20enabling%20it%20to%20work%20with%20the%20last%20breakthrough%20tecnologies%20of%20ES%5D%0D%0A%20*%2F%0D%0A%20%20%20%20public%20includesToMatch(variableToCompare%3A%20string%2C%20containing%3A%20Array%3Cstring%3E)%20%7B%0D%0A%20%20%20%20%20%20%20%20let%20variableToMatch%3A%20string%3B%0D%0A%20%20%20%20%20%20%20%20this.browserDetect()%0D%0A%20%20%20%20%20%20%20%20this.containing%20%3D%20containing%3B%0D%0A%20%20%20%20%20%20%20%20if%20(this.browser)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20containing.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(variableToCompare.match(containing%5Bi%5D))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).innerHTML%20%3D%20%22true%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.backgroundColor%20%3D%20%22green%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.color%20%3D%20%22white%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(this.containing.includes(variableToCompare))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).innerHTML%20%3D%20%22true%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.backgroundColor%20%3D%20%22green%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.color%20%3D%20%22white%22%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).innerHTML%20%3D%20%22false%22%0D%0A%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.backgroundColor%20%3D%20%22red%22%3B%0D%0A%20%20%20%20%20%20%20%20document.getElementById(%22someId%22).style.color%20%3D%20%22white%22%3B%0D%0A%20%20%20%20%20%20%20%20return%20false%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Alet%20test%20%3D%20new%20ITM()%3B%0D%0A%0D%0A%0D%0Alet%20button%20%3D%20document.createElement('button')%3B%0D%0Alet%20button2%20%3D%20document.createElement('button')%3B%0D%0Alet%20span%20%3D%20document.createElement('SPAN')%3B%0D%0Alet%20span2%20%3D%20document.createElement('SPAN')%3B%0D%0Alet%20variabletoCompare%20%3D%20'translate'%0D%0Alet%20arrayToCompare%20%3D%20%5B'translate'%2C%20'rotate'%2C%20'skew'%5D%3B%0D%0Abutton2.id%20%3D%20%22someId%22%3B%0D%0Abutton2.textContent%20%3D%20%22This%20is%20the%20final%20result%22%0D%0Adocument.body.appendChild(button)%3B%0D%0Adocument.body.appendChild(button2)%3B%0D%0Adocument.body.appendChild(span)%3B%0D%0Adocument.body.appendChild(span2)%3B%0D%0Aspan.innerHTML%20%3D%20variabletoCompare%3B%0D%0Aspan2.innerHTML%20%3D%20%22%20exists%20in%20%22%20%2B%20arrayToCompare%20%2B%20'%3F'%3B%0D%0A%0D%0A%0D%0Abutton.textContent%20%3D%20%22Test%20me%22%3B%0D%0Abutton.onclick%20%3D%20function()%20%7B%0D%0A%20%20%20%20test.includesToMatch(variabletoCompare%2C%20arrayToCompare)%3B%0D%0A%7D%0D%0A%0D%0Adocument.getElementById(%22someId%22).style.marginRight%20%3D%20%225px%22%3B%0D%0Adocument.getElementById(%22someId%22).style.marginLeft%20%3D%20%225px%22%3B)
that enables the use of include by calling a class and giving what values you want to compare and the value to compare.


### Typescript Class
This class enables the use of `include` Javascript function in IE.
```javascript
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
```

### Typescript usage

```javascript
import {ITM} from '../your-folder/your-file';
const test = new ITM();
test.includesToMatch(variabletoCompare, arrayToCompare);
```

## Contributing

1. Fork this project: [https://github.com/Mteixeira88/css-variables-IE-script](https://github.com/Mteixeira88/css-variables-IE-script)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request


## Author
**Miguel Teixeira**
* <https://github.com/Mteixeira88>

## License

This is free and unencumbered software released into the [public domain](UNLICENSE.txt). For more information,
please refer to [http://unlicense.org](http://unlicense.org).
