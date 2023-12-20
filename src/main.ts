import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/guard/jwt.guard';
declare const module: any;
async function bootstrap() {
const app = await NestFactory.create(AppModule, {cors: true});
app.useGlobalGuards(new JwtAuthGuard());

app.listen(5000)
.then(() => {
console.log("successfully stared on port 5000");
})
.catch((error) => {
console.log(error);
})
}
bootstrap();