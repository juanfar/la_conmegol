import { Injectable } from '@nestjs/common';

@Injectable()
export class FixtureService {

  createFixture({ teams,  isRoundTrip, tournamentId}): any {
    const ArrayMatchday = [];
    const Arrayfixtures = this.createFixtures(teams, isRoundTrip);

    Arrayfixtures.forEach((item, index) => {
      ArrayMatchday.push({ matchday: index + 1, matches: item });
    });

    return {
      fixture: {
        tournamentId,
        tournamentName: '',
        matchdays: ArrayMatchday
      }
    };
  }


  createFixtures(teams, isRoundTrip) {
    const n = teams.length;

    // Si el número de equipos es impar, agregar un equipo "fantasma"
    if (n % 2 !== 0) {
      teams.push("Equipo Fantasma");
    }

    const fixtures = [];
    const halfN = n / 2;

    // Generar los fixtures de la primera ronda
    for (let i = 0; i < halfN; i++) {
      const roundFixtures = [];
      for (let j = 0; j < halfN; j++) {
        const home = teams[j];
        const away = teams[n - 1 - j];
        if (home !== "Equipo Fantasma" && away !== "Equipo Fantasma") {
          roundFixtures.push([{ home, away, homeScore: 0, awayScore: 0 }]);
        }
      }
      fixtures.push(roundFixtures);

      // Rotar los equipos
      teams.splice(1, 0, teams.pop());
    }

    if (isRoundTrip) {
      // Generar los fixtures de la segunda ronda
      for (let i = 0; i < halfN; i++) {
        const roundFixtures = [];
        for (let j = 0; j < halfN; j++) {
          const home = teams[n - 1 - j];
          const away = teams[j];
          if (home !== "Equipo Fantasma" && away !== "Equipo Fantasma") {
            roundFixtures.push([{ home, away, homeScore: 0, awayScore: 0 }]);
          }
        }
        fixtures.push(roundFixtures);

        // Rotar los equipos
        teams.splice(1, 0, teams.pop());
      }
    }

    return fixtures;
  }
}