import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private http: HttpClient) { }

  async Criar(novoPost: Postagem): Promise<Postagem>{
    return this.http.post<Postagem>('http://localhost:3000/postagens', novoPost).toPromise();
  };

  async Atualizar(postagem: Postagem): Promise<Postagem>{
    return this.http.put<Postagem>('http://localhost:3000/postagens/' + postagem.id, postagem).toPromise();
  };

  async returnPost(): Promise<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:3000/postagens').toPromise();
  }

  async returnPosts(id: number): Promise<Postagem>{
    return this.http.get<Postagem>(`http://localhost:3000/postagens/${id}`).toPromise();
  }

  async delete(id: number): Promise<void>{
    return this.http.delete<void>('http://localhost:3000/postagens/' + id).toPromise();
  }
}
