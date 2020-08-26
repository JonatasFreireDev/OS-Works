import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //@ViewChild('chart') chart: HTMLCanvasElement;

  constructor(public isLoading: LoadingService) {}

  ngOnInit(): void {
    this.initChart('myChart');
    this.initChart('myChart2');
  }

  initChart(idCanvas: string): void {
    new Chart(idCanvas, {
      type: 'pie',
      data: {
        labels: ['Abertas', 'Fechadas'],
        datasets: [
          {
            label: '# of Service Orders',
            data: [31, 19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
            ],
            //borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          },
        ],
      },
    });
  }
}
