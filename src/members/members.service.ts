import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateMemberDto) {
    return await this.prisma.members.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.members.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.members.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

  async login(username: string) {
    const user = await this.prisma.members.findFirst({
      where: {
        username
      }
    })

    return user
  }
}
