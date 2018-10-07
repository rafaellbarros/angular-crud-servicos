import { ChildComponent } from './child/child.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  formAnexarDocumentos: FormGroup;
  formInitialize = false;

  data = new Date();

  minDataProcuracao;
  maxDataProcuracao;

  anexoProcuracaoValid;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.validacaoDataProcuracacaoCentoOitentaDias();
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }


  private initForm() {
    this.formAnexarDocumentos = new FormGroup({

    });
    this.formInitialize = true;
  }

  public addFormControl(nome, formGroup) {
    this.formAnexarDocumentos.addControl(nome, formGroup);
  }


  public salvar() {
    console.log('form -> ', this.formAnexarDocumentos);
    this.getFormProcuracao();
  }


  private validacaoDataProcuracacaoCentoOitentaDias() {

    this.minDataProcuracao = new Date(
      this.data.getFullYear(),
      this.data.getMonth(),
      this.data.getDay() - 180,
    );

    this.maxDataProcuracao = new Date(
      this.data.getFullYear(),
      this.data.getMonth(),
      this.data.getDay() - 1
    );
  }

  private getFormProcuracao() {
    const formProcuracao = this.formAnexarDocumentos.controls['procuracao'];
    return formProcuracao;
  }

  public validateDataProcuracao() {
    const formProcuracao = this.getFormProcuracao();
    const dataProcuracaoValue = formProcuracao.get('dataProcuracao').value;
    if (dataProcuracaoValue !== null && dataProcuracaoValue !== undefined) {
        const dataProcuracao = this.formatDataProcuracao(dataProcuracaoValue);
        if (dataProcuracao > this.maxDataProcuracao || dataProcuracao < this.minDataProcuracao) {
          alert('Data Invalida!');
          formProcuracao.get('dataProcuracao').reset();
        }
    }
  }

  public anexoProcuracaoValido() {
    const formProcuracao = this.getFormProcuracao();
    if (formProcuracao !== undefined) {
      const formAnexoProcuracao = formProcuracao.get('formAnexoProcuracao').value;
      let valido = false;
      if (formAnexoProcuracao.length > 0) {
        valido = true;
      }
      return valido;
    }
  }

  public anexoIdentidadeProcuradorValido() {
    const formProcuracao = this.getFormProcuracao();
    if (formProcuracao !== undefined) {
      const formAnexoIdentidadeProcuradorValido = formProcuracao.get('formAnexoIdentidadeProcurador').value;
      let valido = false;
      if (formAnexoIdentidadeProcuradorValido.length > 0) {
        valido = true;
      }
      return valido;
    }
  }

  public dataProcuracaoValido() {
    const formProcuracao = this.getFormProcuracao();
    let valido;
    if (formProcuracao !== undefined) {
      const dataProcuracaoValue = formProcuracao.get('dataProcuracao').value;

      if (dataProcuracaoValue !== null) {
        valido = true;
      }

      if (dataProcuracaoValue === '') {
        valido = false;
      }
    }
    return valido;
  }

  public formValido() {
    let valido = false;
    
    if (this.anexoProcuracaoValido() && this.dataProcuracaoValido() && this.anexoIdentidadeProcuradorValido()) {
      valido = true;
    }

    return valido;
  }

  private formatDataProcuracao(dataProcuracao) {
    const data = dataProcuracao.split('-');
    const ano = data[0];
    const mes = data[1];
    const dia = data[2];
    const dataFormatada = `${mes}/${dia}/${ano}`;
    return new Date(dataFormatada);
  }

}
