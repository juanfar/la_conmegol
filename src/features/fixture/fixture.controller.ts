import { Body, Controller, Get, Post } from '@nestjs/common';
import { FixtureService } from './fixture.service';
import { CreateFixtureDto } from './dto';

@Controller('createFixture')
export class FixtureController {

  constructor(private readonly fixtureService: FixtureService) {}

  @Post()
  createFixture(@Body() CreateFixtureDto: CreateFixtureDto): any {
    return this.fixtureService.createFixture(CreateFixtureDto);
  }

}
