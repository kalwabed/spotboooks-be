import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from 'nestjs-prisma';
import { MembersModule } from './members/members.module';

@Module({
  imports: [
    BooksModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    MembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
