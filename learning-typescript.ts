interface Usuario {
    nome: string, email: string, telefone?: string
}

function enviarEmail({email, nome, telefone}: Usuario) {
    console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmail({
    email: "thiagogoisjunior@gmail.com",
    nome: "Thiago Gois",
    telefone: "24992378067",
});