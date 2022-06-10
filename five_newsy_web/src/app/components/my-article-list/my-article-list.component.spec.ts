import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticleListComponent } from './my-article-list.component';

describe('MyArticleListComponent', () => {
  let component: MyArticleListComponent;
  let fixture: ComponentFixture<MyArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyArticleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
