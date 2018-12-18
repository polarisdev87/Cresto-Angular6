import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

import { ModalService } from '../../../../../../shared/services/modal.service';

@Component({
  selector: 'app-modal',
  template: '<ng-content></ng-content>'
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  public id: string = '';
  public constructor(
    private modalService: ModalService,
    private el: ElementRef
  ) { }

  public ngOnInit() {
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.el.nativeElement);

    // close modal on background click
    this.el.nativeElement.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  public ngOnDestroy() {
    this.modalService.remove(this.id);
    this.el.nativeElement.remove();
  }

  // open modal
  public open() {
    this.el.nativeElement.style.display = 'block';
    const container = document.getElementById('backoffice');
    if (container) {
      container.classList.add('modal-open');
    }
  }

  // close modal
  public close() {
    this.el.nativeElement.style.display = 'none';
    const container = document.getElementById('backoffice');
    if (container) {
      container.classList.remove('modal-open');
    }
  }
}