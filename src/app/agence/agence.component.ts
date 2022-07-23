import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Agence } from 'src/models/Agence';
import { AddAgenceComponent } from './add-agence/add-agence.component';
import { EditAgenceComponent } from './edit-agence/edit-agence.component';
import { AgenceService } from '../service/agence.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  agences!: Agence[];
  columns!: {}[];

  constructor(
    public dialogService: DialogService,
    private agenceService: AgenceService) { }

  ngOnInit(): void {
    this.getAgences();
    this.getColumns();
  }

  openAddAgence(): void {
    const ref = this.dialogService.open(AddAgenceComponent, {
      header: "Nouvelle Agence",
      width: "70%"
    })
  }

  openEditAgence(agence: Agence): void {
    const ref = this.dialogService.open(EditAgenceComponent, {
      header: "Modifier l'agence",
      width: "70%",
      data: agence
    })
  }

  getAgences(): void {
    this.agenceService.getAll().subscribe(
      (data: Agence[]) => this.agences = data
    )
  } 

  search(form: any): void{
    this.agenceService.search(form.key).subscribe(
      (data: Agence[]) => this.agences = data
    );
  }

  onDelete(agenceId?: number): void {
    this.agenceService.delete(agenceId).subscribe(() => this.getAgences());
  }

  update(agence: Agence): void {
    const ref = this.dialogService.open(EditAgenceComponent, {
      header: "Modifier l'agence",
      width: "70%",
      data: agence
    })
  }

  getColumns(): void {
    this.columns = [
      {
        field: 'id',
        header: "Identifiant"
      },
      {
        field: 'code_agence',
        header: "Code"
      },
      {
        field: 'name',
        header: "Nom"
      },
      {
        field: 'statut',
        header: "Statut"
      },
    ]
  }

  
}
