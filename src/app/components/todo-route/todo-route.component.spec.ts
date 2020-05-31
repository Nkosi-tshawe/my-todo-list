import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRouteComponent } from './todo-route.component';

describe('TodoRouteComponent', () => {
  let component: TodoRouteComponent;
  let fixture: ComponentFixture<TodoRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
