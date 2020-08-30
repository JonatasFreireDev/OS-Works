import { ThemeService } from './../../services/theme/theme.service';
import { Component, OnInit, Input } from '@angular/core';
import { LoadingService } from './../../services/loading/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}
}
