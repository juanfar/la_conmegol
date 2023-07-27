import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixtureModule } from './features/fixture/fixture.module';
import { TournamentModule } from './features/tournament/tournament.module';

@Module({
  imports: [FixtureModule, TournamentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
