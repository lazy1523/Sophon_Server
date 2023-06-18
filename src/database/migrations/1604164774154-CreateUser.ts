import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1604164774154 implements MigrationInterface {
  name = 'CreateUser1604164774154';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`file\` (\`id\` char(36) NOT NULL DEFAULT (UUID()), \`path\` varchar(255) NOT NULL, CONSTRAINT \`PK_36b46d232307066b3a2c9ea3a1d\` PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`role\` (\`id\` int NOT NULL, \`name\` varchar(255) NOT NULL, CONSTRAINT \`PK_b36bcfe02fc8de3c57a8b2391c2\` PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`status\` (\`id\` int NOT NULL, \`name\` varchar(255) NOT NULL, CONSTRAINT \`PK_e12743a7086ec826733f54e1d95\` PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255), \`password\` varchar(255), \`provider\` varchar(255) NOT NULL DEFAULT 'email', \`socialId\` varchar(255), \`firstName\` varchar(255), \`lastName\` varchar(255), \`hash\` varchar(255), \`createdAt\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` TIMESTAMP, \`photoId\` char(36), \`roleId\` int, \`statusId\` int, CONSTRAINT \`UQ_e12875dfb3b1d92d7d7c5377e22\` UNIQUE (\`email\`), CONSTRAINT \`PK_cace4a159ff9f2512dd42373760\` PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_9bd2fe7a8e694dedc4ec2f666f\` ON \`user\` (\`socialId\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_58e4dbff0e1a32a9bdc861bb29\` ON \`user\` (\`firstName\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_f0e1b4ecdca13b177e2e3a0613\` ON \`user\` (\`lastName\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_e282acb94d2e3aec10f480e4f6\` ON \`user\` (\`hash\`)`,
    );
    await queryRunner.query(
      `CREATE TABLE \`forgot\` (\`id\` int NOT NULL AUTO_INCREMENT, \`hash\` varchar(255) NOT NULL, \`createdAt\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` TIMESTAMP, \`userId\` int, CONSTRAINT \`PK_087959f5bb89da4ce3d763eab75\` PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_df507d27b0fb20cd5f7bef9b9a\` ON \`forgot\` (\`hash\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_75e2be4ce11d447ef43be0e374f\` FOREIGN KEY (\`photoId\`) REFERENCES \`file\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c28e52f758e7bbc53828db92194\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_dc18daa696860586ba4667a9d31\` FOREIGN KEY (\`statusId\`) REFERENCES \`status\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`forgot\` ADD CONSTRAINT \`FK_31f3c80de0525250f31e23a9b83\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`forgot\` DROP FOREIGN KEY \`FK_31f3c80de0525250f31e23a9b83\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_dc18daa696860586ba4667a9d31\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c28e52f758e7bbc53828db92194\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_75e2be4ce11d447ef43be0e374f\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_df507d27b0fb20cd5f7bef9b9a\` ON \`forgot\``,
    );
    await queryRunner.query(`DROP TABLE \`forgot\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e282acb94d2e3aec10f480e4f6\` ON \`user\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_f0e1b4ecdca13b177e2e3a0613\` ON \`user\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_58e4dbff0e1a32a9bdc861bb29\` ON \`user\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_9bd2fe7a8e694dedc4ec2f666f\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`status\``);
    await queryRunner.query(`DROP TABLE \`role\``);
    await queryRunner.query(`DROP TABLE \`file\``);
  }
}
