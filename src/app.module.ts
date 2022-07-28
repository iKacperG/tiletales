import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorsModule } from './colors/colors.module';
import { AnimationModule } from './animations/animation.module';
import { FieldModule } from './fields/field.module';
import { FrameModule } from './frames/frame.module';

@Module({
  imports: [
    ColorsModule,
    AnimationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FieldModule,
    FrameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
