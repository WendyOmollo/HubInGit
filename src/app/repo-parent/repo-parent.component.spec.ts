import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoParentComponent } from './repo-parent.component';

describe('RepoParentComponent', () => {
  let component: RepoParentComponent;
  let fixture: ComponentFixture<RepoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
