import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agence } from 'src/models/Agence';
import { AgenceService } from '../../service/agence.service';

@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.css']
})
export class AddAgenceComponent implements OnInit {

  addAgenceForm!: FormGroup;
  agence!: Agence;

  constructor(
    private fb: FormBuilder,
    private agenceService: AgenceService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addAgenceForm = this.fb.group({
      code: ['', Validators.required],
      nom: ['', Validators.required],
      rib: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  submit(): void {
    console.log(this.addAgenceForm.value);

    let data = this.addAgenceForm.value;

    let status = (data.status == '1') ? true : false;

    this.agence = {
      codeagence: data.code,
      name: data.nom,
      rib: data.rib,
      statut: status 
    }

    this.agenceService.create(this.agence).subscribe();
  } 
}
