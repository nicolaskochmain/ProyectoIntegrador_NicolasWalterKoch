import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent {
  nombreE!: string;
  descripcionE!: string;

  constructor(
    private educacionService: EducacionService,
    private router: Router
  ) {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionService.save(educacion).subscribe(
      (data) => {
        alert('Educacion creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo la creacio de educacion');
        this.router.navigate(['']);
      }
    );
  }
}
