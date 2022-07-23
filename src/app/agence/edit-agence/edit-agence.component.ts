import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Agence } from 'src/models/Agence';
import { AgenceService } from '../../service/agence.service';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.css']
})
export class EditAgenceComponent implements OnInit {

  editAgenceForm!: FormGroup;
  agence!: Agence;

  constructor(
    private fb: FormBuilder,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private agenceService: AgenceService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.editAgenceForm = this.fb.group({
      code: [ this.config.data.code_agence, Validators.required],
      nom: [ this.config.data.name, Validators.required],
      rib: [ this.config.data.rib, Validators.required],
      statut: [ this.config.data.statut, Validators.required]
    })
  }

  submit(): void {
    let data = this.editAgenceForm.value;

    let status = (data.statut == '1') ? true : false;

    this.agence = {
      id: this.config.data.id,
      codeagence: data.code,
      name: data.nom,
      rib: data.rib,
      statut: status 
    }
    
    this.agenceService.update(this.agence).subscribe();
    this.messageService.add({severity:'success', summary:'Modification', detail:'Agence modifiee avec succes'});
  }
}
