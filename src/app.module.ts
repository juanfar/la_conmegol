import { Module } from '@nestjs/common';
import { FixtureModule } from './features/fixture/fixture.module';
import { TournamentModule } from './features/tournament/tournament.module';

@Module({
  imports: [FixtureModule, TournamentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
