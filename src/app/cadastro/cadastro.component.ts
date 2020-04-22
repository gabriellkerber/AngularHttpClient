import { Component, OnInit } from '@angular/core';
import { Postagem } from '../models/postagem.model';
import { PostagensService } from '../services/postagens.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario = new FormGroup({
    conteudo: new FormControl(null, [Validators.required]),
  });

  constructor(private postagensService: PostagensService, private router: Router) { }

  ngOnInit(): void {
  }

  async enviar(){

    if(this.formulario.invalid){
      return;
    }

    let novoPost: Postagem = this.formulario.value;
      novoPost.data= new Date(),
      novoPost.dislikes= 0,
      novoPost.likes= 0

    novoPost = await this.postagensService.Criar(novoPost);

    this.router.navigate(['home']);
  }

}
