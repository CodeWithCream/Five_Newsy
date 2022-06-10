import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  @Input() message!: string;
  @Input() backRoute!: string;
  @Input() buttonText!: string;

  constructor(private router: Router) {
    this.message = history.state.message;
    this.backRoute = history.state.backRoute ?? '/';
    this.buttonText = history.state.buttonText ?? 'OK';
  }

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/']);
  }
}
