import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  formProcuracao: FormGroup;
  formInitialize = false;

  @Output()
  readyFormEvent = new EventEmitter<FormGroup>();

  @Input()
  dadosCandidato: any;

  @Input()
  max: Date;

  @Input()
  min: Date;

  @Input()
  anexoProcuracaoValido: boolean;

  @Input()
  anexoIdentidadeProcuradorValido: boolean;

  @Input()
  dataProcuracaoValido: boolean;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formProcuracao = new FormGroup({
      dataProcuracao: new FormControl(null),
      formAnexoProcuracao: new FormControl([]),
      formAnexoIdentidadeProcurador: new FormControl([])
    });
    this.formInitialize = true;
    this.readyFormEvent.emit(this.formProcuracao);
  }
}
