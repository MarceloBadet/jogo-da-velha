import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';

describe('JogoDaVelhaComponent', () => {
  let component: JogoDaVelhaComponent;
  let fixture: ComponentFixture<JogoDaVelhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaComponent ],
      providers: [ JogoDaVelhaService]
    })
    .compileComponents();
  }));

});
