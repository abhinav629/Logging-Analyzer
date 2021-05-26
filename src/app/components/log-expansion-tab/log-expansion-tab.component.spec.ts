import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogExpansionTabComponent } from './log-expansion-tab.component';

describe('LogExpansionTabComponent', () => {
  let component: LogExpansionTabComponent;
  let fixture: ComponentFixture<LogExpansionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogExpansionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogExpansionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
