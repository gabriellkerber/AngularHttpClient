import { Component, OnInit } from '@angular/core';
import { PostagensService } from '../services/postagens.service';
import { Postagem } from '../models/postagem.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postagens: Postagem[] = [];

  constructor(private postagensService: PostagensService, private router: Router) { }

  async ngOnInit() {
    this.postagens = await this.postagensService.returnPost();
    this.postagens.reverse();
  }

  newPost(){
    this.router.navigate(['cadastro']);
  }

  detalhes(postagem: Postagem){
    this.router.navigate(['postagens', postagem.id]);
    this.router.navigateByUrl(`postagens/${postagem.id}`);
  }

  async gostei(postagem: Postagem){
    postagem.likes += 1;
    await this.postagensService.Atualizar(postagem);
    
  }

  async naoGostei(postagem: Postagem){
    postagem.dislikes += 1;
    await this.postagensService.Atualizar(postagem);
  }

  async editar(postagem:Postagem){
    this.router.navigate(['postagens', postagem.id, 'editar'])
  }
}
