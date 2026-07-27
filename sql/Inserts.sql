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