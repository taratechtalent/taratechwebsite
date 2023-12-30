import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthStatus() {
    return {
      result: true,
      message: 'service is running',
    };
  }
}
