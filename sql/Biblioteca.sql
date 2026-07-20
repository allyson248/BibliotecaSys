-- =====================================================
-- Projeto: BibliotecaSys
-- Autor: Allyson Dias
-- Descrição: Banco de dados do sistema BibliotecaSys
-- =====================================================

DROP DATABASE IF EXISTS bibliotecasys;
CREATE DATABASE bibliotecasys;
USE bibliotecasys;

CREATE TABLE tb_usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('admin', 'bibliotecario') NOT NULL,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE tb_leitor(
    id_leitor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf  VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100) NOT NULL UNIQUE,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE tb_autor(
    id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(100)
);

CREATE TABLE tb_categoria(
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(60) NOT NULL UNIQUE
);

CREATE TABLE tb_livro (
    id_livro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    ano YEAR NOT NULL,
    editora VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL DEFAULT 0 CHECK(quantidade >= 0),
    capa VARCHAR(255),

    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,

    FOREIGN KEY (autor_id)
        REFERENCES tb_autor(id_autor)
        ON DELETE RESTRICT,

    FOREIGN KEY (categoria_id)
        REFERENCES tb_categoria(id_categoria)
        ON DELETE RESTRICT
);

CREATE TABLE tb_emprestimo(
    id_emprestimo INT AUTO_INCREMENT PRIMARY KEY,

    livro_id INT NOT NULL,
    leitor_id INT NOT NULL,

    data_emprestimo DATE NOT NULL,
    data_prevista DATE NOT NULL,
    data_devolucao DATE,

    status ENUM('emprestado', 'devolvido') NOT NULL,

    FOREIGN KEY (livro_id)
        REFERENCES tb_livro(id_livro)
        ON DELETE RESTRICT,

    FOREIGN KEY (leitor_id)
        REFERENCES tb_leitor(id_leitor)
        ON DELETE RESTRICT
);