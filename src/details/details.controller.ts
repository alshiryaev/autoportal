import { Controller, Get } from '@nestjs/common';

@Controller('details')
export class DetailsController {

    @Get()
    getDetails() {
      return [
          {
              name: "H4 Osram AllSeasons",
              price: 800,
              number: 4
          }, 
          {
              name: "H1 Маяк",
              price: 400,
              number: 2
          }
      ]
    }

}
