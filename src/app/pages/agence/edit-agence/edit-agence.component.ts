import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgenceDto } from 'src/app/api/models';
import { AgenceService } from 'src/app/service/agence.service';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.css']
})
export class EditAgenceComponent implements OnInit {

  editAgenceForm!: FormGroup;
  agence!: AgenceDto;

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
    data.id = this.config.data.id;

    let status = (data.statut == '1') ? true : false;

    this.agence = {
      codeAgence: data.code,
      name: data.nom,
      RIBCompteDepot: data.rib,
      statut: status 
    }
    
    this.agenceService.update(data.id, this.agence).subscribe();
    this.messageService.add({severity:'success', summary:'Modification', detail:'Agence modifiee avec succes'});
  }
}
