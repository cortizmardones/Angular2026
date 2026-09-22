import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogginComponent } from './loggin-component';

describe('LogginComponent', () => {
  let component: LogginComponent;
  let fixture: ComponentFixture<LogginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
