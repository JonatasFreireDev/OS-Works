import { ThemeService } from './../../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from './../../services/loading/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public loadingService: LoadingService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {}
}
