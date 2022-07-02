function gerarTabuada() {
    let number = document.getElementById('number');
    let select = document.getElementById('tabuada');

    if (number.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        select.innerHTML = '';
        for (let mult = 1; mult <= 10; mult++) {
            let n = Number(number.value);
            let res = document.createElement('option');
            res.innerHTML = `${n} x ${mult} = ${n * mult}`;
            res.value = `tab${mult}`;
            select.appendChild(res);
        }
    }
}