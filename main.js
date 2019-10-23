//title and header name
const nameSequence = ["eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "eduardozgz", "#duardozgz", "%$uardozgz", "&)#ardozgz", "E#%!ardozgz", "Ed@$%dozgz", "Edu*[%ozgz", "Edua+@:zgz", "Eduar}&#gz", "Eduard+^@z", "Eduardo*%]", "Eduardo A^&!", "Eduardo Az$#!", "Eduardo Azn%*", "Eduardo Azna%", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Aznar", "Eduardo Azna%", "Eduardo Azn%*", "Eduardo Az$#!", "Eduardo A^&!", "Eduardo*%]", "Eduard+^@z", "Eduar}&#gz", "Edua+@:zgz", "Edu*[%ozgz", "Ed@$%dozgz", "E#%!ardozgz", "&)#ardozgz", "%$uardozgz", "#duardozgz"];
let currentNameSequence  = 0;

const nextNameSequence = () => {
    if (nameSequence.length === currentNameSequence) currentNameSequence = 0;
    document.title = nameSequence[currentNameSequence];
    document.getElementById("name").innerText = nameSequence[currentNameSequence];
    ++currentNameSequence;
};

setInterval(nextNameSequence, 120);
