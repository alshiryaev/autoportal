import { Injectable } from '@nestjs/common';

@Injectable()
export class DetailsService {
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
            },
            {
                name: "Дворники всесезонные",
                price: 800,
                number: 4
            },
            {
                name: "Дворники летние",
                price: 900,
                number: 5
            },
            


        ]
    }
}
