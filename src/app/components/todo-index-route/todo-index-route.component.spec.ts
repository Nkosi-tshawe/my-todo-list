import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIndexRouteComponent } from './todo-index-route.component';

describe('TodoIndexRouteComponent', () => {
  let component: TodoIndexRouteComponent;
  let fixture: ComponentFixture<TodoIndexRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoIndexRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIndexRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
