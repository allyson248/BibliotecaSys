INSERT INTO tb_usuario
(nome, email, senha, tipo)

VALUES
(
    'Administrador',
    'admin@bibliotecasys.com',
    -- temporario para desenvolvimento
    '123456',
    'admin'
);

INSERT INTO tb_categoria (descricao)
VALUES
('Romance'),
('Fantasia'),
('Terror'),
('Suspense'),
('Drama'),
('Tecnologia'),
('História'),
('Ciência'),
('Biografia'),
('Infantil');

INSERT INTO tb_autor (nome, nacionalidade)
VALUES
('Machado de Assis', 'Brasileira'),
('Clarice Lispector', 'Brasileira'),
('J.K. Rowling', 'Britânica'),
('George Orwell', 'Britânica'),
('Gabriel García Márquez', 'Colombiana'),
('J.R.R. Tolkien', 'Britânica'),
('Agatha Christie', 'Britânica'),
('Stephen King', 'Americana'),
('Jane Austen', 'Britânica'),
('Fiódor Dostoiévski', 'Russa');

INSERT INTO tb_leitor
(nome, cpf, telefone, email)

VALUES
(
'João Silva',
'123.456.789-10',
'(18)99999-1111',
'joao@email.com'
),
(
'Maria Souza',
'987.654.321-00',
'(18)98888-2222',
'maria@email.com'
);