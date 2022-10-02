-- 1. Escreva um script em SQL para a criação das tabelas 
CREATE TABLE usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR (50) NOT NULL,
    Data_Nascimento DATE NOT NULL,
    Data_Criacao DATE NOT NULL,
    Data_Alteracao DATE,
    Data_Exclusao DATE,
    CONSTRAINT FK_CRIADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    CONSTRAINT FK_ALTERADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    CONSTRAINT FK_EXCLUIDO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    IND_Ativo BOOLEAN
);

CREATE TABLE produtos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR (50) NOT NULL,
    VALOR DECIMAL(7, 2) NOT NULL,
    DATA_CRIACAO DATE NOT NULL,
    DATA_ALTERACAO DATE,
    DATA_EXCLUSAO DATE,
    CONSTRAINT FK_CRIADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID) NOT NULL,
    CONSTRAINT FK_ALTERADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    CONSTRAINT FK_EXCLUIDO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
);

CREATE TABLE vendas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    DATA_CRIACAO DATE NOT NULL,
    DATA_ALTERACAO DATE,
    DATA_EXCLUSAO DATE,
    CONSTRAINT FK_CRIADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID) NOT NULL,
    CONSTRAINT FK_ALTERADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    CONSTRAINT FK_EXCLUIDO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    IND_Ativo BOOLEAN
);

CREATE TABLE vendas_produtos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_VENDA INT FOREIGN KEY REFERENCES vendas(ID),
    ID_PRODUTO INT FOREIGN KEY REFERENCES produto(ID),
    VALOR DECIMAL(7, 2) NOT NULL,
    DESCONTO DECIMAL(7, 2) NOT NULL,
    VALOR_FINAL DECIMAL(7, 2) NOT NULL,
    DATA_CRIACAO DATE NOT NULL,
    DATA_ALTERACAO DATE,
    DATA_EXCLUSAO DATE,
    CONSTRAINT FK_CRIADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID) NOT NULL,
    CONSTRAINT FK_ALTERADO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    CONSTRAINT FK_EXCLUIDO_POR FOREIGN KEY (ID) REFERENCES usuarios (ID),
    IND_Ativo BOOLEAN
);

-- 2. Escreva um script em SQL para 2 inserções em cada tabela.
-- Tabela Usuários
INSERT INTO usuarios ( NOME, Data_Nascimento, Data_Criacao, FK_CRIADO_POR, IND_Ativo)
VALUES ( 'Admin1', '12/10/1978', '01/10/2022', 0, true);

INSERT INTO usuarios ( NOME, Data_Nascimento, Data_Criacao, FK_CRIADO_POR, IND_Ativo)
VALUES ('Gabriel','13/02/2002','01/10/2022',10,true );

-- Tabela Produtos
INSERT INTO produtos ( NOME, VALOR, DATA_CRIACAO, FK_CRIADO_POR )
VALUES ('Coca-cola',5.00,'01/10/2022',10 );

INSERT INTO produtos ( NOME, VALOR, DATA_CRIACAO, FK_CRIADO_POR )
VALUES ('Fanta',4.00,'01/10/2022',10 );

-- Tabela Vendas
INSERT INTO vendas ( DATA_CRIACAO, FK_CRIADO_POR, IND_Ativo)
VALUES ( '01/10/2022', 10, true )

INSERT INTO vendas ( DATA_CRIACAO, FK_CRIADO_POR, IND_Ativo)
VALUES ( '30/09/2022', 10, true )

-- Tabela vendas_Produtos
INSERT INTO ( ID_VENDA,  ID_PRODUTO,  VALOR,  DESCONTO,  VALOR_FINAL,  DATA_CRIACAO, FK_CRIADO_POR, IND_Ativo )
VALUES ( 0, 0, 5.00, 0, 5.00, '01/10/2022', 10, true )

INSERT INTO ( ID_VENDA,  ID_PRODUTO,  VALOR,  DESCONTO,  VALOR_FINAL,  DATA_CRIACAO, FK_CRIADO_POR, IND_Ativo )
VALUES ( 1, 1, 4.00, 0, 4.00, '01/10/2022', 10, true )



-- 3. Crie uma trigger para a tabela de produtos que notifique o e-mail 
-- ‘contato@sysmap.com.br’ toda vez que um produto for cadastrado.

-- 4. Crie uma trigger para a tabela de vendas que notifique o e-mail ‘contato@sysmap.com.br’
--toda vez que uma venda for criada.

-- 5. Crie uma procedure que envie um e-mail para ‘contato@sysmap.com.br’ com o resumo
-- dos 5 produtos mais vendidos dos últimos 7 dias.