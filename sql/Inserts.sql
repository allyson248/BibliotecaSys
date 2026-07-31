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

INSERT INTO tb_livro
(titulo, isbn, ano, editora, quantidade, capa, autor_id, categoria_id)
VALUES
(
    'Dom Casmurro',
    '9788535914849',
    1899,
    'Principis',
    5,
    NULL,
    1,
    1
),
(
    'A Hora da Estrela',
    '9788535928303',
    1977,
    'Rocco',
    4,
    NULL,
    2,
    5
),
(
    'Harry Potter e a Pedra Filosofal',
    '9788532511010',
    1997,
    'Rocco',
    8,
    NULL,
    3,
    2
),
(
    '1984',
    '9788535914840',
    1949,
    'Companhia das Letras',
    6,
    NULL,
    4,
    4
),
(
    'Cem Anos de Solidão',
    '9788501012078',
    1967,
    'Record',
    3,
    NULL,
    5,
    1
),
(
    'O Senhor dos Anéis',
    '9788533613379',
    1954,
    'HarperCollins',
    7,
    NULL,
    6,
    2
),
(
    'Assassinato no Expresso do Oriente',
    '9788525433176',
    1934,
    'L&PM',
    4,
    NULL,
    7,
    4
),
(
    'O Iluminado',
    '9788556510464',
    1977,
    'Suma',
    2,
    NULL,
    8,
    3
),
(
    'Orgulho e Preconceito',
    '9788544001820',
    1813,
    'Martin Claret',
    5,
    NULL,
    9,
    1
),
(
    'Crime e Castigo',
    '9788573266467',
    1866,
    'Editora 34',
    3,
    NULL,
    10,
    1
);