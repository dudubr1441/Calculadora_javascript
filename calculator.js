function calculator(){
    let valor1;
    let valor2;
    let resultado;
    let inputCalculator;
    let tipoSoma;
    this.Calcular = function(){

         try {
            const valorCalculo = document.querySelector(inputCalculator).value;
            if(typeof tipoSoma==='string' && tipoSoma.length==1){
            document.querySelector(inputCalculator).value = '';
            arraysNumero = valorCalculo.split(tipoSoma)
            console.log(arraysNumero);
            valor1 = parseFloat(arraysNumero[0])
            valor2 = parseFloat(arraysNumero[1])
            switch (tipoSoma) {
                    case '+':
                        resultado = valor1+valor2;
                        break;
                    case '-':
                        resultado = valor1-valor2;
                        break;
                    case '/':
                        resultado = valor1/valor2;
                        break;
                    case '*':
                        resultado = valor1*valor2;
                        break;
            }
            if(resultado!=undefined && resultado!= null && resultado!=NaN){
            document.querySelector(inputCalculator).value = resultado;
            }else{alert('format invalid')}
            }else{
                alert('accept only one operator')
            }
            } catch (error) {
                console.error(error);    
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
            tipoSoma = undefined;
            console.error(error);
        }
    }

    this.addCalc = function (button){
        document.querySelector(inputCalculator).value += button;
    }

    this.addOperator = function(button){
        document.querySelector(inputCalculator).value += button;
        if(button!='.'){
        tipoSoma = button;
        }
    }

    this.clear = function(){
        document.querySelector(inputCalculator).value = '';
        this.valor1 = undefined;
        this.valor2 = undefined;
        this.tipoSoma = undefined;
    }
    
    this.getInput = function(){
        return inputCalculator;
    }
}
const calculatorTest = new calculator();
calculatorTest.addInput('result_calculator');
