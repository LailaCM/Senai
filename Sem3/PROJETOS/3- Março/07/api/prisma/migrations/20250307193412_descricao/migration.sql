-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `clientes_cpf_key`(`cpf`),
    UNIQUE INDEX `clientes_cnpj_key`(`cnpj`),
    UNIQUE INDEX `clientes_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nasc` DATETIME(3) NOT NULL,
    `salario` INTEGER NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `funcionarios_cpf_key`(`cpf`),
    UNIQUE INDEX `funcionarios_email_key`(`email`),
    UNIQUE INDEX `funcionarios_nasc_key`(`nasc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `precocompra` INTEGER NOT NULL,
    `precovenda` INTEGER NOT NULL,
    `fornecedor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
