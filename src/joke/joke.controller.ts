import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller('api')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random-joke')
  async getRandomJoke(): Promise<{ joke: string }> {
    const joke = await this.jokeService.getRandomJoke().toPromise();
    return { joke };
  }
}
