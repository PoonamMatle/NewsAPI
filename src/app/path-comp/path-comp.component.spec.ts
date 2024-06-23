import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathCompComponent } from './path-comp.component';

describe('PathCompComponent', () => {
  let component: PathCompComponent;
  let fixture: ComponentFixture<PathCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PathCompComponent]
    });
    fixture = TestBed.createComponent(PathCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
