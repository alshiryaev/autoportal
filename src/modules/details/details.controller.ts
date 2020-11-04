import { Controller, Get } from '@nestjs/common';
import { DetailsService } from './services/details.service';

@Controller('details')
export class DetailsController {

    constructor(private detailsService: DetailsService) {
        
    }

    @Get()
    getDetails() {
      return this.detailsService.getDetails();
    }

}
