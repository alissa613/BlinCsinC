import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, async } from '@angular/core/testing'

//import { MatToolbarModule } from '@angular/material/toolbar'
describe('~~ COMPONENT :: AppComponent ~~', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [/*MatToolbarModule, */RouterTestingModule]
    }).compileComponents()
  }))
  it('$$ should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it(`$$ should have no title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toBeUndefined()
  }))
})
