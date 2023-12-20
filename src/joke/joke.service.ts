import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class JokeService {
  private readonly chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private readonly httpService: HttpService) {}

  getRandomJoke(): Observable<string> {
    return this.httpService
      .get(this.chuckNorrisApiUrl)
      .pipe(map((response: AxiosResponse<{ value: string }>) => response.data.value));
  }
}
