import { async, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

import { DragDropModule } from '@angular/cdk/drag-drop'

import { HomeComponent } from './home.component'
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component'

describe('~~ COMPONENT :: HomeComponent ~~', () => {
  let fixture
  let component: HomeComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, DragAndDropComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule, DragDropModule]
    }).compileComponents()
    fixture = TestBed.createComponent(HomeComponent)
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
