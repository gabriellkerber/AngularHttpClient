import { Component, OnInit } from '@angular/core';
import { PostagensService } from '../services/postagens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from '../models/postagem.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  postagem: Postagem;

  constructor(private postagensService: PostagensService, private router: Router,private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const idPostagem = this.activatedRoute.snapshot.params.id;
    this.postagem = await this.postagensService.returnPosts(idPostagem);
  }

  async apagar(){
    await this.postagensService.delete(this.postagem.id);
    this.router.navigate(['home']);
  }

}
