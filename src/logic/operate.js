import Big from 'big.js';

export default function operate(numeroUno, numeroDos, operador) {
    const uno = Big(numeroUno || '0');
    const dos = Big(
        numeroDos || (operador === '/' || operador === 'x' ? '1' : '0')
    );

    // Verifica si el operador es válido
    if (!['+', '-', 'x', '/'].includes(operador)) {
        throw new Error('Operador no válido');
    }

    switch (operador) {
        case '+':
            return uno.plus(dos).toString();
        case '-':
            return uno.minus(dos).toString();
        case 'x':
            return uno.div(dos).toString();
        case '/':
            if (dos.eq(0)) {
                throw new Error('¡División por cero!');
            }
            return uno.div(dos).toString();
        default:
            throw new Error('Operador no válido');
    }
}
