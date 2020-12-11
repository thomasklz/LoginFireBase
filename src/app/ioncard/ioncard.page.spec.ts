import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IoncardPage } from './ioncard.page';

describe('IoncardPage', () => {
  let component: IoncardPage;
  let fixture: ComponentFixture<IoncardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoncardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IoncardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
