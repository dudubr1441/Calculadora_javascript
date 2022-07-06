function calculator(){
    let valor = 0;
    let valorAnterior;
    let inputCalculator;
    this.Calcular =function(tipoSoma){
            const valorCalculo = document.querySelector(inputCalculator).value;
            if(typeof tipoSoma==='string'){
            document.querySelector(inputCalculator).value = '';
            arraysNumero = valorCalculo.split(tipoSoma)
            valor1 = parseInt(arraysNumero[0])
            valor2 = parseInt(arraysNumero[1])
            switch (tipoSoma) {
                    case '+':
                        valor = valor1+valor2;
                        inputCalculator!=undefined||inputCalculator!=null ? valorAnterior=valor: valor=valor
                        break;
                    case '-':
                        valor = valor1-valor2;
                        inputCalculator!=undefined||inputCalculator!=null ? valorAnterior=valor: valor=valor
                        break;
                    case '/':
                        valor = valor1/valor2;
                        inputCalculator!=undefined||inputCalculator!=null ? valorAnterior=valor: valor=valor
                        break;
                    case '*':
                        valor = valor1*valor2;
                        inputCalculator!=undefined||inputCalculator!=null ? valorAnterior=valor: valor=valor
                        break;
                default:
                    document.querySelector(inputCalculator).value = 'Format Invalid'
                    break;
            }
        }
    }
    this.addInput = function(idInput){
        try {
            if (typeof idInput ==='string') {
                idInput.replace(' ','')
                idInput.indexOf('#')==-1 ? idInput = `#${idInput}`: idInput=idInput;
                inputCalculator = idInput
            }
        } catch (error) {
            console.error(error);
        }
    }
    function calculoSoma(){
        
    }

    // this.getInput = function(){
    //     return inputCalculator;
    // }
}
const calculatorTest = new calculator();
calculatorTest.addInput('result_calculator')
console.log(calculatorTest.getInput())
