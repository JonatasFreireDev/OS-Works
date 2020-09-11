import { NotifierService } from './../../services/notifier/notifier.service';
import { IServiceOrder } from './../../model/IServiceOrder';
import { ServiceOrdersService } from './../../services/service-orders/service-orders.service';
import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss'],
})
export class ListServiceComponent implements OnInit {
  ordersList: IServiceOrder[];

  constructor(
    public loading: LoadingService,
    private notifier: NotifierService,
    private serviceOrders: ServiceOrdersService
  ) {}

  ngOnInit(): void {
    this.loading.setLoading();
    this.serviceOrders.getServiceOrders().subscribe(
      (orders) => {
        this.loading.setLoading();
        this.ordersList = orders;
      },
      (err) => {
        this.loading.setLoading();
        this.notifier.error(err);
      }
    );
  }
}
