import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateOrderDto) {
    const book = await this.prisma.books.findUnique({
      where: { id: data.bookId },
      select: { point: true }
    })
    const createOrder = this.prisma.orders.create({
      data: {
        qty: data.qty,
        book_id: data.bookId,
        member_id: data.memberId,
      },
    });
    const updateMemberPoint = this.prisma.members.update({
      where: { id: data.memberId },
      data: {
        point: {
          decrement: book.point
        }
      }
    })

    await Promise.all([createOrder, updateMemberPoint])
    return 'ok'
  }

  async findAll() {
    return await this.prisma.orders.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: string) {
    const order = await this.prisma.orders.findUnique({
      where: { id },
      select: {
        book: true,
        member: true,
      },
    });
    await this.prisma.members.update({
      where: {
        id: order.member.id,
      },
      data: {
        point: {
          increment: order.book.point,
        },
      },
    });
    return await this.prisma.orders.delete({
      where: { id },
    });
  }

  async memberOders(id: string) {
    return await this.prisma.orders.findMany({
      where: { member_id: id },
      include: {
        book: true
      }
    })
  }
}
