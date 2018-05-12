import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-crud-filmes',
  templateUrl: './crud-filmes.component.html',
  styleUrls: ['./crud-filmes.component.css']
})
export class CrudFilmesComponent implements OnInit {

  lista = [];
  nome = '';
  ano = '';

  constructor(private filmesService: FilmesService) {
  }


  ngOnInit() {
    this.atualiza();
  }

  atualiza() {
    this.filmesService.getAll().then(
      filmes => {
        this.lista = filmes;
      }
    );
  }

  salva(n, a) {
    this.filmesService.insert({ nome: this.nome, ano: this.ano }).then(dados => {
      this.nome = '';
      this.ano = '';
      this.atualiza();
    });
  }

  remove(id) {
    this.filmesService.delete(id).then(dados => {
      this.atualiza();

    });
  }

  altera(movie) {
    this.filmesService.update(movie).then(dados => {
      this.atualiza();
    });
  }
}
