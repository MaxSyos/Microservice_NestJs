import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipient_id, category, content } = body;

     await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category, 
        recipient_id,
      }
    });
  }
}
