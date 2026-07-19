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