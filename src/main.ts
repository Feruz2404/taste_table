import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
async function start() {
  try {
    const PORT = process.env.PORT || 3001;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api");


    const config = new DocumentBuilder()
      .setTitle("Taste Table")
      .setDescription("My Taste Table project REST API")
      .setVersion("1.0")
      .addTag(
        "NestJs, validation, swagger, guard, mongo, mailer, bot, sms"
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/docs", app, document);

    await app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
