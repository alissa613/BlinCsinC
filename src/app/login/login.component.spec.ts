import { async, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

import { DragDropModule } from '@angular/cdk/drag-drop'

import { LoginComponent } from './login.component'

describe('~~ COMPONENT :: LoginComponent ~~', () => {
  let fixture
  let component: LoginComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule]
    }).compileComponents()
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
  }))
  it('$$ should create the app', async(() => {
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  describe(':: When ngOnInit is called', () => {
    it('$$ should instantiate testVar on `this`', async(() => {
      fixture.detectChanges()
      fixture.whenStable().then(() => {
        expect(component.testVar).toBe('test')
      })
    }))
  })
})
