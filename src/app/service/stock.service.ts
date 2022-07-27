import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApprovisionnementDto } from '../api/models';
import { ApprovisionnementResourceService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  constructor(
    private stockService: ApprovisionnementResourceService  ) { }

  create(stock: ApprovisionnementDto): Observable<ApprovisionnementDto> {
    return this.stockService.apiStockCreatePost({body: stock});
  }
}
