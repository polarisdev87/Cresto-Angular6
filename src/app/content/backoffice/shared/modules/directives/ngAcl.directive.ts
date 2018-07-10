import { Store } from '@ngrx/store';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IRootState } from '../../../../../store/reducers';

@Directive({
  selector: '[appNgAcl]'
})

export class NgAclDirective {

  public constructor(
    // tslint:disable-next-line
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _store: Store<IRootState>
  ) {}

  // value format : ['/widgets/exchangeRate', 'PUT']
  @Input() public set appNgAcl(value: string[]) {
    this._store.select('backoffice', 'acl')
    .subscribe((aclMap: Acl) => {
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

