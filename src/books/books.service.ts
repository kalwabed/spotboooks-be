import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import type { CreateBookDto } from './dto/create-book.dto';
import type { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateBookDto) {
    await this.prisma.books.create({
      data: {
        title: data.title,
        writer: data.writer,
        point: data.point,
        tags: data.tags,
        cover_image: data.coverImage,
      },
    });
  }

  async findAll() {
    return await this.prisma.books.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.books.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: string) {
    return await this.prisma.books.delete({ where: { id } })
  }
}
