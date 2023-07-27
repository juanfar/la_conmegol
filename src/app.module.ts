import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixtureModule } from './features/fixture/fixture.module';

@Module({
  imports: [FixtureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
