import { BadRequestException, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SuccessMessage } from 'common/decorators/success-message.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SuccessMessage('Server is running successfully')
  getHello(): string {
    return this.appService.getHello();
  }
}
