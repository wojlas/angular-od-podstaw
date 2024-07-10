import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor(
    public userService: UserService
  ) {}

  public ngOnInit(): void {
    console.log('OnInit');
  }
}
