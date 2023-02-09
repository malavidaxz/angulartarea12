import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    btnactivar: boolean = false;
    mensajeExito: boolean = false;
    //crea atributo de tipo FormBuilder
    constructor(private formBuilder : FormBuilder) { }
    // Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
    nombres: ['', Validators.required],
    email: ['', Validators.required],
    telefono:[ '', { validators: [Validators.required, Validators.pattern('[0-9]{9}')]  } ],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
    });
    
    // Generar un metodo get para cada campo del formularior reactivo

    get nombres(){ return this.registroForm.get('nombres'); }
    get email(){ return this.registroForm.get('email'); }
    get telefono(){ return this.registroForm.get('telefono'); }
    get asunto(){ return this.registroForm.get('asunto'); }
    get mensaje(){ return this.registroForm.get('mensaje'); }
  
  
    datos = new Array;
  
    onSubmit(){
      if(!this.registroForm.valid){
      alert('Alguna validación no se ha cumplido');
      return;
      }
      this.datos.push({
      'Nombres': this.registroForm.get('nombres')?.value,
      'Email': this.registroForm.get('email')?.value,
      'Telefono': this.registroForm.get('telefono')?.value,
      'Asunto': this.registroForm.get('asunto')?.value,
      'Mensaje': this.registroForm.get('mensaje')?.value,
      });
      
      this.mensajeExito = true;
      }
  
      Refrescar(){
        this.registroForm.reset();
        }

        Activar(){
          if(this.registroForm.valid){
            this.btnactivar = true;
          } else {
            this.btnactivar = false;
          }
        }
        
          ngOnInit(): void {
            this.registroForm.statusChanges.subscribe(status => {
              this.btnactivar = status === 'VALID';
            });
          }
  

}
