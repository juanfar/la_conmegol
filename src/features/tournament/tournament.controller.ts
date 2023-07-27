import { Body, Controller, Post } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto';

@Controller('tournament')
export class TournamentController {

  constructor(private readonly tournamentService: TournamentService) {}

  @Post()
  createFixture(@param() name: string): any {
    const userId = 'dadsa'
    return this.tournamentService.createTournament(name, userId);
  }
}
function param(): (target: TournamentController, propertyKey: "createFixture", parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

