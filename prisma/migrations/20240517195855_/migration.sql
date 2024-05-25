-- CreateTable
CREATE TABLE `clients` (
    `numFidelite` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `motDePasse` VARCHAR(191) NOT NULL,
    `nbrePoints` INTEGER NULL,
    `derniereVisite` DATETIME(3) NULL,

    PRIMARY KEY (`numFidelite`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `Date` DATETIME(3) NOT NULL,
    `produit` VARCHAR(191) NOT NULL,
    `prix` INTEGER NOT NULL,

    PRIMARY KEY (`Date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
