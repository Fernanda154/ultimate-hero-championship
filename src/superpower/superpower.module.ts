import { Module } from '@nestjs/common';
import { SuperpowerService } from './superpower.service';
import { SuperpowerController } from './superpower.controller';
import { Superpower } from './entities/superpower.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Superpower])],
  controllers: [SuperpowerController],
  providers: [SuperpowerService],
})
export class SuperpowerModule {}
