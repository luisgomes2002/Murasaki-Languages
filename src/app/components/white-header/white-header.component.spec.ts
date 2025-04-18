import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteHeaderComponent } from './white-header.component';

describe('WhiteHeaderComponent', () => {
  let component: WhiteHeaderComponent;
  let fixture: ComponentFixture<WhiteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
