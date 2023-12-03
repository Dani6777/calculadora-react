import Big from 'big.js';

export default function operate(numeroUno, numeroDos, operador) {
    const uno = Big(numeroUno || '0');
    const dos = Big(
        numeroDos || (operador === '/' || operador === 'x' ? '1' : '0')
    );

    switch (operador) {
        case '+':
            return uno.plus(dos).toString();
        case '-':
            return uno.minus(dos).toString();
        case 'x':
            return uno.times(dos).toString();
        case '/':
            if (dos.eq(0)) {
                alert('¡División por cero!');
                return 'Error';
            }
            return uno.div(dos).toString();
        default:
            return 'Operador no válido';
    }
}