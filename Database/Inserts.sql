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