import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-animals',
  styleUrl: './animals.css',
  templateUrl: './animals.html',
})

export class Animals {
  //Questo è per creare un singolo animale, ma non è utile per la gestione di una lista di animali 
  // animal: any ={ 
  //   tipo: "Mammifero", 
  //   specie: "Cane", 
  //   nome: "Bobi", 
  //   dob: "2020-01-01"
  // };

  animals: any[] = [
    { tipo: "Mammifero", specie: "Cane", nome: "Bobi", dob: "2020-01-01"},
    { tipo: "Ovoviparo", specie: "Serpente",nome: "Fuffy", dob: "2010-01-01"},
    { tipo: "Uccello", specie: "Passerotto",nome: "Pippo", dob: "2025-01-01"},
    { tipo: "Mammifero", specie: "Gatto",nome: "Puffo", dob: "2015-01-01"},
    { tipo: "Pesce", specie: "Pesce",nome: "Ciccio", dob: "2026-01-01"}
  ];

  getStyle(s: any) {
    return {
      // Metto in grassetto se hanno data di nascita + vecchia di 5 anni rispetto a oggi
      'font-weight': (new Date().getFullYear() - new Date(s.dob).getFullYear()) > 5 ? 'bold' : 'normal',
      // Coloro diversamente i vari tipi di animali in base al tipo
      'color': s.tipo === 'Mammifero' ? 'blue' : s.tipo === 'Ovoviparo' ? 'green' : s.tipo === 'Uccello' ? 'orange' : s.tipo === 'Pesce' ? 'purple' : 'black',
      // Sottolineo i cani e i gatti
      'text-decoration': s.specie === 'Cane' || s.specie === 'Gatto' ? 'underline' : 'none' 
    }
  }
}