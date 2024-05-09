import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { User } from "src/users/entities/user.entity";

export default class UserSeeder implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);

    const userData = [
      { name: "Tonny Weslley", email: "tonny@example.com", password: "123", cpf:"000.000.000-00", active: true},
      { name: "Israel Kleber", email: "israel@example.com", password: "123", cpf:"000.000.000-10", active: true },
      { name: "Vitória", email: "vitória@example.com", password: "123", cpf:"000.000.000-20", active: true },
      {
        name: "Fernanda Guilherme",
        email: "fernanda@example.com",
        password: "123",
        cpf:"000.000.000-50", active: true
      },
    ];

    try {
      await userRepository.insert(userData);
      console.log("Usuários inseridos com sucesso");
    } catch (error) {
      console.error("Erro ao inserir usuários:", error);
    }
  }
}