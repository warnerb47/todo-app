import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPublicLibComponent } from './my-public-lib.component';

describe('MyPublicLibComponent', () => {
  let component: MyPublicLibComponent;
  let fixture: ComponentFixture<MyPublicLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPublicLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPublicLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
