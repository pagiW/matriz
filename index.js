var a11 = document.getElementById('a11');
var a12 = document.getElementById('a12');
var a21 = document.getElementById('a21');
var a22 = document.getElementById('a22');
var button = document.getElementsByTagName('button')[0];
const txt = document.getElementById('text');
var matriz = [];
var adj = [];
var A11 = 0;
var A12 = 0;
var A21 = 0;
var A22 = 0;
var det = 0;
var inversa = [];

button.onclick = () => {
    if (a11.value === '' || a12.value === '' || a21.value === '' || a22.value === '') {
        alert('algun espacio está vacio');
    } else {
        matriz = [];
        adj = [];
        A11 = 0;
        A12 = 0;
        A21 = 0;
        A22 = 0;
        det = 0;
        inversa = [];
        n1 = parseInt(a11.value)
        n2 = parseInt(a12.value)
        n3 = parseInt(a21.value)
        n4 = parseInt(a22.value)
        matriz.push(n1, n2, n3, n4);
        det = (matriz[0] * matriz[3]) - (matriz[1] * matriz[2]);
        A11 = matriz[3];
        A12 = (-matriz[2]);
        A21 = (-matriz[1]);
        A22 = (matriz[0]);
        txt.innerHTML= '';
        adj.push(A11, A21, A12, A22);
        for (let i = 0; i < adj.length; i++) {
            const n = adj[i] / det;
            if (n.toString().includes('.')) {
                if (adj[i].toString().includes('-') && det.toString().includes('-')) {
                    inversa.push(`${(-1) * adj[i]}/${(-1) * det}`)
                } else if (adj[i].toString().includes('-') && !det.toString().includes('-')) {
                    inversa.push(`${adj[i]}/${det}`)
                } else if (!adj[i].toString().includes('-') && det.toString().includes('-')) {
                    inversa.push(`${(-1) * adj[i]}/${(-1) * det}`)
                } else {
                    inversa.push(`${adj[i]}/${det}`)
                }
            } else {
                inversa.push(n)
            }
        }
        for (let i = 0; i < inversa.length; i++) {
            const element = inversa[i];
            txt.innerHTML += `<div>${element}</div>`;
        }
    }
};