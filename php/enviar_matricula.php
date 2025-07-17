<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $student_name = htmlspecialchars($_POST['student-name']);
    $birth_date = htmlspecialchars($_POST['birth-date']);
    $grade_level = htmlspecialchars($_POST['grade-level']);
    $parent_name = htmlspecialchars($_POST['parent-name']);
    $parent_email = htmlspecialchars($_POST['parent-email']);
    $parent_phone = htmlspecialchars($_POST['parent-phone']);
    
    // Destinatário do e-mail (seu e-mail)
    $to = "franeojosejoao@gmail.com";
    
    // Assunto do e-mail
    $subject = "Nova Pré-Matrícula - Colégio Alpega";
    
    // Corpo do e-mail
    $message = "
    <html>
    <head>
        <title>Nova Pré-Matrícula</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .data-item { margin-bottom: 10px; }
            .data-label { font-weight: bold; color: #2c3e50; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>Nova Pré-Matrícula Recebida</h2>
        </div>
        <div class='content'>
            <div class='data-item'><span class='data-label'>Aluno:</span> $student_name</div>
            <div class='data-item'><span class='data-label'>Data de Nascimento:</span> $birth_date</div>
            <div class='data-item'><span class='data-label'>Série/Ano Desejado:</span> $grade_level</div>
            <div class='data-item'><span class='data-label'>Responsável:</span> $parent_name</div>
            <div class='data-item'><span class='data-label'>E-mail:</span> $parent_email</div>
            <div class='data-item'><span class='data-label'>Telefone:</span> $parent_phone</div>
            <div class='data-item'><span class='data-label'>Data do Envio:</span> " . date('d/m/Y H:i') . "</div>
        </div>
    </body>
    </html>
    ";
    
    // Cabeçalhos do e-mail
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $parent_email\r\n";
    $headers .= "Reply-To: $parent_email\r\n";
    
    // Enviar e-mail
    if (mail($to, $subject, $message, $headers)) {
        // Redirecionar para página de sucesso
        header("Location: matricula_sucesso.html");
        exit();
    } else {
        // Redirecionar para página de erro
        header("Location: matricula_erro.html");
        exit();
    }
} else {
    // Se alguém tentar acessar diretamente o arquivo
    header("Location: index.html");
    exit();
}
?>