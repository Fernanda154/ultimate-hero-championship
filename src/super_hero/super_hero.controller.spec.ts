import { Test, TestingModule } from '@nestjs/testing';
import { SuperHeroController } from './super_hero.controller';
import { SuperHeroService } from './super_hero.service';

describe('SuperHeroController', () => {
  let controller: SuperHeroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperHeroController],
      providers: [SuperHeroService],
    }).compile();

    controller = module.get<SuperHeroController>(SuperHeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
