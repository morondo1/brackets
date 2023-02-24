module.exports = function check(str, bracketsConfig) {
    const openBrackets = [];
    const closeBrackets = [];
    for(let i = 0;i < bracketsConfig.length; i++){
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }

    const brecketsPair = {};
    for(let i = 0; i < closeBrackets.length; i++ ){
        brecketsPair[closeBrackets[i]] = openBrackets[i];
    }
    let stack = [];
   
    for(let i = 0; i < str.length; i++){
        let currentSymbl = str[i];
        if(openBrackets.includes(currentSymbl)) {
            let topElement = stack[stack.length - 1];
            if(brecketsPair[currentSymbl] && topElement == currentSymbl){
                stack.pop();
            } else {
                stack.push(currentSymbl);
            }
        } else {
            if(stack.length == 0) {
                return false;
            }
            
            let topElement = stack[stack.length - 1];

            if(brecketsPair[currentSymbl] == topElement){
                stack.pop();
            } else {
                return false;
            }
        }
    }

return stack.length == 0;

}
