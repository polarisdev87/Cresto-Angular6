import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopypaste]',
  exportAs: 'copypaste'
})
export class CopypasteDirective {


  public constructor(
    private _elementRef: ElementRef
  ) {
  }


  public copy(): void {
    const el = this._elementRef.nativeElement;
    const range = document.createRange();
    el.contenteditable = true;
    el.readonly = false;
    el.focus();
    range.selectNodeContents(el);
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999);
    el.select();
    alert(el.value);
    document.execCommand('copy');
  }

}
