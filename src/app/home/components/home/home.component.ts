import { LoadingService } from './../../../shared/services/loading.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  isLoading$: Observable<boolean>;

  @ViewChildren(RouterLinkActive, { read: ElementRef })
  linksElements!: QueryList<ElementRef>;
  @ViewChild('nav') nav!: ElementRef;

  constructor(loadingService: LoadingService) {
    this.isLoading$ = loadingService.isLoading$;
  }

  ngAfterViewInit(): void {
    this.scrollToActiveLink();
  }

  scrollToActiveLink(): void {
    timer(10).subscribe(() => {
      const activeLink: HTMLElement = this.linksElements.find((el) =>
        el.nativeElement.classList.contains('active')
      )?.nativeElement;
      this.nav.nativeElement.scroll({
        left: activeLink?.offsetLeft,
      });
    });
  }
}
