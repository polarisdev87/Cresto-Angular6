import { Store } from '@ngrx/store';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngAcl]'
})

export class NgAclDirective {

  public constructor(
    // tslint:disable-next-line
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _store: Store<StoreStates>
  ) {}

  // value format : ['/widgets/exchangeRate', 'PUT']
  @Input() public set ngAcl(value: string[]) {
    this._store.select('acl').subscribe((aclMap: Acl) => {
      if (aclMap[value[0]] && aclMap[value[0]].includes('*')) {
        this._viewContainer.createEmbeddedView(this._templateRef);
        return;
      }

      if (aclMap[value[0]] && aclMap[value[0]].includes(value[1])) {
        this._viewContainer.createEmbeddedView(this._templateRef);
        return;
      }
      this._viewContainer.clear();
    });
  }
}

